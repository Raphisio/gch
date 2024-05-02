'use client'
import clsx from 'clsx';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Facebook, Github, Instagram, WhatsApp } from './social';

export default function Footer() {
  const containerRef = useRef(null);
  gsap.registerEffect(ScrollTrigger);
  
  // Animación pendiente
  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut'
      }
    )
  })

  return (
    <nav ref={containerRef} className={clsx("w-[80%] flex flex-col lg:flex-row items-center justify-between p-3 my-4 z-50 rounded-full gap-8 lg:gap-0")}>
      <h1 className="text-4xl">gch</h1>
      <div className="flex space-x-8 lg:ml-24 font-light items-center">
        <Link href="/" className='text-[#918D8B] transition-colors duration-150 ease-in-out hover:text-[#F0EBE8]'>Contacto</Link>
        <Link href="/about" className='text-[#918D8B] transition-colors duration-150 ease-in-out hover:text-[#F0EBE8] text-center'>Políticas de privacidad</Link>
        <Link href="/about" className='text-[#918D8B] transition-colors duration-150 ease-in-out hover:text-[#F0EBE8] text-center'>Términos y condiciones</Link>
      </div>

      <div className='flex gap-1'>
        <Facebook />
        <Instagram />
        <WhatsApp />
        <Github />
      </div>
    </nav>
  )
}