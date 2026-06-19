"use client";
import React, { useEffect, useState } from 'react';

interface PremiumSVGProps {
  pathDirection: string;
  index?: number;
}

export default function IluminarSVG({ pathDirection, index = 0 }: PremiumSVGProps) {
  const coloresSolidos = ["#4b5563", "#FFFFFF", "#C48B55"];
  const TIEMPO_CICLO = 3000; 
  const DURACION_FADE = 500; 
  const DELAY_CASCADA = 200; 
  const [ronda, setRonda] = useState(0);
  const colorActual = coloresSolidos[ronda % coloresSolidos.length];

  useEffect(() => {
    const intervalo = setInterval(() => {
      setRonda((prevRonda) => prevRonda + 1);
    }, TIEMPO_CICLO);

    return () => clearInterval(intervalo);
  }, []);

  const retrasoCSS = index * DELAY_CASCADA;

  return (
    <div className="flex justify-center items-center">
      <svg viewBox="0 0 640 640" className="w-12 h-12 shrink-0">
        <path
          d={pathDirection}
          style={{
            fill: colorActual,
            transition: `fill ${DURACION_FADE}ms ease-in-out ${retrasoCSS}ms`,
          }}
        />
      </svg>
    </div>
  );
}