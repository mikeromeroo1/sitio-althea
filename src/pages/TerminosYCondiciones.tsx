import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Lock, FileText, Users, Eye, Database, Globe, Mail } from "lucide-react";

const TerminosYCondiciones = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50/50">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">AL</span>
              </div>
              <span className="font-heading text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                ALTHEA LEASE
              </span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-white/80 text-slate-700 font-semibold">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-soft mb-6">
            <FileText className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-slate-700">Información Legal</span>
          </div>
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-slate-900 mb-4 animate-slide-up">
            Términos y <span className="text-gradient-primary">Condiciones</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Conoce los términos que rigen nuestros servicios de arrendamiento médico y las políticas de privacidad que protegen tus datos.
          </p>
        </div>

        {/* Terms and Conditions Section */}
        <section className="mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 p-6">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">Términos y Condiciones</h2>
              </div>
            </div>
            
            <div className="p-8 lg:p-10 space-y-8">
              {/* Section 1 */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Introducción</h3>
                <p className="text-slate-600 leading-relaxed">
                  Bienvenido a Althea Leasing. Estos Términos y Condiciones regulan el uso de
                  nuestro sitio web y los servicios que ofrecemos. Al acceder o utilizar nuestros
                  servicios, usted acepta cumplir con estos términos.
                </p>
              </div>

              {/* Section 2 */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  2. Definiciones
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-800">Althea Leasing:</strong> La empresa dedicada al arrendamiento de equipos médicos.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-800">Usuario:</strong> Cualquier persona que acceda y utilice el sitio web de Althea Leasing.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-800">Servicios:</strong> Todos los servicios ofrecidos por Althea Leasing a través de su sitio web.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  3. Uso del sitio web
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  El usuario se compromete a utilizar el sitio web únicamente para fines legales y de
                  acuerdo con los términos establecidos. Queda prohibido el uso del sitio para
                  actividades ilícitas, fraudulentas o que afecten los derechos de terceros.
                </p>
              </div>

              {/* Section 4 */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Propiedad intelectual</h3>
                <p className="text-slate-600 leading-relaxed">
                  Todo el contenido, imágenes, logotipos y textos en el sitio web son propiedad de
                  Althea Leasing y están protegidos por derechos de autor. Se prohíbe la
                  reproducción, distribución o modificación de cualquier contenido sin autorización
                  previa.
                </p>
              </div>

              {/* Section 5 */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">5. Política de pagos y devoluciones</h3>
                <p className="text-slate-600 leading-relaxed">
                  Los pagos realizados a través del sitio web son finales y no reembolsables, salvo
                  indicación contraria en los acuerdos específicos de arrendamiento. En caso de
                  incumplimiento por parte del usuario, Althea Leasing se reserva el derecho de
                  suspender los servicios.
                </p>
              </div>

              {/* Section 6 */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">6. Obligaciones del Usuario</h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Proporcionar información veraz y actualizada durante el proceso de contratación.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Mantener la confidencialidad de sus datos de acceso.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">No realizar acciones que perjudiquen el funcionamiento del sitio web.</p>
                  </div>
                </div>
              </div>

              {/* Remaining sections */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">7. Exención de Responsabilidad</h3>
                <p className="text-slate-600 leading-relaxed">
                  Althea Leasing no se hace responsable por daños directos o indirectos derivados
                  del uso de su sitio web o servicios, incluyendo interrupciones, errores o virus
                  informáticos.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">8. Modificaciones a los términos</h3>
                <p className="text-slate-600 leading-relaxed">
                  Althea Leasing se reserva el derecho de modificar estos Términos y Condiciones en
                  cualquier momento. Los cambios serán efectivos una vez publicados en el sitio web.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">9. Ley aplicable y jurisdicción</h3>
                <p className="text-slate-600 leading-relaxed">
                  Estos términos se rigen por las leyes de México. Cualquier disputa será resuelta en
                  los tribunales competentes de Guadalajara, Jalisco.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Policy Section */}
        <section className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-white rounded-2xl shadow-soft border border-slate-100 overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-6">
              <div className="flex items-center gap-3">
                <Lock className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold text-white">Aviso de Privacidad</h2>
              </div>
            </div>
            
            <div className="p-8 lg:p-10 space-y-8">
              {/* Privacy Section 1 */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">1. Introducción</h3>
                <p className="text-slate-600 leading-relaxed">
                  En Althea Leasing, la protección de sus datos personales es una
                  prioridad. Este Aviso de Privacidad describe cómo recopilamos, utilizamos y
                  protegemos su información.
                </p>
              </div>

              {/* Privacy Section 2 */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Database className="w-5 h-5 text-green-600" />
                  2. Datos que recopilamos
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-800">Información personal:</strong> nombre, dirección, teléfono, correo electrónico.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-800">Información financiera:</strong> datos de pago y facturación.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">
                      <strong className="text-slate-800">Información técnica:</strong> dirección IP, tipo de navegador, tiempo de acceso y páginas visitadas.
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Section 3 */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  3. Finalidad del tratamiento de datos
                </h3>
                <p className="text-slate-600 mb-3">Sus datos se utilizan para:</p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Procesar solicitudes de arrendamiento.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Brindar seguimiento a nuestros servicios.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Cumplir con obligaciones legales.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-slate-600">Enviar información sobre promociones y actualizaciones.</p>
                  </div>
                </div>
              </div>

              {/* Continue with remaining privacy sections */}
              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">4. Protección de datos</h3>
                <p className="text-slate-600 leading-relaxed">
                  Althea Leasing implementa medidas de seguridad físicas y digitales para proteger
                  su información contra accesos no autorizados. Utilizamos encriptación de datos y
                  servidores seguros para resguardar su privacidad.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">5. Derechos del titular</h3>
                <p className="text-slate-600 leading-relaxed">
                  Usted tiene derecho a acceder, rectificar, cancelar u oponerse al tratamiento de
                  sus datos personales (ARCO). Puede ejercer estos derechos contactándonos a través
                  de nuestro correo electrónico.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">6. Transferencia de datos</h3>
                <p className="text-slate-600 leading-relaxed">
                  Althea Leasing no compartirá sus datos personales con terceros sin su
                  consentimiento, salvo en los casos previstos por la ley.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">7. Uso de Cookies</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nuestro sitio web utiliza cookies para mejorar la experiencia del usuario. Al
                  navegar en nuestro sitio, acepta el uso de cookies.
                </p>
              </div>

              <div className="border-b border-slate-100 pb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-blue-600" />
                  8. Contacto
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Para ejercer sus derechos o recibir información adicional, puede contactarnos a
                  través de nuestro correo electrónico de soporte.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">9. Cambios en el Aviso de Privacidad</h3>
                <p className="text-slate-600 leading-relaxed">
                  Nos reservamos el derecho de actualizar este Aviso de Privacidad. Cualquier cambio
                  será notificado a través de nuestro sitio web.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Link to="/cotizacion">
            <Button className="btn-primary group text-base px-8 py-4">
              ¿Tienes dudas? Contáctanos
              <Mail className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="fixed top-16 left-8 w-40 h-40 lg:w-56 lg:h-56 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-16 right-8 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-green-400/10 to-transparent rounded-full blur-3xl -z-10"></div>
    </div>
  );
};

export default TerminosYCondiciones; 