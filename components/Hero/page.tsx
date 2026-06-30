'use client'
import React from 'react'
import Button from '../UI/Button'
import { button } from '@/ts/hero'
import Image from 'next/image'

export default function page() {
  return (
    <section className='relative w-full min-h-svh flex flex-col justify-center items-center text-center px-4 md:px-8 '>
      <div className='absolute inset-0 z-1 opacity-65'>
        <Image
          src={'/fondo2.png'}
          alt='fondo'
          fill
          className='object-cover object-center'
          priority
          sizes="100vw"
          quality={75}
        />
      </div>
      
      <div className='absolute inset-0 backdrop-blur-md bg-neground/50 z-10' />

      <div className='relative  z-30 flex flex-col items-center'>   
        <h2 className='text-[2.3rem] md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance mb-6'>
            Seguridad Integral para 
            <br className='hidden md:block'/> Entornos Exigentes.
        </h2>

        <p className='text-primary/75 text-base md:text-lg lg:text-xl max-w-2xl text-pretty mb-8'>
            Arquitectura de control de acceso diseñada para proteger con precisión técnica.
        </p>

        <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-4'>
            {button.map((b)=>(
              <Button 
                key={b.id} 
                variant={b.id=== 1 ? 'primary' : 'secondary'} 
                ref={`${b.ref}`}
              >
                { b.id === 1 ? (
                    <svg 
                      viewBox="0 0 448 512"
                      className={`w-6 h-6 md:w-7 md:h-7 transition-all text-tertiary/90 group-hover:text-tertiary`}
                    >
                      <path  fill="currentColor" d={b.p}/>
                    </svg>
                  ) : ''
                }
                {b.t}
              </Button>
            ))}
        </div>
      </div>
    </section>
  )
}
