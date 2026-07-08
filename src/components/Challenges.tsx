import React from 'react';
import { Landmark, Calculator, TrendingDown } from 'lucide-react';

const Challenges: React.FC = () => {
  const challenges = [
    {
      icon: Landmark,
      title: "Financiamiento muy limitado.",
      description: "Largos procesos, requisitos de garantía y tasas poco competitivas. Esto retrasa la capacidad de los médicos para adquirir equipos con tecnología moderna y competitiva.",
      color: "amber",
      delay: "0.1s"
    },
    {
      icon: Calculator,
      title: "Complejidad fiscal.",
      description: "Cuestiones como optimización financiera y planeación administrativa no son las principales áreas de especialidad en médicos. Esto provoca decisiones menos eficientes, pagos innecesarios y oportunidades perdidas para mejorar su rentabilidad.",
      color: "rose",
      delay: "0.2s"
    },
    {
      icon: TrendingDown,
      title: "Obsolescencia tecnológica.",
      description: "Cada año surgen equipos con mejores capacidades, mayor precisión y eficiencia energética. Sin embargo, la mayoría de los médicos no pueden actualizar su equipo con la frecuencia que el mercado exige debido a la falta de liquidez.",
      color: "orange",
      delay: "0.3s"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      amber: {
        icon: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200",
        hover: "hover:border-amber-300"
      },
      rose: {
        icon: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200",
        hover: "hover:border-rose-300"
      },
      orange: {
        icon: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200",
        hover: "hover:border-orange-300"
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.amber;
  };

  return (
    <section id="soluciones" className="relative py-24 bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

      <div className="section-container relative">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Los retos actuales en la{" "}
            <span className="text-gradient-primary">práctica médica</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Sabemos que la gran mayoría de médicos y clínicas en México ven retrasado su crecimiento debido a los grandes obstáculos que enfrentan al intentar obtener un crédito bancario para adquirir o actualizar su equipo médico.
          </p>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => {
            const colors = getColorClasses(challenge.color);
            const Icon = challenge.icon;

            return (
              <div
                key={index}
                className={`card-modern p-8 text-center group transition-all duration-500 ${colors.border} ${colors.hover} animate-slide-up`}
                style={{ animationDelay: challenge.delay }}
              >
                {/* Icon Container */}
                <div className={`relative w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <Icon className={`w-8 h-8 ${colors.icon} transition-all duration-300`} />
                  <div className={`absolute inset-0 ${colors.bg} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-slate-800 transition-colors">
                  {challenge.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-sm">
                  {challenge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
