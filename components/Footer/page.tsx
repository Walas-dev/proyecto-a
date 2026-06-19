import {Img, Redes} from "@/ts/footer";
import SVG from '../Footer/iluminarSVG'
export default function page() {
  return (
    <footer className="w-full bg-tertiary/15 flex flex-col">
      <section className='px-4 md:px-8 py-8 md:py-12 flex flex-col gap-8 md:gap-10'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
            <h2 
            className='text-primary font-bold uppercase text-2xl md:text-[1.5rem] tracking-wider text-center'
            >
                    Proyect alas
            </h2>
            <div className='flex gap-5 items-center'>
                {Redes.map((r)=>(
                    <a 
                        key={r.id}
                        href=''
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`Visitar nuestro perfil en ${r.name || 'redes sociales'}`}
                        className="group relative w-7 h-7 hover:scale-110 transition-transform duration-300"
                    >
                        <svg 
                           className="text-primary/50 group-hover:text-primary transition-colors duration-300 w-full h-full"
                            viewBox="0 0 448 512"
                        >
                            <path  fill="currentColor" d={r.p}/>
                        </svg>
                    </a>
                ))}
            </div>
        </div>

        <div className="flex flex-col items-center gap-6">
            <p className='uppercase font-bold text-secondary/90 text-center text-sm md:text-base tracking-widest max-w-2xl text-balance'> 
                Protegiendo la infraestructura del los usuarios en la región
            </p>
            <div className='flex flex-wrap justify-center gap-6 md:gap-10'>
                {Img.map((i)=>(
                    <div key={i.id} className="group relative w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform duration-300">
                        <SVG
                        index={i.id}
                          pathDirection={i.p}
                        />
                    </div>
                ))}
            </div>
        </div>
      </section>

      <section className='bg-linear-to-b from-transparent to-tertiary/20 px-4 md:px-8 py-6 flex flex-col items-center gap-6 border-t border-white/5'>
        <p className="text-secondary/60 font-light text-center text-xs md:text-sm text-balance">
          &copy; {new Date().getFullYear()} Proyect Alas. Elite Excutive Protection.
        </p>
      </section>
    </footer>
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