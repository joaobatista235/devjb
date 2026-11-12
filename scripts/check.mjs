// Confere o HTML gerado: SEO, card do WhatsApp, schema, H1, alt, WhatsApp.
import { existsSync, readFileSync, statSync } from "node:fs";

const f = "dist/index.html";
if (!existsSync(f)) {
  console.error("Rode `npm run build` antes.");
  process.exit(1);
}
const h = readFileSync(f, "utf8");
const itens = [
  ["<title> de 10 a 70 caracteres", /<title>[^<]{10,70}<\/title>/],
  ["meta description de 50 a 160 caracteres", /<meta name="description" content="[^"]{50,160}"/],
  ["canonical absoluto", /<link rel="canonical" href="https:\/\//],
  ["og:image absoluta", /<meta property="og:image" content="https:\/\//],
  ["og:title", /property="og:title"/],
  ["JSON-LD (schema.org)", /application\/ld\+json/],
  ["um único <h1>", (x) => (x.match(/<h1[\s>]/g) || []).length === 1],
  ["conteúdo pré-renderizado", (x) => !/<div id="root"><!--app--><\/div>/.test(x) && !/<div id="root"><\/div>/.test(x)],
  ["link wa.me com número", /https:\/\/wa\.me\/\d{12,13}/],
  ["toda <img> com alt", (x) => !/<img(?![^>]*\balt=)[^>]*>/.test(x)],
];
let ok = true;
for (const [nome, t] of itens) {
  const passou = typeof t === "function" ? t(h) : t.test(h);
  ok &&= passou;
  console.log(`${passou ? "✔" : "✘"} ${nome}`);
}
if (existsSync("dist/og.jpg")) {
  const kb = statSync("dist/og.jpg").size / 1024;
  const passou = kb < 300;
  ok &&= passou;
  console.log(`${passou ? "✔" : "✘"} og.jpg com ${kb.toFixed(0)} KB (o WhatsApp exige menos de 300 KB)`);
}
console.log(/noindex/.test(h) ? "• modo PRÉVIA: fora do Google (noindex)" : "• modo OFICIAL: indexável");
if (!ok) process.exit(1);
