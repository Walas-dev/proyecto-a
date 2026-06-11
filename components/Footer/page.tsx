import React from 'react'
import Image from 'next/image'
import {Img, Lista} from "@/ts/footer";
export default function page() {
  return (
    <div>
      <section className='bg-tertiary/13 grid justify-center py-5'>
        <p className='uppercase py-3 font-bold text-secondary'> 
            Protegiendo la infraestructura del los usuarios en la región
        </p>
        <div className='flex  justify-evenly py-3'>
            {Img.map((i)=>(
                <div key={i.id} className="relative w-12 h-10">
                    <Image
                    className="hover:scale-100 hover:opacity-100 scale-90 opacity-50 object-cover transition-all duration-300"
                    src={i.src}
                    alt="Vercel logomark"
                    fill
                    />
                </div>
            ))}
        </div>
      </section>
      <section className='bg-linear-to-b from-tertiary/13 to-tertiary/20 flex justify-between items-center py-6 px-8'>
        <div>
            <h2 
            className='text-primary font-bold uppercase text-[1.5rem] py-2'
            >
                    Proyect Walas
            </h2>
            <p className='text-secondary font-light'>
                @2026 Proyect Walas. Elite Excutive Protection.
            </p>
        </div>
         <div
            className='grid grid-flow-col gap-3'
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
      </section>
    </div>
  )
}

{/**
    <svg
                    className='hover:rotate-90 object-cover transition-all text-primary '
                    viewBox='0 0 24 24'
                    fill="currentColor"
                    path='/file.svg'
                />

    leading-0 funciona para el interlineado de las letras puede ser aumentado o disminuido y asi cambias la separacion entre lineas 
    line-clamp-2 el maximo de lineas en un parrafo
        
    */}