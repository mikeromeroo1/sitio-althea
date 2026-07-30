import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppContent from "./AppContent";

/**
 * Entrada que solo usa el build para generar el HTML de la portada.
 * No se incluye en el bundle del navegador.
 */
export function render(url: string): string {
  return renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );
}
