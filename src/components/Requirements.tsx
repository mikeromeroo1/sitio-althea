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
    <section id="requisitos" className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-althea-800 mb-4">Requisitos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-primary border-b pb-2">Persona Física Arrendatario</h3>
            <div className="space-y-1">
              <RequirementItem text="INE o Pasaporte" />
              <RequirementItem text="Comprobante de domicilio (no mayor a 3 meses)" />
              <RequirementItem text="Últimos 3 estados de cuenta bancarios" />
              <RequirementItem text="Constancia de situación fiscal" />
              <RequirementItem text="Reporte de buró de crédito (Consulta por Althea)" />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-primary border-b pb-2">Obligado Solidario</h3>
            <div className="space-y-1">
              <RequirementItem text="INE o Pasaporte" />
              <RequirementItem text="Comprobante de domicilio (no mayor a 3 meses)" />
              <RequirementItem text="Reporte de buró de crédito (Consulta por Althea)" />
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-primary border-b pb-2">Persona Moral (Empresa)</h3>
            <div className="space-y-1">
              <RequirementItem text="Acta constitutiva" />
              <RequirementItem text="Poder notarial del representante legal" />
              <RequirementItem text="INE del representante legal" />
              <RequirementItem text="Comprobante de domicilio de la empresa" />
              <RequirementItem text="Últimos 3 estados de cuenta bancarios de la empresa" />
              <RequirementItem text="Opinión de cumplimiento fiscal positiva" />
              <RequirementItem text="Reporte de buró de crédito de la empresa y representante legal (Consulta por Althea)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
