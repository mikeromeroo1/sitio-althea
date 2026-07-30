import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";

/**
 * Providers y rutas, sin el Router: así lo comparten el cliente (BrowserRouter en
 * App.tsx) y el prerender del build (StaticRouter en entry-server.tsx).
 *
 * Index se importa de forma normal porque es la portada y la única ruta que se
 * prerenderiza. El resto va en lazy para que la home no descargue el catálogo,
 * el formulario de cotización ni los términos antes de que hagan falta.
 */
const Cotizacion = lazy(() => import("./pages/Cotizacion"));
const Equipos = lazy(() => import("./pages/Equipos"));
const TerminosYCondiciones = lazy(() => import("./pages/TerminosYCondiciones"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

/** Se ve solo mientras baja el chunk de una ruta secundaria. */
const Cargando = () => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <div
      className="h-10 w-10 rounded-full border-2 border-slate-200 border-t-blue-600 animate-spin"
      role="status"
      aria-label="Cargando"
    />
  </div>
);

const AppContent = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Suspense fallback={<Cargando />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
          <Route path="/equipos" element={<Equipos />} />
          <Route path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </TooltipProvider>
  </QueryClientProvider>
);

export default AppContent;
