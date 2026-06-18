import {cards} from '@/ts/services'
export default function page() {
  return (
    <section className='px-4 md:px-8 py-8 md:py-12'>
        <h3 className='text-2xl md:text-3xl font-bold pb-6 md:pb-8'>
            Nuestros Servicios
        </h3>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {
         cards.map((c)=>(
            <div key={c.id} className='group flex flex-col gap-5 bg-tertiary/50 rounded-2xl p-6 border-2 border-tertiary hover:border-primary hover:bg-primary/5 transition-colors duration-300 h-full'>
                <div 
                    className="relative w-9 h-6 md:w-10 md:h-7 shrink-0 group-hover:scale-110 transition-all"
                >
                    <svg 
                        className='absolute inset-0 transition-all text-secondary/50 group-hover:text-primary' 
                        viewBox="0 0 640 640"
                    >
                        <path  fill="currentColor" d={c.path}/>
                    </svg>
                </div>
            
                <div className='flex flex-col gap-3 grow'>
                    <h4 className='font-bold text-xl md:text-[1.4rem] leading-tight group-hover:text-primary/95'>
                        {c.title}
                    </h4>
                    <p className='text-secondary/75 text-sm md:text-base leading-relaxed group-hover:text-secondary transition-colors duration-30'>
                        {c.p}
                    </p>
                </div>
            </div>
         ))
        }
        </div>
    </section>
  )
}
