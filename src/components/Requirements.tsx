import React from 'react';
import { Check } from 'lucide-react';

const RequirementItem = ({ text }: { text: string }) => (
  <div className="flex items-start mb-2">
    <Check className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
    <span>{text}</span>
  </div>
);

const Requirements: React.FC = () => {
  return (
    <section id="requisitos" className="bg-white py-16 md:py-20 border-t border-slate-200">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-althea-800 mb-4">Requisitos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-primary border-b pb-2">Persona Física Arrendatario</h3>
            <div className="space-y-1">
              <RequirementItem text="INE" />
              <RequirementItem text="Cédula profesional del médico" />
              <RequirementItem text="Comprobante de domicilio (no mayor a 3 meses)" />
              <RequirementItem text="Estado de cuenta bancario de los últimos 3 meses" />
              <RequirementItem text="Constancia de situación fiscal (RFC) (no mayor a 1 mes)" />
              <RequirementItem text="Redes sociales" />
              <RequirementItem text="Correo y teléfono" />
              <RequirementItem text="Ubicación" />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-primary border-b pb-2">Obligado Solidario</h3>
            <div className="space-y-1">
              <RequirementItem text="INE" />
              <RequirementItem text="Comprobante de domicilio (no mayor a 3 meses)" />
              <RequirementItem text="Estado de cuenta bancario de los últimos 3 meses" />
              <RequirementItem text="Constancia de situación fiscal (RFC) (no mayor a 1 mes)" />
              <RequirementItem text="Correo y teléfono" />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-primary border-b pb-2">Persona Moral (Empresa)</h3>
            <div className="space-y-1">
              <RequirementItem text="Acta constitutiva" />
              <RequirementItem text="Constancia de situación fiscal (no mayor a 1 mes)" />
              <RequirementItem text="Comprobante de domicilio (no mayor a 3 meses)" />
              <RequirementItem text="Poder del Representante Legal" />
              <RequirementItem text="INE del Representante Legal" />
              <RequirementItem text="Constancia de situación fiscal del RL (no mayor a 1 mes)" />
              <RequirementItem text="Comprobante de domicilio del RL (no mayor a 3 meses)" />
              <RequirementItem text="Correo y teléfono del Representante Legal" />
              <RequirementItem text="Cédula profesional del médico" />
              <RequirementItem text="Redes sociales de la empresa" />
              <RequirementItem text="Ubicación" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
