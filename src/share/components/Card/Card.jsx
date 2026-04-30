import React from 'react'

export default function Card({ children, className = "", id = "", ...rest }) {
  return (
    <article
      id={id}
      className={`card w-fits p-10 rounded-xl border-2 border-white/[10%] ${className}`}
      {...rest}
    >
      {children}
    </article>
  );
}
