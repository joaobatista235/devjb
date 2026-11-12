/*
 * Dev Batista · site próprio
 * Contexto: dono de pequeno negócio que quer aparecer no Google e receber pedidos no WhatsApp, sem complicação.
 * Conceito: "letreiro de bairro, feito com código" — quente e próximo, com um detalhe de dev.
 * Paleta 60/30/10: papel creme / tinta / laranja de placa "ABERTO". Verde só no WhatsApp.
 * Tipografia: Bricolage Grotesque (display) + Hanken Grotesk (texto) + JetBrains Mono (etiquetas).
 * Assinatura: celular com um site de demonstração funcionando (aberto agora + WhatsApp com mensagem pronta).
 */
import { useState, type ReactNode } from "react";
import { Faq, IconeWhatsApp, WhatsApp } from "./lib/componentes";
import { statusAberto } from "./lib/horario";
import { useAgora, useReveal } from "./lib/hooks";
import { conceitos, ctaFinal, demo, diferenciais, dor, faq, hero, investimento, marca, nav, processo, recursos } from "./dados";
import { Monograma, Wordmark } from "./marca";

const FUSO = "America/Sao_Paulo";

function Icone({ nome }: { nome: string }) {
  const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.9, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const d: Record<string, ReactNode> = {
    whats: <path {...p} d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Zm5-11c0 3.3 2.7 6 6 6l1.3-1.6-2-1-1 .8a4 4 0 0 1-2.4-2.4l.8-1-1-2L9 9Z" />,
    relogio: <g {...p}><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></g>,
    lista: <g {...p}><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 9h8M8 12h8M8 15h5" /></g>,
    google: <g {...p}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></g>,
    mapa: <g {...p}><path d="M12 20.5s-6.5-5.6-6.5-10.3a6.5 6.5 0 0 1 13 0c0 4.7-6.5 10.3-6.5 10.3Z" /><circle cx="12" cy="10" r="2.3" /></g>,
    raio: <path {...p} d="M13 3 5 13.5h6L10 21l8-10.5h-6L13 3Z" />,
  };
  return <svg viewBox="0 0 24 24" className="size-6" aria-hidden="true">{d[nome]}</svg>;
}

