/** Identidade Dev Batista: monograma "b_" (b + cursor) e wordmark "dev batista_". */
export function Monograma({ className = "size-9", fundo = "#FF5B1F", tinta = "#15140F", cursor = "#F3EEE4" }: { className?: string; fundo?: string; tinta?: string; cursor?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="16" fill={fundo} />
      <rect x="13" y="11" width="9" height="41" rx="2" fill={tinta} />
      <circle cx="31.5" cy="38" r="10.5" fill="none" stroke={tinta} strokeWidth="9" />
      <rect x="45" y="46" width="11" height="6" rx="1" fill={cursor} />
    </svg>
  );
}

export function Wordmark({ className = "", claro = false }: { className?: string; claro?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Monograma />
      <span className="flex items-baseline gap-1.5 leading-none">
        <span className={`font-mono text-[15px] font-medium ${claro ? "text-papel/60" : "text-tinta-3"}`}>dev</span>
        <span className={`display text-[24px] font-extrabold ${claro ? "text-papel" : "text-tinta"}`}>
          batista<span className="animate-cursor text-sinal">_</span>
        </span>
      </span>
    </span>
  );
}
