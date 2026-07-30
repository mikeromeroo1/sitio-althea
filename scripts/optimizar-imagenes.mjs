/**
 * Optimiza las imágenes de public/ convirtiéndolas a WebP y reduciéndolas al
 * tamaño en que realmente se muestran.
 *
 *   npm run optimizar-imagenes            convierte y borra el original
 *   npm run optimizar-imagenes -- --conservar   deja el original en su lugar
 *   npm run optimizar-imagenes -- --simular     solo muestra qué haría
 *
 * `ancho` es el ancho máximo en píxeles: el doble del tamaño en CSS con que se
 * pinta la imagen, para que se vea nítida en pantallas retina. Nunca agranda una
 * imagen que ya sea más chica que ese valor.
 *
 * Al agregar una imagen nueva a public/, súmala a esta lista con el ancho que
 * corresponda y vuelve a correr el script.
 */
import { readdir, stat, unlink } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PUBLIC = new URL("../public/", import.meta.url).pathname;

const CONSERVAR = process.argv.includes("--conservar");
const SIMULAR = process.argv.includes("--simular");

/** calidad ~80 para fotos; más alta para logos y line art, que marcan artefactos. */
const OBJETIVOS = [
  // Logos e iconos (se pintan chicos, venían enormes)
  { archivo: "logo-verde.png", ancho: 600, calidad: 90 },   // navbar, h-36 máx
  { archivo: "logo-blanco.png", ancho: 600, calidad: 90 },  // footer, h-12
  { archivo: "kinesis-logo.png", ancho: 420, calidad: 90 },
  { archivo: "6k-logo-rojo.png", ancho: 500, calidad: 90 },
  { archivo: "ventilator_transparent.png", ancho: 320, calidad: 90 },
  { archivo: "hands_transparent.png", ancho: 320, calidad: 90 },
  { archivo: "carro-moderno-recortado.png", ancho: 520, calidad: 90 },

  // Fotos: venían en PNG, que para fotografía pesa muchísimo más que WebP
  { archivo: "equipo-1.png", ancho: 1344, calidad: 80 },    // hero, es la LCP
  { archivo: "equipo-2.png", ancho: 1000, calidad: 80 },
  { archivo: "equipo-3.png", ancho: 1000, calidad: 80 },
  { archivo: "ambulancia.png", ancho: 1000, calidad: 80 },

  // Carpetas completas
  { carpeta: "oficinas", ancho: 1280, calidad: 78 },        // hero y Sobre Nosotros
  { carpeta: "equipos", ancho: 900, calidad: 78, recursivo: true }, // catálogo
];

const RASTER = new Set([".png", ".jpg", ".jpeg"]);

async function listar(dir, recursivo) {
  const salida = [];
  for (const entrada of await readdir(dir, { withFileTypes: true })) {
    const ruta = path.join(dir, entrada.name);
    if (entrada.isDirectory()) {
      if (recursivo) salida.push(...(await listar(ruta, recursivo)));
    } else if (RASTER.has(path.extname(entrada.name).toLowerCase())) {
      salida.push(ruta);
    }
  }
  return salida;
}

/** Expande la lista de objetivos a archivos concretos. */
async function resolver() {
  const tareas = [];
  for (const obj of OBJETIVOS) {
    if (obj.archivo) {
      const ruta = path.join(PUBLIC, obj.archivo);
      try {
        await stat(ruta);
        tareas.push({ ...obj, ruta });
      } catch {
        console.warn(`  omitida (no existe): ${obj.archivo}`);
      }
      continue;
    }
    const dir = path.join(PUBLIC, obj.carpeta);
    try {
      for (const ruta of await listar(dir, obj.recursivo)) {
        tareas.push({ ...obj, ruta });
      }
    } catch {
      console.warn(`  omitida (no existe la carpeta): ${obj.carpeta}`);
    }
  }
  return tareas;
}

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

let antesTotal = 0;
let despuesTotal = 0;
const filas = [];

for (const tarea of await resolver()) {
  const { ruta, ancho, calidad } = tarea;
  const rel = path.relative(PUBLIC, ruta);
  const destino = ruta.replace(/\.(png|jpe?g)$/i, ".webp");

  const antes = (await stat(ruta)).size;
  const meta = await sharp(ruta).metadata();

  if (SIMULAR) {
    filas.push([rel, `${meta.width}x${meta.height}`, kb(antes), "→", `ancho ${ancho}`, "(simulado)"]);
    antesTotal += antes;
    continue;
  }

  await sharp(ruta)
    // withoutEnlargement: si ya es más chica que el objetivo, se deja igual.
    .resize({ width: ancho, withoutEnlargement: true })
    .webp({ quality: calidad, effort: 6 })
    .toFile(destino);

  const despues = (await stat(destino)).size;
  const metaNueva = await sharp(destino).metadata();

  if (!CONSERVAR && destino !== ruta) await unlink(ruta);

  antesTotal += antes;
  despuesTotal += despues;
  filas.push([
    rel,
    `${meta.width}x${meta.height}`,
    kb(antes),
    "→",
    `${metaNueva.width}x${metaNueva.height}`,
    kb(despues),
    // Un archivo ya optimizado puede crecer un poco; que se lea como "+2%".
    `${despues <= antes ? "-" : "+"}${Math.abs(Math.round((1 - despues / antes) * 100))}%`,
  ]);
}

const anchos = [];
for (const fila of filas) {
  fila.forEach((celda, i) => {
    anchos[i] = Math.max(anchos[i] ?? 0, String(celda).length);
  });
}
for (const fila of filas) {
  console.log(fila.map((c, i) => String(c).padEnd(anchos[i])).join("  "));
}

console.log(
  SIMULAR
    ? `\n${filas.length} imágenes, ${kb(antesTotal)} actuales [simulación, nada se escribió]`
    : `\n${filas.length} imágenes: ${kb(antesTotal)} → ${kb(despuesTotal)} ` +
      `(-${Math.round((1 - despuesTotal / antesTotal) * 100)}%, ` +
      `${kb(antesTotal - despuesTotal)} menos)` +
      (CONSERVAR ? "\nOriginales conservados." : "\nOriginales eliminados.")
);
