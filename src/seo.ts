import { faq, marca, seo } from "./dados";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

export function head(siteUrl?: string) {
  const url = (siteUrl || marca.url).replace(/\/$/, "");
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${url}/#negocio`,
      name: marca.nome,
      url,
      image: `${url}${seo.imagem}`,
      logo: `${url}/icon-512.png`,
      description: seo.descricao,
      telephone: `+${marca.whatsapp}`,
      founder: { "@type": "Person", name: marca.responsavel },
      areaServed: { "@type": "Country", name: "Brasil" },
      priceRange: "R$ 790 – R$ 1.290",
      knowsAbout: ["Criação de sites", "Landing pages", "SEO local", "Sites para pequenos negócios"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({ "@type": "Question", name: f.p, acceptedAnswer: { "@type": "Answer", text: f.r } })),
    },
  ];
  return [
    `<title>${esc(seo.titulo)}</title>`,
    `<meta name="description" content="${esc(seo.descricao)}">`,
    `<link rel="canonical" href="${url}/">`,
    `<meta name="robots" content="index, follow, max-image-preview:large">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:locale" content="pt_BR">`,
    `<meta property="og:site_name" content="${marca.nome}">`,
    `<meta property="og:url" content="${url}/">`,
    `<meta property="og:title" content="${esc(seo.titulo)}">`,
    `<meta property="og:description" content="${esc(seo.descricao)}">`,
    `<meta property="og:image" content="${url}${seo.imagem}">`,
    `<meta property="og:image:type" content="image/jpeg">`,
    `<meta property="og:image:width" content="1200">`,
    `<meta property="og:image:height" content="630">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    ...schema.map((s) => `<script type="application/ld+json">${JSON.stringify(s).replace(/</g, "\\u003c")}</script>`),
  ].join("\n    ");
}
