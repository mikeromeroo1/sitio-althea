import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const contenedor = document.getElementById("root")!;

/**
 * Solo la portada se prerenderiza en el build. Como Vercel reescribe cualquier ruta
 * a index.html, /equipos o /cotizacion también reciben el markup de la portada; ahí
 * hidratar produciría un DOM que no coincide, así que se limpia y se monta normal.
 */
const esPortada = window.location.pathname === "/";
const vienePrerenderizado = contenedor.hasChildNodes();

if (esPortada && vienePrerenderizado) {
  hydrateRoot(contenedor, <App />);
} else {
  contenedor.innerHTML = "";
  createRoot(contenedor).render(<App />);
}
