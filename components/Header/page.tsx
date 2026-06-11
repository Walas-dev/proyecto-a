import React from 'react'
import {Lista} from "@/ts/header";
import Button from '../UI/Button';
import Image from 'next/image';
export default function page() {
  return (
      <div 
        className='flex justify-between bg-tertiary/15 items-center py-6 pl-8 pr-4 backdrop-blur-2xl'
      >
        <h2 
            className='text-primary font-bold uppercase text-[1.5rem]'
        >
                Proyect Walas
        </h2>

        <div
            className='grid grid-flow-col gap-8'
        >
            {Lista.map((l)=>(
                <a 
                    key={l.id}
                    href=""
                    className='text-secondary px-4 py-2 border-b-2 border-transparent text-[1.15rem]
                        hover:bg-primary/10 rounded-lg
                        hover:text-primary hover:border-primary transition-all duration-300
                    '
                >
                    {l.space}
                </a>
            ))}
        </div>

        <Button
            variant='primary'
        >
            Solicitar Asesoría
             <div className="relative w-5 h-4">
                <Image
                className="group-hover:rotate-90 dark:invert object-cover transition-all"
                src="/vercel.svg"
                alt="Vercel logomark"
                fill
                />
             </div>
        </Button>

      </div>
  )
}
