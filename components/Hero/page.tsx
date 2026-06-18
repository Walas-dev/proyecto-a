import React from 'react'
import Button from '../UI/Button'
import { button } from '@/ts/hero'

export default function page() {
  return (
    <section className='w-full min-h-dvh flex flex-col justify-center items-center text-center px-4 md:px-8 py-20'>
      <div className='flex flex-col items-center max-w-4xl mx-auto'>       
        <h2 className='text-[2.3rem] md:text-5xl lg:text-6xl font-extrabold leading-tight text-balance mb-6'>
            Seguridad Integral para 
            <br className='hidden md:block'/> Entornos Exigentes.
        </h2>

        <p className='text-primary/75 text-base md:text-lg lg:text-xl max-w-2xl text-pretty mb-8'>
            Arquitectura de control de acceso diseñada para porteger con precisíon técnica.
        </p>

        <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-4'>
            {button.map((b)=>(
              <Button key={b.id} variant={b.id=== 1 ? 'primary' : 'secondary'}>
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
