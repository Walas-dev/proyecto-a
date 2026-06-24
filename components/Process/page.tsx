"use client";
import React, { useState, useRef, useEffect } from 'react';
import { process } from '@/ts/process';

const ProcessCard = ({ step }: { step: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(hover: none)").matches;
    setIsTouchDevice(isTouch);

    if (isTouch && ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsInView(entry.isIntersecting);
        },
        { threshold: 0.5 } 
      );

      observer.observe(ref.current);
      return () => observer.disconnect();
    }
  }, []);

  const isLit = isTouchDevice ? isInView : isHovered;

  return (
    <div 
      id='metodo'
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        scroll-mt-80

        relative z-10 flex flex-col items-start md:items-center text-left md:text-center gap-5 md:gap-6 p-6 md:p-8 rounded-4xl transition-all duration-500 border-2 h-full
        ${isLit 
          ? '-translate-y-2 bg-[#0F0F17]/95 backdrop-blur-xl border-primary/50 shadow-2xl shadow-primary/20' 
          : 'translate-y-0  backdrop-blur-md border-white/5 shadow-none'}
      `}
    >
      <div className={`flex items-center justify-center font-black text-6xl md:text-7xl lg:text-8xl transition-colors duration-500 -ml-2 md:ml-0 ${isLit ? 'text-primary/50' : 'text-primary/10'}`}>
        0{step.id}
      </div>
      
      <div className='flex flex-col gap-2 md:gap-3 mt-1 md:mt-0'>
          <h4 className={`font-bold text-xl lg:text-[1.4rem] leading-tight transition-colors duration-500 ${isLit ? 'text-primary' : 'text-white/90'}`}>
            {step.t}
          </h4>
          <p className='text-secondary/70 text-sm md:text-base leading-relaxed text-pretty'>
            {step.p}
          </p>
      </div>
    </div>
  );
};

export default function Page() {
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
          <ProcessCard key={step.id} step={step} />
        ))}
      </div>
    </section>
  );
}