# joaobatistadev.site · Dev Batista

React 19 + Vite 7 + Tailwind 4, pré-renderizado (HTML completo para Google e WhatsApp). Publicado na Cloudflare (Workers com arquivos estáticos).

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run check    # confere SEO, card do WhatsApp, schema
```

- Textos, preços, WhatsApp e FAQ: `src/dados.ts`
- Identidade (logo): `src/marca.tsx` · cores e fontes: `src/estilo.css`

## Cloudflare (deploy automático pelo GitHub)
Projeto `devjb` em Workers & Pages → Settings → Build:
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- O `wrangler.jsonc` já aponta os arquivos para `dist/`. Cada push na branch principal publica sozinho.
