"use client";
import { useState, useRef, useEffect } from "react";
import { cards } from '@/ts/services';

const ServiceCard = ({ c }: { c: any }) => {
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
        { 
            rootMargin: "-40% 0px -40% 0px", 
            threshold: 0
        } 
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, []);

  // La magia se mantiene intacta
  const isLit = isTouchDevice ? isInView : isHovered;

  return (
    <div 
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`
            flex flex-col gap-5 rounded-2xl p-6 border-2 transition-all duration-500 ease-out h-full cursor-pointer
            ${isLit 
                ? 'border-primary bg-primary/5 shadow-2xl shadow-primary/10 -translate-y-1' 
                : 'bg-tertiary/50 border-tertiary shadow-none translate-y-0'
            }
        `}
    >
        <div className={`relative w-9 h-6 md:w-10 md:h-7 shrink-0 transition-transform duration-500 ${isLit ? 'scale-110' : 'scale-100'}`}>
            <svg 
                className={`absolute inset-0 transition-colors duration-500 ${isLit ? 'text-primary' : 'text-secondary/50'}`} 
                viewBox="0 0 640 640"
            >
                <path fill="currentColor" d={c.path}/>
            </svg>
        </div>
        <div className='flex flex-col gap-3 grow'>
            <h4 className={`font-bold text-xl md:text-[1.4rem] leading-tight transition-colors duration-500 ${isLit ? 'text-primary/95' : 'text-white'}`}>
                {c.title}
            </h4>
            <p className={`text-sm md:text-base leading-relaxed transition-colors duration-500 ${isLit ? 'text-secondary' : 'text-secondary/75'}`}>
                {c.p}
            </p>
        </div>
    </div>
  );
};

export default function Page() {
  return (
    <section className='px-4 md:px-8 py-8 md:py-12'>
        <h3 className='text-2xl md:text-3xl font-bold pb-6 md:pb-8'>
            Nuestros Servicios
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {cards.map((c) => (
                <ServiceCard key={c.id} c={c} />
            ))}
        </div>
    </section>
  )
}