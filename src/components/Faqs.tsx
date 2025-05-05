
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs: React.FC = () => {
  const faqItems = [
    {
      question: "¿En qué ciudades ofrecemos arrendamiento?",
      answer: "En toda la República Mexicana."
    },
    {
      question: "¿Cuáles son los montos mínimos y máximos del pago inicial?",
      answer: "Adaptamos el pago inicial a tus necesidades según tu tipo de arrendamiento."
    },
    {
      question: "¿Qué porcentaje de deducibilidad tiene el arrendamiento de equipo médico?",
      answer: "Hasta el 100%, según el esquema fiscal elegido."
    },
    {
      question: "¿El arrendamiento incluye seguro?",
      answer: "Sí, siempre incluimos seguro en nuestros contratos."
    },
    {
      question: "¿Pueden mejorar mi cotización si tengo una oferta mejor?",
      answer: "Claro, garantizamos mejorar cualquier oferta que tengas."
    },
    {
      question: "¿Qué sucede con el equipo al finalizar el contrato de arrendamiento?",
      answer: "Opciones: renovar el arrendamiento, comprarlo a valor residual o actualizarlo por uno nuevo."
    },
    {
      question: "¿Cuánto tiempo tarda el proceso desde la solicitud hasta la entrega del equipo?",
      answer: "En promedio, entre 5 y 7 días hábiles una vez aprobada la solicitud."
    },
    {
      question: "¿Qué tipo de equipos médicos puedo arrendar?",
      answer: "Desde diagnóstico por imagen, instrumental quirúrgico, equipo odontológico hasta laboratorios clínicos."
    }
  ];

  return (
    <section id="faqs" className="bg-white py-16">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-althea-800">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
