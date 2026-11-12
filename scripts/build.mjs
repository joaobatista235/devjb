// Build com pré-renderização: o HTML já sai completo (Google, IA do Google e card do WhatsApp leem tudo).
// 1) build do navegador  2) build SSR  3) troca <!--head--> e <!--app--> pelo HTML real  4) robots.txt / sitemap.xml
import { build } from "vite";
import { readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";

const raiz = process.cwd();
const ssr = resolve(raiz, ".ssr");

await build({ logLevel: "warn" });
await build({ logLevel: "warn", build: { ssr: "src/entry-server.tsx", outDir: ssr, emptyOutDir: true, copyPublicDir: false } });

const entrada = readdirSync(ssr).find((f) => /^entry-server\.m?js$/.test(f));
const { render } = await import(pathToFileURL(resolve(ssr, entrada)).href);
const { html, head, meta } = render({ siteUrl: process.env.SITE_URL });

const arquivo = resolve(raiz, "dist/index.html");
const pagina = readFileSync(arquivo, "utf8").replace("<!--head-->", head).replace("<!--app-->", html);
writeFileSync(arquivo, pagina);
rmSync(ssr, { recursive: true, force: true });

writeFileSync(resolve(raiz, "dist/robots.txt"), meta.previa ? "User-agent: *\nAllow: /\n" : `User-agent: *\nAllow: /\nSitemap: ${meta.url}/sitemap.xml\n`);
if (!meta.previa) {
  const hoje = new Date().toISOString().slice(0, 10);
  writeFileSync(
    resolve(raiz, "dist/sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${meta.url}/</loc><lastmod>${hoje}</lastmod></url></urlset>\n`,
  );
}
console.log(`✔ build pronto em dist/ (index.html ${(Buffer.byteLength(pagina) / 1024).toFixed(1)} KB) · modo ${meta.previa ? "PRÉVIA" : "OFICIAL"}`);
