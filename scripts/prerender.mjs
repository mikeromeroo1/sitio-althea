/**
 * Inyecta el HTML de la portada en dist/index.html.
 *
 * El problema que resuelve: siendo un SPA, dist/index.html se servía con
 * <div id="root"></div> vacío, así que el navegador no podía pintar nada hasta
 * descargar y ejecutar todo el JS. En móvil throttleado eso eran ~4.8 s de
 * pantalla en blanco. Con el markup ya escrito, el primer pintado no espera a React.
 *
 * Corre después de los dos `vite build` (cliente y servidor); ver el script
 * "build" en package.json.
 */
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const RAIZ = new URL("..", import.meta.url).pathname;
const INDEX = path.join(RAIZ, "dist/index.html");
const ENTRADA = path.join(RAIZ, "dist-ssr/entry-server.js");

const { render } = await import(ENTRADA);
const html = render("/");

const plantilla = await readFile(INDEX, "utf-8");

const MARCA = '<div id="root"></div>';
if (!plantilla.includes(MARCA)) {
  throw new Error(
    `No encontré ${MARCA} en dist/index.html. Si cambió el markup del contenedor, ` +
      `actualiza este script: sin ese anclaje el prerender no se inyecta.`
  );
}

await writeFile(INDEX, plantilla.replace(MARCA, `<div id="root">${html}</div>`), "utf-8");

const kb = (t) => `${(Buffer.byteLength(t) / 1024).toFixed(1)} KB`;
console.log(
  `prerender: portada inyectada en dist/index.html  ${kb(plantilla)} → ${kb(
    plantilla.replace(MARCA, `<div id="root">${html}</div>`)
  )}`
);
