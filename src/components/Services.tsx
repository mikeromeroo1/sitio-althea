import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const equipos = [
  { img: "/equipo-1.png", especialidad: "Ultrasonido" },
  { img: "/equipo-2.png", especialidad: "Imagenología" },
  { img: "/equipo-3.png", especialidad: "Consulta general" },
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="relative py-24 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
            <span className="text-gradient-primary">Servicios</span>
          </h2>
        </div>

        {/* Rectángulos envolventes */}
        <div className="space-y-8">
          {/* Rectángulo 1 - Equipos médicos */}
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl border border-slate-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Texto + CTA */}
              <div>
                <h3 className="text-2xl md:text-3xl font-normal text-slate-700 mb-6 leading-snug">
                  Arrendamiento de equipos médicos profesionales para cualquier especialidad.
                </h3>
                <Link to="/cotizacion">
                  <Button className="btn-primary group text-sm px-6 py-3 h-auto">
                    Cotiza Ahora
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Carrusel de equipos */}
              <div>
                <Carousel opts={{ loop: true }} className="w-full">
                  <CarouselContent>
                    {equipos.map((equipo, index) => (
                      <CarouselItem key={index}>
                        <div className="relative rounded-2xl overflow-hidden shadow-medium">
                          <img
                            src={equipo.img}
                            alt={`Equipo médico - ${equipo.especialidad}`}
                            className="w-full h-64 md:h-80 object-cover"
                          />
                          {/* Etiqueta de especialidad - parte superior central */}
                          <div className="absolute top-0 left-0 right-0 flex justify-center pt-4">
                            <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full border border-blue-200 shadow-soft text-sm font-semibold text-slate-700">
                              {equipo.especialidad}
                            </span>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-3" />
                  <CarouselNext className="right-3" />
                </Carousel>
              </div>
            </div>
          </div>

          {/* Rectángulo 2 - Unidades móviles y flotillas */}
          <div className="bg-gradient-to-r from-blue-50 via-white to-green-50 rounded-3xl border border-slate-200 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Texto + CTA */}
              <div>
                <h3 className="text-2xl md:text-3xl font-normal text-slate-700 mb-6 leading-snug">
                  Arrendamiento de unidades médicas móviles y flotillas.
                </h3>
                <Link to="/cotizacion">
                  <Button className="btn-primary group text-sm px-6 py-3 h-auto">
                    Cotiza Ahora
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Foto de ambulancia */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src="/ambulancia.png"
                    alt="Unidad médica móvil - ambulancia"
                    className="w-full h-64 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
