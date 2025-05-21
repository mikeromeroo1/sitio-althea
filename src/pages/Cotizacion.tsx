import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle } from 'lucide-react';

const Cotizacion = () => {
  const navigate = useNavigate();
  const [tipoPersona, setTipoPersona] = useState<string | undefined>(undefined);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<null | 'success' | 'error'>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus(null);
    const formData = new FormData(e.currentTarget);
    if (tipoPersona) {
      formData.append('tipoPersona', tipoPersona);
    }

    const scriptURL = import.meta.env.VITE_SCRIPT_URL || 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_PLACEHOLDER';

    if (scriptURL === 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_PLACEHOLDER') {
      toast.error("Error de configuración", {
        description: "La URL del script de envío no está configurada."
      });
      setIsSubmitting(false);
      setSubmissionStatus('error');
      return;
    }

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formData,
      });
      
      const result = await response.json(); 

      if (response.ok && result.result === 'success') {
        setSubmissionStatus('success');
        toast.success("Solicitud de cotización enviada con éxito", {
          description: "Nos pondremos en contacto contigo pronto"
        });
      } else {
        setSubmissionStatus('error');
        toast.error("Error al enviar la solicitud", {
          description: result.error || "Hubo un problema con el servidor. Inténtalo más tarde."
        });
      }
    } catch (error) {
      setSubmissionStatus('error');
      console.error("Error al enviar el formulario:", error);
      toast.error("Error de red", {
        description: "No se pudo conectar al servidor. Verifica tu conexión e inténtalo de nuevo."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        <div className="section-container max-w-5xl mx-auto">
          <div className="mb-10 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-althea-700">Solicita tu Cotización</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Completa el siguiente formulario y recibe una propuesta personalizada para tu equipo médico
            </p>
          </div>
          
          {submissionStatus === 'success' ? (
            <div className="text-center py-10 animate-fade-in bg-white shadow-lg rounded-lg">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-3 text-primary">¡Solicitud Enviada!</h2>
              <p className="text-gray-700 mb-6 px-4">Gracias por tu interés. Nos pondremos en contacto contigo pronto para discutir tu cotización.</p>
              <Button onClick={() => { navigate('/'); setSubmissionStatus(null); }} className="btn-primary">
                Volver al Inicio
              </Button>
            </div>
          ) : (
            <Card className="animate-slide-in shadow-lg">
              <CardHeader className="bg-althea-50 border-b">
                <CardTitle className="text-althea-700">Información de cotización</CardTitle>
                <CardDescription>Todos los campos marcados con * son obligatorios</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input id="nombre" name="nombre" placeholder="Nombre completo" required disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input id="email" name="email" type="email" placeholder="correo@ejemplo.com" required disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input id="telefono" name="telefono" placeholder="(XX) XXXX-XXXX" required disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="tipo">Tipo de Persona *</Label>
                      <Select name="tipoPersona" onValueChange={setTipoPersona} value={tipoPersona || ''} required disabled={isSubmitting}>
                        <SelectTrigger id="tipo">
                          <SelectValue placeholder="Selecciona tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fisica">Persona Física</SelectItem>
                          <SelectItem value="moral">Persona Moral</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="marca">Marca del Equipo *</Label>
                      <Input id="marca" name="marca" placeholder="Ej. Phillips, Siemens..." required disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="precio">Precio Aproximado *</Label>
                      <Input id="precio" name="precio" type="number" placeholder="MXN" min="1000" required disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="equipo">Descripción del Equipo *</Label>
                      <Textarea 
                        id="equipo" 
                        name="equipo"
                        placeholder="Describe el equipo que necesitas arrendar (modelo, características, etc.)" 
                        required 
                        className="min-h-[100px]"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="comentarios">Comentarios adicionales</Label>
                      <Textarea 
                        id="comentarios" 
                        name="comentarios"
                        placeholder="¿Algún detalle adicional que debamos saber?"
                        className="min-h-[100px]" 
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center pt-4">
                    <Button type="submit" className="btn-primary w-full md:w-auto" disabled={isSubmitting}>
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud de Cotización'}
                    </Button>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t flex justify-between bg-gray-50 text-sm text-gray-500">
                <p>Todos tus datos están seguros</p>
                <p>Respuesta en 24-48 horas hábiles</p>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cotizacion;
