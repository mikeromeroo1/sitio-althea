export type EquipoImagen = {
  src: string;
  /** Nombre del equipo, tal como se muestra sobre la foto. */
  nombre: string;
};

export type Especialidad = {
  /** Ancla en la URL (#cardiologia) y carpeta en public/equipos. */
  slug: string;
  titulo: string;
  imagenes: EquipoImagen[];
};

/**
 * Catálogo por especialidad. Cada equipo es [nombreDeArchivoSinExtensión, nombreVisible].
 *
 * Para agregar equipo:
 *   1. Sube la foto a public/equipos/<slug>/ con nombre en minúsculas, sin tildes
 *      y separado por guiones (mismo criterio que los ya existentes).
 *   2. Agrega el par aquí. La ruta se arma sola con el slug.
 *   3. Corre `npm run optimizar-imagenes`, que la convierte a .webp (la
 *      extensión que espera este archivo) y la reduce al tamaño en que se ve.
 *
 * Una especialidad con lista vacía se muestra como "próximamente", sin romper nada.
 */
const CATALOGO: Array<{
  slug: string;
  titulo: string;
  equipos: Array<[string, string]>;
}> = [
  {
    slug: "anestesiologia",
    titulo: "Anestesiología",
    equipos: [
      ["maquina-de-anestesia-adulto-pediatrico", "Máquina de anestesia adulto / pediátrico"],
    ],
  },
  {
    slug: "cardiologia",
    titulo: "Cardiología",
    equipos: [
      ["mesa-de-operaciones-para-cateterismo", "Mesa de operaciones para cateterismo"],
    ],
  },
  {
    slug: "cirugia",
    titulo: "Cirugía",
    equipos: [
      ["torre-de-laparoscopia", "Torre de laparoscopia"],
      ["lampara-de-cirugia-led-prz-1-un-satelite", "Lámpara de cirugía LED PRZ 1 un satélite"],
    ],
  },
  {
    slug: "dermatologia",
    titulo: "Dermatología",
    equipos: [
      ["laser-de-picosegundos", "Láser de picosegundos"],
      ["laser-hibrido-no-ablativo", "Láser híbrido no ablativo"],
    ],
  },
  {
    slug: "gastroenterologia",
    titulo: "Gastroenterología",
    equipos: [
      [
        "torre-de-endoscopia-camara-y-procesador-de-imagen",
        "Torre de endoscopia, cámara y procesador de imagen",
      ],
    ],
  },
  {
    slug: "ginecologia",
    titulo: "Ginecología",
    equipos: [
      ["colposcopio-de-brazo-pantografico", "Colposcopio de brazo pantográfico"],
      ["mesa-quirurgica", "Mesa quirúrgica"],
    ],
  },
  {
    slug: "imagenologia",
    titulo: "Imagenología",
    equipos: [
      ["tomografo-de-64-cortes", "Tomógrafo de 64 cortes"],
      ["mastografo-digital", "Mastógrafo digital"],
      ["rayos-x-digital-movil", "Rayos X digital móvil"],
      [
        "sistema-de-arco-en-c-digital-movil-de-alta-frecuencia",
        "Sistema de arco en C digital móvil de alta frecuencia",
      ],
      ["ultrasonido-doppler-de-color", "Ultrasonido Doppler de color"],
    ],
  },
  {
    slug: "medicina-estetica",
    titulo: "Medicina Estética",
    equipos: [
      ["plataforma-de-radiofrecuencia-rf-3deep", "Plataforma de radiofrecuencia (RF) 3DEEP®"],
      ["mediostar-laser-diodo-810-940-nm", "Mediostar láser diodo 810/940 nm"],
    ],
  },
  {
    slug: "neonatologia",
    titulo: "Neonatología",
    equipos: [
      ["incubadora-neonatal-con-ruedas", "Incubadora neonatal con ruedas"],
      ["cuna-de-calor-radiante-nucare", "Cuna de calor radiante NUCARE"],
    ],
  },
  {
    slug: "obstetricia",
    titulo: "Obstetricia",
    equipos: [["monitor-fetal-tococardiografo", "Monitor fetal / tococardiógrafo"]],
  },
];

export const especialidades: Especialidad[] = CATALOGO.map(({ slug, titulo, equipos }) => ({
  slug,
  titulo,
  imagenes: equipos.map(([archivo, nombre]) => ({
    src: `/equipos/${slug}/${archivo}.webp`,
    nombre,
  })),
}));
