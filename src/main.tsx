import "./estilo.css";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

const raiz = document.getElementById("root")!;
// Em produção o HTML já vem pré-renderizado: hidrata. No modo dev: renderiza do zero.
if (raiz.firstElementChild) hydrateRoot(raiz, <App />);
else createRoot(raiz).render(<App />);
