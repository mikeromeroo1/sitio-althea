import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, ImageOff } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { especialidades, type Especialidad } from "@/lib/equipos";

/** Una tarjeta del catálogo: título + carrusel de las fotos de esa especialidad. */
const TarjetaEspecialidad: React.FC<{ especialidad: Especialidad }> = ({ especialidad }) => {
  const { slug, titulo, imagenes } = especialidad;
  const [api, setApi] = useState<CarouselApi>();
  const [actual, setActual] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setActual(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api]);

  return (
    // scroll-mt compensa el navbar fijo cuando se llega por ancla (#slug).
    <section id={slug} className="scroll-mt-28">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-soft overflow-hidden h-full flex flex-col">
        <div className="flex items-baseline justify-between gap-4 px-6 pt-6 pb-4">
          <h2 className="font-heading text-xl md:text-2xl font-semibold text-slate-900">
            {titulo}
          </h2>
          {imagenes.length > 1 && (
            <span className="text-sm text-slate-500 tabular-nums shrink-0">
              {actual + 1} / {imagenes.length}
            </span>
          )}
        </div>

        <div className="px-6 pb-6 flex-grow">
          {imagenes.length === 0 ? (
            // Estado vacío: evita un carrusel sin slides y deja claro que falta contenido.
            <div className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 flex flex-col items-center justify-center gap-2 text-slate-400">
              <ImageOff className="w-8 h-8" />
              <span className="text-sm font-medium">Imágenes próximamente</span>
            </div>
          ) : (
            <Carousel
              opts={{ loop: imagenes.length > 1 }}
              setApi={setApi}
              className="w-full"
            >
              <CarouselContent className="ml-0">
                {imagenes.map((img) => (
                  <CarouselItem key={img.src} className="pl-0">
                    {/* Las fotos del catálogo son 1:1, así que la caja también:
                        sin recorte. object-contain deja que una foto que no sea
                        cuadrada entre completa (con margen) en vez de recortarse.
                        Grupo con nombre para que el hover de la foto no se cruce
                        con el `group` que el botón usa para animar su flecha. */}
                    <div className="group/foto relative aspect-square rounded-2xl overflow-hidden bg-slate-50">
                      <img
                        src={img.src}
                        alt={`${img.nombre} — ${titulo}`}
                        loading="lazy"
                        className="w-full h-full object-contain transition-transform duration-500 group-hover/foto:scale-105"
                      />

                      {/* Capa de hover con el CTA.
                          - focus-within: quien navega con teclado también la ve.
                          - hover:none: en táctil no existe hover, así que ahí
                            queda visible siempre o el botón sería inalcanzable. */}
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 opacity-0 pointer-events-none transition-opacity duration-300 group-hover/foto:opacity-100 group-hover/foto:pointer-events-auto focus-within:opacity-100 focus-within:pointer-events-auto [@media(hover:none)]:opacity-100 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:bg-transparent">
                        <Link to="/cotizacion">
                          <Button className="btn-primary group text-sm px-6 py-3 h-auto">
                            Cotiza Ahora
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>

                      {/* El nombre va superpuesto, no debajo: así el alto de la
                          tarjeta no salta al cambiar de slide. */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center px-4 pb-4">
                        <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-200 shadow-soft text-sm font-semibold text-slate-700 text-center">
                          {img.nombre}
                        </span>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              {/* Con una sola imagen no hay a dónde navegar. */}
              {imagenes.length > 1 && (
                <>
                  <CarouselPrevious className="left-3" />
                  <CarouselNext className="right-3" />
                </>
              )}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

const Equipos: React.FC = () => {
  useEffect(() => {
    // Si se entra con ancla (/equipos#cardiologia) hay que respetarla.
    if (!window.location.hash) window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow bg-slate-50">
        <div className="section-container">
          {/* Encabezado */}
          <div className="text-center mb-10 animate-fade-in">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Catálogo de <span className="text-gradient-primary">Equipos</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Arrendamos equipo médico profesional para cualquier especialidad. Explora por
              área y cotiza el equipo que necesitas.
            </p>
          </div>

          {/* Índice de especialidades */}
          <nav aria-label="Especialidades" className="mb-12">
            <ul className="flex flex-wrap justify-center gap-2">
              {especialidades.map((esp) => (
                <li key={esp.slug}>
                  <a
                    href={`#${esp.slug}`}
                    className="inline-block bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-medium text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
                  >
                    {esp.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Carruseles por especialidad */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {especialidades.map((esp) => (
              <TarjetaEspecialidad key={esp.slug} especialidad={esp} />
            ))}
          </div>

          {/* CTA final */}
          <div className="mt-16 flex justify-center">
            <Link to="/cotizacion">
              <Button className="btn-primary group text-sm px-6 py-3 h-auto">
                Cotiza Ahora
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Equipos;
