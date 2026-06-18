'use client';
import { useState } from 'react';
import {Lista} from "@/ts/header";
import Button from '../UI/Button';
import { button } from '@/ts/hero';

interface LinkData {
  id: string | number;
  space: string;
  url?: string;
}

interface NavigationProps {
  Lista: LinkData[];
  className?: string;       // Aquí inyectaremos 'hidden lg:flex' o el diseño móvil
  isMobile?: boolean;       // Para cambiar el diseño interno (filas vs columnas)
  onLinkClick?: () => void; // Para que el móvil sepa cuándo cerrar el menú
}

const Nav = ({ Lista, className = '', isMobile = false, onLinkClick }: NavigationProps) => {
  return (
    <nav className={className}>
      <ul className={`flex ${isMobile ? ' flex-col w-auto gap-4' : 'items-center gap-2 xl:gap-8'}`}>
        {Lista.map((l) => (
          <li key={l.id} className={isMobile ? "border-b border-white/5 pb-2" : ""}>
            <a
              href={l.url || '#'}
              onClick={onLinkClick}
              className={`text-secondary/90 transition-colors duration-300 px-4 py-2 rounded-lg text-base font-medium hover:bg-primary/10 hover:text-primary whitespace-nowrap ${
                isMobile 
                  ? 'block text-lg font-medium' 
                  : 'px-4 py-2 rounded-lg text-base hover:bg-primary/10 hover:text-primary whitespace-nowrap'
              }`}
            >
              {l.space}
            </a>
          </li>
        ))}
      </ul>
      
      <div className={`flex flex-col md:w-auto gap-4`}>
        <Button variant='primary'>
          <span>Solicitar Asesoría</span>
          <div className="relative flex items-center justify-center w-5 h-5 md:w-6 md:h-6 shrink-0 group-hover:rotate-360deg transition-transform duration-500">
            <svg 
              className='w-full h-full transition-colors text-tertiary/90 group-hover:text-tertiary'
              viewBox="0 0 640 640"
            >
              <path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"/>
            </svg>
          </div>
        </Button>
      </div>
      
    </nav>
  );
};

export default function page() {
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
                    className='lg:hidden p-2 text-primary focus:outline-none z-50'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    aria-expanded={isMenuOpen}
                    >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                <div 
                    className={`lg:hidden absolute top-full left-0 w-full bg-black/50 backdrop-blur-3xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'max-h-screen opacity-100 py-6 px-3 text-center' : 'max-h-0 opacity-0 py-0'
                    }`}
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

{
    /**
     * <header className='sticky top-0 z-50 w-full flex justify-between items-center bg-tertiary/15 py-4 px-4 md:px-8 backdrop-blur-2xl border-b border-white/5'>
     * 
     */
}