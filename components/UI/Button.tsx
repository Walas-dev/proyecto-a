import React from 'react'

interface elements {
    variant: 'primary' | 'secondary' | 'general';
    children: React.ReactNode;
};

export default function Button({variant, children, ...props}:elements) {
  const color = {
    primary:'bg-primary/80 text-tertiary hover:bg-primary ',
    secondary:'border-4 border-primary/50 bg-trasnparent text-primary/50 hover:bg-white hover:text-tertiary hover:border-white transition-all',
    general:'bg-tertiary'
  };
  return (
    <a 
        href=""
        className={`
            group flex justify-center items-center py-2 px-4 gap-3 rounded-2xl
            text-lg font-medium transition-all duration-200 scale-90 hover:scale-95 
             ${color[variant]}
        `}    
        {...props}
    >
        {children}
    </a>
  )
}
