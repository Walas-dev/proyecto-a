"use client";
import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";

export default function Page() {
  useEffect(() => {
    // Inicializamos la API de Cal.com para forzar nuestros estilos
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        theme: "dark", // Forzamos el modo oscuro
        styles: { 
          branding: { 
            // Pon aquí el color primario exacto de tu web (ej. tu tono naranja/dorado)
            brandColor: "#C48B55" 
          } 
        },
        hideEventTypeDetails: false, // true si quieres que se vea más minimalista
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <section id="contacto" className="w-full flex flex-col items-center py-16 md:py-24 px-4 scroll-mt-24">
      <div className="text-center mb-10">
        <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4">
          Hablemos de tu <span className="text-primary">proyecto</span>
        </h3>
        <p className="text-secondary/80 text-lg max-w-2xl mx-auto">
          Selecciona un espacio en mi agenda para una consultoría técnica o para evaluar cómo puedo escalar tu infraestructura.
        </p>
      </div>

      <div className="w-full max-w-5xl bg-[#0F0F17]/80 backdrop-blur-2xl border border-white/5 rounded-3xl shadow-2xl p-2 md:p-4 overflow-hidden">
        <Cal
          // 👇 REEMPLAZA ESTO CON TU USUARIO/EVENTO DE CAL.COM 👇
          calLink="samuel-marcano/hablemos-de-tu-proyecto" 
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
        />
      </div>
    </section>
  );
}