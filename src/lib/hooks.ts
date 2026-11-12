import { useEffect, useState } from "react";
import { agoraEm, type Agora } from "./horario";

/**
 * Hora atual no fuso do negócio, atualizada a cada minuto.
 * Retorna null no HTML pré-renderizado e na 1ª renderização do navegador,
 * para não haver diferença de hidratação (o horário muda entre o build e a visita).
 */
export function useAgora(fuso: string): Agora | null {
  const [agora, setAgora] = useState<Agora | null>(null);
  useEffect(() => {
    const tick = () => setAgora(agoraEm(fuso));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, [fuso]);
  return agora;
}

/** Anima elementos com a classe .reveal quando entram na tela. Sem JS, tudo aparece normalmente. */
export function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal:not(.on)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("on"));
      return;
    }
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("on");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [dep]);
}
