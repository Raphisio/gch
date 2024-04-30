'use client'
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Cards() {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, x: 100, y: 100 },
      { opacity: 1, x: 0, y: 0, duration: 1, onComplete: () => {
        gsap.fromTo(cardRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0, y: 60, x: -100, delay: 3 }
        )
      } }
    )
  })

  return (
    <div className="absolute -right-40 mt-14">
        <div ref={cardRef} className="absolute -right-16 top-10 z-[3] bg-zinc-900 size-[700px] rounded-2xl overflow-hidden border-[8px] border-zinc-900">
          <img src="/images/hibernum.png" alt="Hibernum" className="object-fit opacity-70" />
        </div>
    </div>
  )
}