/** Celular com um site de demonstração (negócio fictício) funcionando de verdade. */
function CelularDemo() {
  const agora = useAgora(FUSO);
  const st = agora ? statusAberto(demo.horarios, agora) : null;
  const [msg, setMsg] = useState<string | null>(null);
  const pedir = (item: string) => {
    setMsg(`Olá! Vi no site: ${item}. Ainda tem hoje?`);
    window.setTimeout(() => setMsg(null), 3200);
  };
  return (
    <figure className="entrada relative mx-auto w-[300px] sm:w-[320px]" aria-label="Demonstração de site para um negócio fictício">
      <div className="absolute -inset-6 -z-10 rotate-6 rounded-[48px] bg-sinal/15" aria-hidden="true" />
      <div className="rounded-[44px] bg-tinta p-2.5 shadow-[0_40px_80px_-30px_#15140f80]">
        <div className="relative overflow-hidden rounded-[36px] bg-[#FBF6EE]">
          <div className="mx-auto mt-2 h-5 w-24 rounded-full bg-tinta" aria-hidden="true" />
          <div className="px-5 pt-4 pb-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="display text-[22px] leading-none font-extrabold text-[#3B2416]">{demo.nome}</p>
                <p className="mt-1 text-[11px] text-[#8A6F5A]">{demo.tipo}</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[10.5px] font-bold text-[#3B2416] shadow-sm">
                <i className={`size-1.5 rounded-full ${st?.aberto ? "bg-wa" : "bg-[#C2410C]"}`} />
                {st ? (st.aberto ? `Aberto · ${st.detalhe}` : st.detalhe.replace(/^./, (c) => c.toUpperCase())) : "Seg–Sáb"}
              </span>
            </div>
            <div className="mt-4 grid h-28 place-items-center rounded-2xl bg-[linear-gradient(135deg,#E9B97A,#C47A3D)] text-[#3B2416]" aria-hidden="true">
              <svg viewBox="0 0 64 40" className="w-24 opacity-80"><path d="M10 14h36v10a14 14 0 0 1-14 14h-8A14 14 0 0 1 10 24V14Z" fill="#3B2416" /><path d="M46 17h4a6 6 0 0 1 0 12h-5" fill="none" stroke="#3B2416" strokeWidth="3.5" /><path d="M22 4c-2 3 2 5 0 8M30 2c-2 3 2 5 0 8" stroke="#FBF6EE" strokeWidth="2.5" fill="none" strokeLinecap="round" /></svg>
            </div>
            <ul className="mt-4 grid gap-2">
              {demo.itens.map((i) => (
                <li key={i.nome} className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-[0_1px_0_#0000000d]">
                  <span className="text-[13px] font-semibold text-[#3B2416]">{i.nome} <span className="font-normal text-[#8A6F5A]">· {i.preco}</span></span>
                  <button type="button" onClick={() => pedir(i.nome)} className="rounded-full bg-wa px-3 py-1.5 text-[11px] font-bold text-white transition active:scale-95">
                    Pedir
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex gap-2 text-[11px] font-semibold text-[#3B2416]">
              <span className="flex-1 rounded-xl border border-[#E7DCCB] py-2 text-center">📍 Como chegar</span>
              <span className="flex-1 rounded-xl border border-[#E7DCCB] py-2 text-center">🕒 Horários</span>
            </div>
          </div>
          {/* "WhatsApp" simulado */}
          <div
            className={`absolute inset-x-3 bottom-3 rounded-2xl bg-[#075E54] p-3 text-white shadow-xl transition duration-300 ${msg ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}
            aria-live="polite"
          >
            <p className="flex items-center gap-1.5 text-[10.5px] font-bold opacity-80"><IconeWhatsApp className="size-3.5" /> Abrindo o WhatsApp do {demo.nome}…</p>
            <p className="mt-1.5 rounded-lg rounded-tl-none bg-[#DCF8C6] px-2.5 py-2 text-[12px] text-[#111]">{msg}</p>
          </div>
        </div>
      </div>
      <figcaption className="mt-5 text-center font-mono text-[11.5px] text-tinta-3">↑ toque em “Pedir” · negócio fictício</figcaption>
    </figure>
  );
}

function Cab({ kicker, titulo, texto, claro = false }: { kicker: string; titulo: ReactNode; texto?: string; claro?: boolean }) {
  return (
    <div className="mb-11 max-w-[760px]">
      <p className={`etiqueta reveal ${claro ? "text-papel/70" : ""}`}>{kicker}</p>
      <h2 className="display reveal mt-3.5 text-[clamp(34px,5vw,58px)] leading-[1.02] font-extrabold">{titulo}</h2>
      {texto && <p className={`reveal mt-4 max-w-[56ch] text-[18px] ${claro ? "text-papel/75" : "text-tinta-2"}`}>{texto}</p>}
    </div>
  );
}

export default function App() {
  useReveal();
  const wa = (origem: string, msg = marca.msgPadrao) => ({ numero: marca.whatsapp, msg, origem });

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-linha/70 bg-papel/85 backdrop-blur-md">
        <div className="caixa flex h-[68px] items-center justify-between gap-4">
          <a href="#" aria-label="Dev Batista, início"><Wordmark /></a>
          <nav aria-label="Seções" className="hidden gap-7 text-[15px] font-medium text-tinta-2 lg:flex [&_a:hover]:text-tinta">
            {nav.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
          </nav>
          <WhatsApp {...wa("topo")} className="btn btn-tinta px-4 py-2.5 text-[14px]">
            <IconeWhatsApp className="size-4.5" /> <span className="hidden sm:inline">Falar comigo</span><span className="sm:hidden">WhatsApp</span>
          </WhatsApp>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="caixa grid items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
            <div className="min-w-0">
              <h1 className="entrada display text-[clamp(44px,7vw,86px)] leading-[.95] font-extrabold">
                <span className="etiqueta mb-5 flex w-fit font-mono text-[13px] tracking-[0.04em] [font-variation-settings:normal]">{hero.kicker}</span>
                {hero.titulo[0]} <span className="text-sinal">{hero.titulo[1]}</span>
              </h1>
              <p className="entrada mt-6 max-w-[48ch] text-[19px] text-tinta-2">{hero.texto}</p>
              <div className="entrada mt-8 flex flex-wrap gap-3">
                <WhatsApp {...wa("hero", ctaFinal.msg)} className="btn btn-wa px-7 py-4 text-[17px]">
                  <IconeWhatsApp /> {ctaFinal.botao}
                </WhatsApp>
                <a href="#site" className="btn btn-linha">Ver o que vem no site</a>
              </div>
              <ul className="entrada mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[15px] font-medium text-tinta-2">
                {hero.provas.map((p) => (
                  <li key={p} className="flex items-center gap-2"><span className="text-sinal">✓</span>{p}</li>
                ))}
              </ul>
            </div>
            <CelularDemo />
          </div>
        </section>

        {/* LETREIRO DE SEGMENTOS */}
        <div className="overflow-hidden border-y border-tinta bg-tinta py-3.5 text-papel" aria-hidden="true">
          <div className="flex w-max animate-letreiro gap-10 font-mono text-[14px] tracking-[0.06em] uppercase">
            {[...dor.segmentos, ...dor.segmentos].map((s, i) => (
              <span key={i} className="flex items-center gap-10">{s}<span className="text-sinal">●</span></span>
            ))}
          </div>
        </div>

        {/* DOR → SOLUÇÃO */}
        <section className="py-24">
          <div className="caixa">
            <Cab kicker={dor.kicker} titulo={dor.titulo} />
            <div className="grid gap-3 md:grid-cols-2">
              {dor.itens.map((i) => (
                <div key={i.de} className="reveal grid gap-3 rounded-2xl border border-linha bg-cartao p-5 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
                  <p className="text-[15.5px] text-tinta-3 line-through decoration-sinal/60">{i.de}</p>
                  <span className="hidden font-mono text-sinal sm:block" aria-hidden="true">→</span>
                  <p className="text-[15.5px] font-semibold">{i.para}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* RECURSOS */}
        <section id="site" className="border-t border-linha bg-papel-2 py-24">
          <div className="caixa">
            <Cab kicker={recursos.kicker} titulo={recursos.titulo} />
            <div className="grid gap-px overflow-hidden rounded-3xl border border-linha bg-linha sm:grid-cols-2 lg:grid-cols-3">
              {recursos.itens.map((r) => (
                <div key={r.titulo} className="reveal bg-cartao p-7">
                  <span className="grid size-11 place-items-center rounded-xl bg-tinta text-papel"><Icone nome={r.icone} /></span>
                  <h3 className="display mt-5 text-[22px] leading-tight font-bold">{r.titulo}</h3>
                  <p className="mt-2 text-[15.5px] text-tinta-2">{r.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="bg-noite py-24 text-papel">
          <div className="caixa">
            <Cab kicker={processo.kicker} titulo={<>Você vê o seu site <span className="text-sinal">antes de decidir.</span></>} claro />
            <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {processo.passos.map((p, i) => (
                <li key={p.titulo} className="reveal rounded-2xl border border-white/10 bg-white/[.04] p-6">
                  <span className="font-mono text-[13px] text-sinal">0{i + 1}</span>
                  <h3 className="display mt-3 text-[22px] font-bold">{p.titulo}</h3>
                  <p className="mt-2 text-[15.5px] text-papel/70">{p.texto}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ESTILOS */}
        <section className="py-24">
          <div className="caixa">
            <Cab kicker={conceitos.kicker} titulo={conceitos.titulo} texto={conceitos.texto} />
            <div className="grid gap-5 md:grid-cols-3">
              {conceitos.itens.map((c) => (
                <article key={c.nome} className="reveal">
                  <div className="overflow-hidden rounded-2xl border border-linha shadow-[0_24px_50px_-30px_#15140f66]">
                    <div className="flex items-center gap-1.5 bg-[#E4DDCF] px-3 py-2" aria-hidden="true">
                      <i className="size-2 rounded-full bg-[#C9BFAE]" /><i className="size-2 rounded-full bg-[#C9BFAE]" /><i className="size-2 rounded-full bg-[#C9BFAE]" />
                    </div>
                    <div className="flex aspect-[4/3] flex-col justify-between p-5" style={{ background: c.fundo, color: c.tinta }}>
                      <span className="w-fit rounded-full px-2.5 py-1 text-[10.5px] font-bold tracking-[0.08em] uppercase" style={{ background: c.destaque, color: c.fundo }}>{c.etiqueta}</span>
                      <p
                        className="text-[26px] leading-[1.02]"
                        style={{
                          fontFamily: c.fonte === "serif" ? "Georgia, 'Times New Roman', serif" : c.fonte === "display" ? "var(--font-display)" : "var(--font-sans)",
                          fontWeight: c.fonte === "display" ? 800 : c.fonte === "serif" ? 400 : 600,
                          fontStyle: c.fonte === "serif" ? "italic" : "normal",
                        }}
                      >
                        {c.titulo}
                      </p>
                      <span className="w-fit rounded-full px-3 py-1.5 text-[11px] font-bold text-white" style={{ background: "#1F8A4C" }}>WhatsApp</span>
                    </div>
                  </div>
                  <h3 className="display mt-4 text-[20px] font-bold">{c.nome}</h3>
                  <p className="text-[15px] text-tinta-3">{c.exemplo}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="border-t border-linha py-24">
          <div className="caixa grid gap-12 lg:grid-cols-[.9fr_1.1fr]">
            <Cab kicker={diferenciais.kicker} titulo={diferenciais.titulo} />
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {diferenciais.itens.map((d) => (
                <div key={d.titulo} className="reveal border-t-2 border-tinta pt-4">
                  <h3 className="display text-[21px] font-bold">{d.titulo}</h3>
                  <p className="mt-2 text-[15.5px] text-tinta-2">{d.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INVESTIMENTO */}
        <section id="investimento" className="border-t border-linha bg-papel-2 py-24">
          <div className="caixa">
            <Cab kicker={investimento.kicker} titulo={investimento.titulo} />
            <div className="grid gap-5 lg:grid-cols-2">
              {investimento.pacotes.map((p) => (
                <div key={p.nome} className={`reveal relative flex flex-col rounded-3xl border p-8 ${p.destaque ? "border-tinta bg-tinta text-papel" : "border-linha bg-cartao"}`}>
                  {p.destaque && <span className="absolute top-6 right-6 rounded-full bg-sinal px-3 py-1 font-mono text-[11.5px] font-medium text-white uppercase">{p.destaque}</span>}
                  <h3 className="display text-[26px] font-bold">{p.nome}</h3>
                  <p className={`mt-1 text-[15.5px] ${p.destaque ? "text-papel/70" : "text-tinta-2"}`}>{p.texto}</p>
                  <p className="display mt-6 text-[60px] leading-none font-extrabold">
                    <span className="mr-1 align-top text-[22px] font-bold">R$</span>{p.preco}
                  </p>
                  <ul className="mt-7 grid flex-1 gap-2.5 text-[15.5px]">
                    {p.itens.map((i) => <li key={i} className="flex gap-2.5"><span className="text-sinal">✓</span>{i}</li>)}
                  </ul>
                  <WhatsApp
                    {...wa(`pacote:${p.nome}`, `Olá, João! Vi no site o pacote ${p.nome} (R$ ${p.preco}) e quero conversar sobre o meu negócio.`)}
                    className={`btn mt-8 ${p.destaque ? "bg-sinal text-white hover:bg-sinal-escuro" : "btn-tinta"}`}
                  >
                    Quero o {p.nome}
                  </WhatsApp>
                </div>
              ))}
            </div>
            <div className="reveal mt-8 grid gap-2 text-[15px] text-tinta-2">
              <p>{investimento.extra}</p>
              <p>{investimento.aparte}</p>
              <p>{investimento.pagamento}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="py-24">
          <div className="caixa grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <Cab kicker="Dúvidas" titulo="Perguntas que todo dono de negócio faz." />
            <Faq itens={faq} className="border-t border-tinta" item="border-b border-linha" pergunta="py-5 text-[18px] font-bold" resposta="-mt-1.5 pb-6 text-tinta-2" />
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="caixa pb-24">
          <div className="reveal relative overflow-hidden rounded-[32px] bg-sinal px-7 py-14 text-tinta sm:px-14">
            <Monograma className="absolute -right-6 -bottom-8 size-56 rotate-[-8deg] opacity-15" fundo="#15140F" tinta="#FF5B1F" cursor="#FF5B1F" />
            <h2 className="display relative max-w-[16ch] text-[clamp(34px,5.4vw,62px)] leading-[1] font-extrabold">{ctaFinal.titulo}</h2>
            <p className="relative mt-4 max-w-[52ch] text-[18px] text-tinta/80">{ctaFinal.texto}</p>
            <WhatsApp {...wa("cta-final", ctaFinal.msg)} className="btn btn-tinta relative mt-8 px-7 py-4 text-[17px]">
              <IconeWhatsApp /> {ctaFinal.botao}
            </WhatsApp>
          </div>
        </section>
      </main>

      <footer className="bg-noite pt-12 pb-28 text-papel/70 lg:pb-12">
        <div className="caixa flex flex-wrap items-center justify-between gap-6">
          <Wordmark claro />
          <p className="text-[14px]">Sites para pequenos negócios · {marca.responsavel} · © {new Date().getFullYear()}</p>
        </div>
      </footer>

      <nav aria-label="Atalho" className="fixed inset-x-0 bottom-0 z-50 border-t border-linha bg-papel/95 px-3 pt-2.5 pb-[calc(10px+env(safe-area-inset-bottom))] backdrop-blur lg:hidden">
        <WhatsApp {...wa("barra", ctaFinal.msg)} className="btn btn-wa w-full">
          <IconeWhatsApp /> {ctaFinal.botao}
        </WhatsApp>
      </nav>
    </>
  );
}

