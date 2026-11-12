import { renderToString } from "react-dom/server";
import App from "./App";
import { marca } from "./dados";
import { head } from "./seo";

export function render({ siteUrl }: { siteUrl?: string } = {}) {
  return { html: renderToString(<App />), head: head(siteUrl), meta: { previa: false, url: (siteUrl || marca.url).replace(/\/$/, "") } };
}
