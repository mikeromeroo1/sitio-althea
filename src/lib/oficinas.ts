// Fotos de oficinas aprobadas por el cliente. El resto se eliminó de public/oficinas,
// así que esta lista es la única fuente de verdad: no agregues números sin subir el archivo.
const APROBADAS = [2, 4, 8, 10, 11, 13];

export const oficinas = APROBADAS.map(
  (n) => `/oficinas/AltheaOficina_${String(n).padStart(2, "0")}.webp`
);

/** Devuelve `cantidad` fotos de oficinas distintas, en orden aleatorio. */
export function oficinasAleatorias(cantidad: number): string[] {
  const pool = [...oficinas];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, Math.min(cantidad, pool.length));
}
