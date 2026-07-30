// Fotos de oficinas aprobadas por el cliente. El resto se eliminó de public/oficinas,
// así que esta lista es la única fuente de verdad: no agregues números sin subir el archivo.
const APROBADAS = [2, 4, 8, 10, 11, 13];

export const oficinas = APROBADAS.map(
  (n) => `/oficinas/AltheaOficina_${String(n).padStart(2, "0")}.webp`
);

/**
 * Devuelve `cantidad` fotos para acompañar al hero.
 *
 * Antes esto sorteaba con Math.random en cada carga. Dejó de servir al prerenderizar
 * la portada: el HTML se genera en el build y el navegador vuelve a ejecutar el
 * componente al hidratar, así que servidor y cliente elegían fotos distintas y React
 * encontraba un DOM que no coincidía con lo que esperaba. La selección tiene que ser
 * estable para que el prerender y la hidratación produzcan lo mismo.
 *
 * Para cambiar qué fotos aparecen, reordena APROBADAS.
 */
export function oficinasDestacadas(cantidad: number): string[] {
  return oficinas.slice(0, Math.min(cantidad, oficinas.length));
}
