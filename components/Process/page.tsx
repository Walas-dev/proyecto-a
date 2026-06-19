import React from 'react'
import {process} from '@/ts/process'
export default function page() {
return (
    <section className='flex flex-col items-center px-4 md:px-8 py-16 md:py-24 w-full bg-transparent'>
      <h3 className='text-3xl md:text-4xl lg:text-5xl font-extrabold pb-6 text-center text-balance'>
        Proceso Metodológico
      </h3>
      
      <p className='text-primary/75 text-base md:text-lg text-pretty text-center max-w-2xl lg:max-w-3xl mb-12 md:mb-16'>
        Implementación ágil y estratégica diseñada para potenciar el rendimiento y consolidar el poder de su infraestructura, brindándole confianza absoluta desde el primer instante.
      </p>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl'>
        {process.map((step) => (
          <div 
            key={step.id} 
            className='group flex flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-6 p-6 md:p-8 rounded-4xl bg-tertiary/5 border-2 border-white/5 transition-all duration-500 hover:-translate-y-2 hover:bg-tertiary/10 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10'
          >
            <div className='flex items-center justify-center font-black text-6xl md:text-7xl lg:text-8xl text-primary/10 group-hover:text-primary/50 transition-colors duration-500 -ml-2 md:ml-0'>
              0{step.id}
            </div>
            
            <div className='flex flex-col gap-2 md:gap-3 mt-1 md:mt-0'>
                <h4 className='font-bold text-xl lg:text-[1.4rem] leading-tight text-white/90 group-hover:text-primary transition-colors duration-500'>
                  {step.t}
                </h4>
                <p className='text-secondary/70 text-sm md:text-base leading-relaxed text-pretty'>
                  {step.p}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
