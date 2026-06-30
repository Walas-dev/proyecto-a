'use client';
import { useState } from 'react';
import { Lista, NavigationProps } from "@/ts/header";
import Link from 'next/link';
import {handleSmoothScroll} from '@/ts/scroll'

const Nav = ({ Lista, className = '', isMobile = false, onLinkClick}: NavigationProps) => {
  return (
    <nav className={className}>
      <ul className={`flex ${isMobile ? ' flex-col w-auto ' : 'items-center gap-2 xl:gap-5'}`}>
        {Lista.map((l) => (
          <li key={l.id}>
            <Link
              href={l.ref || '#'}
              onClick={(e)=>handleSmoothScroll(e, l.ref || '#', onLinkClick)}
              className={`group items-center text-secondary/90 transition-colors duration-300 px-4 py-2 rounded-lg text-base font-medium hover:text-primary whitespace-nowrap flex gap-1.5 ${
                isMobile 
                  ? 'block text-lg font-medium hover:bg-primary/10 py-5' 
                  : 'px-4 py-2 rounded-lg text-base hover:text-primary whitespace-nowrap'
              }`}
            >
                <svg 
                    viewBox="0 0 640 640"
                    className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 text-white/50 group-hover:text-primary`}
                >
                    <path  fill="currentColor" d={l.p}/>
                </svg>
                {l.space}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default function Page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return (
        <header className='sticky top-0 z-50 w-full bg-tertiary/15 backdrop-blur-2xl border-b border-white/5'>
            
            <div className='flex justify-between items-center py-4 px-4 md:px-8'>
                <div className='text-primary font-black uppercase text-xl md:text-[1.5rem] tracking-wider shrink-0 z-50'>
                        Proyect a
                </div>

                <Nav
                    Lista={Lista} 
                    className='hidden lg:flex gap-8 items-center justify-around'
                />

                <button
                    className='lg:hidden relative w-8 h-8 flex flex-col items-center justify-center text-primary focus:outline-none z-50 cursor-pointer'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMenuOpen}
                    >
                    <span className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                    }`} />
                    
                    <span className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'opacity-0 -translate-x-4' : 'opacity-100 translate-x-0'
                    }`} />
                    
                    {/* Línea Inferior */}
                    <span className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                        isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                    }`} />
                </button>

                <div 
                    className={`
                    lg:hidden absolute top-[110%] overflow-hidden transition-all duration-300 ease-in-out left-1/2 -translate-x-1/2 w-[98%] sm:w-[95%] rounded-2xl bg-neground backdrop-blur-3xl shadow-2xl shadow-black/50
                        ${
                            isMenuOpen 
                            ? 'max-h-125 opacity-100  border border-white/15' 
                            : 'max-h-0 opacity-0 py-0 border border-transparent'
                        }
                    `}
                >
                    <Nav
                        Lista={Lista} 
                        className='flex flex-col gap-6' 
                        isMobile={true} 
                        onLinkClick={() => setIsMenuOpen(false)}
                    />
                </div>
            </div>
        </header>
    )
}