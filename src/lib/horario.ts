import type { Horarios } from "./tipos";

export const DIAS = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"] as const;
export const ORDEM_SEMANA = [1, 2, 3, 4, 5, 6, 0] as const;

export interface Agora {
  dia: number;
  h: number;
}

/** Dia da semana e hora decimal no fuso do negócio (não no fuso do visitante). */
export function agoraEm(fuso: string, data = new Date()): Agora {
  const p = new Intl.DateTimeFormat("en-US", {
    timeZone: fuso,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(data);
  const v = (t: string) => p.find((x) => x.type === t)!.value;
  const dia = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[v("weekday")] ?? 0;
  return { dia, h: (Number(v("hour")) % 24) + Number(v("minute")) / 60 };
}

export const fmtHora = (h: number) => {
  const hh = Math.floor(h);
  const mm = Math.round((h - hh) * 60);
  return mm ? `${hh}h${String(mm).padStart(2, "0")}` : `${hh}h`;
};

export const fmtFaixa = (x: [number, number] | null) => (x ? `${fmtHora(x[0])} – ${fmtHora(x[1])}` : "Fechado");

export const fmtDuracao = (min: number) => {
  const m = Math.max(1, Math.round(min));
  if (m < 60) return `${m} min`;
  const r = m % 60;
  return `${Math.floor(m / 60)}h${r ? String(r).padStart(2, "0") : ""}`;
};

export interface Status {
  aberto: boolean;
  titulo: string; // "Aberto agora" | "Fechado"
  detalhe: string; // "fecha às 18h" | "abre amanhã às 8h"
}

export function statusAberto(horarios: Horarios, agora: Agora): Status {
  const hoje = horarios[agora.dia];
  if (hoje && agora.h >= hoje[0] && agora.h < hoje[1]) {
    return { aberto: true, titulo: "Aberto agora", detalhe: `fecha às ${fmtHora(hoje[1])}` };
  }
  if (hoje && agora.h < hoje[0]) {
    return { aberto: false, titulo: "Fechado", detalhe: `abre hoje às ${fmtHora(hoje[0])}` };
  }
  for (let n = 1; n <= 7; n++) {
    const d = (agora.dia + n) % 7;
    const x = horarios[d];
    if (x) {
      const quando = n === 1 ? "amanhã" : DIAS[d].toLowerCase();
      return { aberto: false, titulo: "Fechado", detalhe: `abre ${quando} às ${fmtHora(x[0])}` };
    }
  }
  return { aberto: false, titulo: "Fechado", detalhe: "" };
}

/** Converte para openingHoursSpecification do schema.org, agrupando dias com o mesmo horário. */
export function horariosSchema(horarios: Horarios) {
  const nomes = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const grupos = new Map<string, string[]>();
  for (const d of ORDEM_SEMANA) {
    const x = horarios[d];
    if (!x) continue;
    const k = x.join("-");
    grupos.set(k, [...(grupos.get(k) ?? []), nomes[d]]);
  }
  const hhmm = (h: number) => `${String(Math.floor(h)).padStart(2, "0")}:${String(Math.round((h % 1) * 60)).padStart(2, "0")}`;
  return [...grupos.entries()].map(([k, dias]) => {
    const [a, f] = k.split("-").map(Number);
    return { "@type": "OpeningHoursSpecification", dayOfWeek: dias, opens: hhmm(a), closes: hhmm(f) };
  });
}
