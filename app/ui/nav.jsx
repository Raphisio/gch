'use client'

import Button from "./button";
import Link from 'next/link';
import gsap from 'gsap';
import { useEffect, useRef, useState } from "react";
import Power3 from 'gsap/dist/gsap';
import clsx from 'clsx'

export default function Nav() {
  const navRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [navWidth, setNavWidth] = useState('80%');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: '-100%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 1, ease: Power3.easeOut }
    );

  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
      setNavWidth('70%');
    } else {
      setIsScrolled(false);
      setNavWidth('80%');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.to(navRef.current,
      { width: navWidth, duration: 0.5, ease: 'power2.inOut' }
    )
  }, [navWidth])

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav ref={navRef} className={clsx("w-[80%] fixed hidden lg:flex items-center justify-between p-3 my-4 z-50 rounded-full", {
        "bg-[#131212] bg-opacity-80 backdrop-blur-md": isScrolled,
      })}
        style={{ navWidth }}>
        <a href="/" className="text-4xl">gch</a>
        <div className="flex space-x-8 ml-24 font-light">
          <Link href="/">Servicios</Link>
          <Link href="/about">Proyectos</Link>
          <Link href="/about">Planes</Link>
          <Link href="/contact">Acerca de</Link>
        </div>

        <Button style="primary">Contáctanos</Button>
      </nav>

      <nav className={clsx("w-[80%] fixed flex lg:hidden items-center justify-between p-3 my-4 z-50 rounded-full", {
        "bg-[#131212] bg-opacity-80 backdrop-blur-md": isScrolled,
      })}
        style={{ navWidth }}>
        <h1 className="text-4xl">gch</h1>

        <Button style="primary">Contáctanos</Button>
        <button onClick={handleMenu}>-</button>
      </nav>
      <div className={clsx("flex flex-row absolute rounded-xl px-10 py-10 top-20 -left-6 space-x-8 ml-24 font-light z-[99]", {
          "hidden": !isOpen,
          "bg-black": isOpen
        })}>
          <Link href="/">Servicios</Link>
          <Link href="/about">Proyectos</Link>
          <Link href="/about">Planes</Link>
          <Link href="/contact">Acerca de</Link>
        </div>
    </>
  )
}