import Link from 'next/link';
import React from 'react'
import {handleSmoothScroll} from '@/ts/scroll'

interface elements {
    variant: 'primary' | 'secondary' | 'general';
    children: React.ReactNode;
    ref?:string;
};

export default function Button({variant, children, ref, ...props}:elements) {
  const color = {
    primary:'bg-primary/80 text-tertiary hover:bg-primary ',
    secondary:'border-4 border-primary/50 bg-trasnparent text-primary/50 hover:bg-white hover:text-tertiary hover:border-white transition-all',
    general:'bg-tertiary'
  };
  return (
    <Link 
        href={`${ref}` || '#'}
        onClick={(e)=>handleSmoothScroll(e, ref || '#')}
        target='_self'
        rel="noopener noreferrer"
        className={`
            group flex justify-center items-center py-2 px-4 gap-3 rounded-2xl
            text-lg font-medium transition-all duration-200 scale-90 hover:scale-95 
             ${color[variant]}
        `}    
        {...props}
    >
        {children}
    </Link>
  )
}
