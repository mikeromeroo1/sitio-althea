import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const oficinas = [
  "/equipo-1.png",
  "/equipo-2.png",
  "/equipo-3.png",
];

const grupo = [
  {
    logo: "/logo-verde.png",
    logoClass: "h-32",
    icon: "/ventilator_transparent.png",
    iconClass: "",
    description: "Arrendamiento de equipos y vehículos médicos.",
    url: "https://www.althealease.com/",
    alt: "Althea Lease",
  },
  {
    logo: "/6k-logo.png",
    logoClass: "h-8",
    icon: "/car_transparent.png",
    iconClass: "scale-125",
    description: "Arrendamiento de vehículos, flotillas y maquinaria.",
    url: "https://6kleasing.com/",
    alt: "6K Leasing",
  },
  {
    logo: "/kinesis-logo.png",
    logoClass: "h-10",
    icon: "/hands_transparent.png",
    iconClass: "",
    description: "Créditos simples y créditos T+N multidivisa.",
    url: "https://www.kinesiscatalitica.com/",
    alt: "Kinesis FX",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section id="nosotros" className="bg-white py-16 md:py-20 border-t border-slate-200">
      <div className="section-container">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sobre <span className="text-gradient-primary">Nosotros</span>
          </h2>
        </div>

        <div className="bg-slate-100 rounded-2xl p-8 lg:p-12 shadow-md animate-slide-in">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/5 mb-8 md:mb-0 md:pr-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-gray-700 text-lg">
                Althea Lease es una empresa mexicana ubicada en Zapopan, Jalisco, especializada en
                el arrendamiento de equipos médicos. Fundada en 2025, surgimos con el objetivo de
                ayudar a médicos y clínicas a acceder a tecnología de punta sin descapitalizarse ni
                detener su práctica.
              </p>
              <p className="text-gray-700 text-lg mt-4">
                Con arrendamientos 100 % deducibles, plazos de hasta 48 meses y gestión operativa
                completa, tú te concentras en tus pacientes, mientras nosotros cuidamos tu
                estabilidad financiera.
              </p>
            </div>
            <div className="w-full md:w-2/5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {oficinas.map((img, index) => (
                    <CarouselItem key={index}>
                      <img
                        src={img}
                        alt={`Oficinas de Althea Lease ${index + 1}`}
                        className="rounded-lg shadow-lg w-full h-64 md:h-72 object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-3" />
                <CarouselNext className="right-3" />
              </Carousel>
            </div>
          </div>
        </div>

        {/* Conoce nuestro grupo empresarial */}
        <div className="mt-20">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">
              Conoce nuestro grupo empresarial
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Nuestra operación está respaldada por la experiencia de nuestras empresas hermanas
              6K Leasing y Kinesis FX, que cuentan con más de 10 años otorgando créditos,
              arrendamientos y gestionando operaciones financieras multidivisa en México.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {grupo.map((empresa, index) => (
              <a
                key={index}
                href={empresa.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center bg-slate-50 rounded-2xl border border-slate-200 p-8 hover:shadow-medium hover:border-blue-300 transition-all duration-300"
              >
                <div className="h-32 flex items-center justify-center mb-8">
                  <img
                    src={empresa.logo}
                    alt={empresa.alt}
                    className={`${empresa.logoClass} object-contain`}
                  />
                </div>
                <div className={`h-32 w-32 flex items-center justify-center mb-6 ${empresa.iconClass}`}>
                  <img
                    src={empresa.icon}
                    alt=""
                    aria-hidden="true"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-primary font-semibold text-base">
                  {empresa.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
