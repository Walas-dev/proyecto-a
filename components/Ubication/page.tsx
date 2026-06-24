"use client";
import { cont } from '@/ts/ubication'
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./map"), {
  ssr: false,
  loading: () => <div className="h-100 w-full flex items-center justify-center">Cargando mapa...</div>,
});

export default function page() {
  const latMargarita = 10.9938;
  const lngMargarita = -63.8158;

  return (
    <section id='cob' className='px-4 md:px-8 py-8 md:py-12 bg-tertiary/25 scroll-mt-12'>
        <p className=' border-l-4 border-primary px-3 py-2 text-primary uppercase text-sm md:text-base font-bold mb-6 lg:mb-3 w-fit'>
            cobertura geográfica
        </p>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 px-2 pb-4 md:pb-0'>
            <div className='border rounded-2xl flex items-center justify-center min-h-75 md:min-h-100 bg-black/10 overflow-hidden w-full z-0'>
                <Map lat={latMargarita} lng={lngMargarita} zoom={13.5} />
            </div>

            <div className='flex flex-col gap-6 md:gap-8'>
              <div>
                  <h2 className='text-3xl md:text-4xl lg:text-[2.5rem] leading-tight font-extrabold py-2'>
                      Soporte Táctico Regional
                  </h2>
                  <p className='text-secondary/65 text-pretty text-base md:text-lg mt-2'>
                      Nuestra base de operaciones principal asegura tiempos de respuesta críticos.
                      Despliegue de unidades técnicas en minutos para mitigar fallas catastróficas en la red de seguridad.
                  </p>
              </div>
              <div className="flex sm:flex-row gap-6 pt-6 border-t-2 border-white/15">  
                  {cont.map((c)=>(
                    <div key={c.id} className='w-full sm:w-1/2'>
                        <h4 className="text-primary text-3xl md:text-[2rem] font-black">
                          {c.title}
                        </h4>
                        <p className='text-secondary/65 text-sm md:text-base text-pretty'>
                          {c.p}
                        </p>
                    </div>
                  ))}          
              </div>
            </div>
        </div>
    </section>
  )
}