import Button from '../UI/Button'
import {button} from '@/ts/contact'
export default function page() {
  return (
      <section className='w-full px-4 md:px-8 py-24 md:py-32 flex flex-col justify-center items-center text-center bg-tertiary/10'>
        <div className='flex flex-col items-center max-w-3xl mx-auto'>
            <h2 className='text-[1.85rem] md:text-5xl lg:text-[3rem] font-extrabold leading-tight text-balance mb-6'>
              ¿Está su infraestructura
                <br className='hidden sm:block'/> realmente protegida?
            </h2>
            
            <p className='text-primary/75 text-base md:text-lg text-pretty max-w-2xl mb-8'>
                Inicie el protocolo de auditoría. Un especialista evaluará su infraestructura actual y propondrá vectores de mejora inmediatos.
            </p>

            <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-4'>
                {button.map((b)=>(
                  <Button key={b.id} variant={b.id === 1 ? 'primary' : 'secondary'}>
                      <div>
                        <svg 
                          viewBox="0 0 448 512"
                          className={`w-6 h-6 md:w-7 md:h-7 transition-all ${b.c}`}
                        >
                          <path  fill="currentColor" d={b.p}/>
                        </svg>
                      </div>
                      {b.t}
                  </Button>
                ))}
            </div>
        </div>
      </section>
  )
}
