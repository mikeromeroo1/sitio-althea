
import React from 'react';
import { Button } from "@/components/ui/button";

const categories = [
  {
    id: 1,
    name: "Diagnóstico por Imagen",
    description: "Equipos de radiología, ecografía, tomografía y resonancia magnética",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&auto=format&fit=crop&q=80",
    items: ["Resonancia Magnética", "Tomografía Computarizada", "Rayos X", "Ecógrafos"]
  },
  {
    id: 2,
    name: "Monitorización de Pacientes",
    description: "Sistemas avanzados para el seguimiento de signos vitales",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80",
    items: ["Monitores Multiparamétricos", "Monitores Fetales", "Oxímetros", "Capnógrafos"]
  },
  {
    id: 3,
    name: "Equipamiento Quirúrgico",
    description: "Tecnología de vanguardia para procedimientos quirúrgicos",
    image: "https://images.unsplash.com/photo-1631248055158-edec7a3c072b?w=600&auto=format&fit=crop&q=80",
    items: ["Mesas Quirúrgicas", "Lámparas Quirúrgicas", "Electrobisturíes", "Torres de Laparoscopía"]
  },
  {
    id: 4,
    name: "Cuidados Intensivos",
    description: "Equipos especializados para unidades de cuidados intensivos",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=80",
    items: ["Ventiladores Mecánicos", "Bombas de Infusión", "Desfibriladores", "Incubadoras"]
  }
];

const EquipmentCategories: React.FC = () => {
  return (
    <section id="equipos" className="bg-gray-50 py-20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Equipos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de equipamiento médico de última generación para todo tipo de especialidades
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {categories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow-md overflow-hidden card-hover">
              <div className="flex flex-col h-full">
                <div className="relative h-60">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-althea-900/80 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{category.name}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {category.items.map((item, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-althea-500 text-althea-600 hover:bg-althea-50">
                    Ver Equipos
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="btn-primary">Ver Catálogo Completo</Button>
        </div>
      </div>
    </section>
  );
};

export default EquipmentCategories;
