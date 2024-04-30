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
    <nav ref={containerRef} className={clsx("w-[80%] flex items-center justify-between p-3 my-4 z-50 rounded-full")}>
      <h1 className="text-4xl">gch</h1>
      <div className="flex space-x-8 ml-24 font-light">
        <Link href="/" className='text-[#918D8B] transition-colors duration-150 ease-in-out hover:text-[#F0EBE8]'>Servicios</Link>
        <Link href="/about" className='text-[#918D8B] transition-colors duration-150 ease-in-out hover:text-[#F0EBE8]'>Proyectos</Link>
        <Link href="/about" className='text-[#918D8B] transition-colors duration-150 ease-in-out hover:text-[#F0EBE8]'>Planes</Link>
        <Link href="/contact" className='text-[#918D8B] transition-colors duration-150 ease-in-out hover:text-[#F0EBE8]'>Acerca de</Link>
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