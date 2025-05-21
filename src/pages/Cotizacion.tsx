import React, { useEffect } from 'react';
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

const Cotizacion = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Solicitud de cotización enviada con éxito", {
      description: "Nos pondremos en contacto contigo pronto"
    });
    setTimeout(() => {
      navigate('/');
    }, 2000);
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
                    <Input id="nombre" placeholder="Nombre completo" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico *</Label>
                    <Input id="email" type="email" placeholder="correo@ejemplo.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono *</Label>
                    <Input id="telefono" placeholder="(XX) XXXX-XXXX" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tipo">Tipo de Persona *</Label>
                    <Select>
                      <SelectTrigger>
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
                    <Input id="marca" placeholder="Ej. Phillips, Siemens..." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="precio">Precio Aproximado *</Label>
                    <Input id="precio" type="number" placeholder="MXN" min="1000" required />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="equipo">Descripción del Equipo *</Label>
                    <Textarea 
                      id="equipo" 
                      placeholder="Describe el equipo que necesitas arrendar (modelo, características, etc.)" 
                      required 
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="comentarios">Comentarios adicionales</Label>
                    <Textarea 
                      id="comentarios" 
                      placeholder="¿Algún detalle adicional que debamos saber?"
                      className="min-h-[100px]" 
                    />
                  </div>
                </div>
                
                <div className="flex items-center justify-center pt-4">
                  <Button type="submit" className="btn-primary w-full md:w-auto">
                    Enviar Solicitud de Cotización
                  </Button>
                </div>
              </form>
            </CardContent>
            <CardFooter className="border-t flex justify-between bg-gray-50 text-sm text-gray-500">
              <p>Todos tus datos están seguros</p>
              <p>Respuesta en 24-48 horas hábiles</p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Cotizacion;
