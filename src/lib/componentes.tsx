import { useEffect, useRef, useState, type AnchorHTMLAttributes, type ReactNode } from "react";
type Negocio = { previa: boolean; nome: string; autor: { nome: string; url?: string }; endereco: { rua: string; bairro: string; cidade: string; uf: string } };

export const waLink = (numero: string, msg: string) => `https://wa.me/${numero}?text=${encodeURIComponent(msg)}`;

declare global {
  interface Window {
    va?: (evento: "event", dados: { name: string; data?: Record<string, string> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

/** Registra o clique (Vercel Web Analytics ou GA4, se instalados). Não quebra se nada estiver instalado. */
export function registrar(nome: string, dados: Record<string, string> = {}) {
  try {
    window.va?.("event", { name: nome, data: dados });
    window.gtag?.("event", nome, dados);
  } catch {
    /* sem analytics */
  }
}

type WaProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  numero: string;
  msg: string;
  origem: string;
  children: ReactNode;
};

/** Botão/link de WhatsApp com mensagem pronta e registro de clique. */
export function WhatsApp({ numero, msg, origem, children, ...resto }: WaProps) {
  return (
    <a
      {...resto}
      href={waLink(numero, msg)}
      target="_blank"
      rel="noopener"
      onClick={(e) => {
        registrar("whatsapp", { origem });
        resto.onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}

export function IconeWhatsApp({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2l-.5-.3Z" />
    </svg>
  );
}

export function IconeTelefone({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}

export function IconePino({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className={className}>
      <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/** Faixa "Prévia criada para…". Some quando negocio.previa = false. */
export function FaixaPrevia({ negocio, className = "" }: { negocio: Negocio; className?: string }) {
  const [aberta, setAberta] = useState(true);
  if (!negocio.previa || !aberta) return null;
  return (
    <div role="note" className={`relative px-11 py-2.5 text-center text-[13.5px] leading-snug ${className}`}>
      <strong className="font-semibold">Prévia</strong> criada para {negocio.nome} · sem compromisso · por{" "}
      {negocio.autor.url ? (
        <a href={negocio.autor.url} className="font-semibold underline underline-offset-2" target="_blank" rel="noopener">
          {negocio.autor.nome}
        </a>
      ) : (
        <strong className="font-semibold">{negocio.autor.nome}</strong>
      )}
      <button
        type="button"
        aria-label="Fechar aviso"
        onClick={() => setAberta(false)}
        className="absolute top-1/2 right-2 grid size-8 -translate-y-1/2 place-items-center text-xl opacity-70 hover:opacity-100"
      >
        ×
      </button>
    </div>
  );
}

export const rotaUrl = (n: Negocio) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${n.nome}, ${n.endereco.rua}, ${n.endereco.cidade} - ${n.endereco.uf}`)}`;

export const enderecoLinha = (n: Negocio) => `${n.endereco.rua} – ${n.endereco.bairro}, ${n.endereco.cidade} – ${n.endereco.uf}`;

/**
 * Mapa com "fachada": mostra um cartão leve e só carrega o Google Maps (pesado) quando o visitante toca.
 * Melhora o LCP/INP e evita cookies de terceiros antes da interação.
 */
export function Mapa({ negocio, className = "", rotulo = "Ver no mapa", capa }: { negocio: Negocio; className?: string; rotulo?: string; capa?: string }) {
  const [ativo, setAtivo] = useState(false);
  const q = encodeURIComponent(`${negocio.endereco.rua}, ${negocio.endereco.bairro}, ${negocio.endereco.cidade} - ${negocio.endereco.uf}`);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {ativo ? (
        <iframe
          title={`Mapa: ${negocio.nome}`}
          src={`https://www.google.com/maps?q=${q}&output=embed`}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <button
          type="button"
          onClick={() => setAtivo(true)}
          className={`mapa-fachada absolute inset-0 grid size-full place-items-center ${capa ? "bg-cover bg-center text-white" : ""}`}
          style={capa ? { backgroundImage: `linear-gradient(#0009, #000b), url(${capa})` } : undefined}
          aria-label={`Carregar mapa de ${negocio.nome}`}
        >
          <span className="flex flex-col items-center gap-2 text-center">
            <IconePino className="size-8" />
            <span className="font-semibold">{rotulo}</span>
            <span className="text-sm opacity-75">{enderecoLinha(negocio)}</span>
          </span>
        </button>
      )}
    </div>
  );
}

/**
 * Foto opcional: se o arquivo não existir, ela some e o fundo decorativo do card continua aparecendo.
 * Confere também depois da hidratação (o erro pode acontecer antes do React assumir a página).
 */
export function Foto({ src, alt, className = "", largura, altura, prioridade = false }: {
  src: string; alt: string; className?: string; largura?: number; altura?: number; prioridade?: boolean;
}) {
  const [ok, setOk] = useState(true);
  const ref = useRef<HTMLImageElement>(null);
  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setOk(false);
  }, []);
  if (!ok) return null;
  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      width={largura}
      height={altura}
      loading={prioridade ? "eager" : "lazy"}
      fetchPriority={prioridade ? "high" : "auto"}
      decoding="async"
      className={className}
      onError={() => setOk(false)}
    />
  );
}

/** FAQ acessível com <details>, sem JS. */
export function Faq({ itens, className = "", item = "", pergunta = "", resposta = "" }: {
  itens: Negocio["faq"]; className?: string; item?: string; pergunta?: string; resposta?: string;
}) {
  return (
    <div className={className}>
      {itens.map((f) => (
        <details key={f.p} className={`group ${item}`}>
          <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden ${pergunta}`}>
            <span>{f.p}</span>
            <span aria-hidden="true" className="text-2xl leading-none transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className={resposta}>{f.r}</p>
        </details>
      ))}
    </div>
  );
}
