'use client'
import Button from "./ui/button";
import Cards from "./ui/cards";
import { Arrow } from "./ui/icon";
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import ChooseUs from "./ui/chooseUs";
import Faq from "./ui/faq";
import Services from "./ui/services";

export default function Home() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRef = useRef(null);
  const span1Ref = useRef(null);
  const span2Ref = useRef(null);
  const span3Ref = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: .3});
    
    gsap.fromTo(titleRef.current,
      { y: '10px', opacity: 0 },
      { y: '0%', opacity: 1, duration: 2, ease: 'power3.inOut' }
    )

    gsap.fromTo(subtitleRef.current,
      { y: '10px', opacity: 0 },
      { y: '0%', opacity: 1, duration: 2, ease: 'power3.inOut', delay: 1}
    )

    gsap.fromTo(buttonRef.current,
      { y: '10px', opacity: 0 },
      { y: '0%', opacity: 1, duration: 2, ease: 'power3.inOut', delay: 1.3}
    )

    tl.fromTo(span1Ref.current,
      { x: '20%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1 },
      "+=1"
    )
    .to(span1Ref.current,
      { x: '30%', opacity: 0, duration: 1 },
      "+=1"
    )
    .fromTo(span2Ref.current,
      { x: '20%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1 },
      "+=1"
    )
    .to(span2Ref.current,
      { x: '30%', opacity: 0, duration: 1 },
      "+=1"
    )
    .fromTo(span3Ref.current,
      { x: '20%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1 },
      "+=1"
    )
    .to(span3Ref.current,
      { x: '30%', opacity: 0, duration: 1 },
      "+=1"
    );
  }, [])

  return (
    <>
      <header className="w-[80%] flex relative mt-20">
        <div className="w-3/5 mt-20 mb-20">
          <h1 ref={titleRef} className="font-semibold text-6xl">En global code harbor
            <div className="relative mb-20">
              <span ref={span1Ref} className="text-carrot absolute opacity-0">   creamos</span>
              <span ref={span2Ref} className="text-carrot absolute opacity-0"> diseñamos</span>
              <span ref={span3Ref} className="text-carrot absolute opacity-0"> innovamos</span>
            </div>
          </h1>
          <div ref={subtitleRef}>
            <h2 className="text-xl font-light mt-3">
              Desde páginas de aterrizaje hasta sistemas hechos a la medida, así como mantenimiento e instalaciones físicas.
            </h2>
            <h2 className="text-xl font-light">
            Tenemos las soluciones tecnológicas para tu negocio.
          </h2>
          </div>

          <div ref={buttonRef}>
            <Button style="primary" className="px-8 py-5 mt-14 flex items-center justify-center gap-2 text-xl" type="withIcon">
              Realiza tu proyecto
              <div className="w-[1px] h-[16px] bg-very-dark"></div>
              <Arrow color="var(--very-dark)" className="size-8"/>
            </Button>
          </div>
        </div>
        <Cards />
      </header>

      <ChooseUs />

      <Services />

      <Faq />

    </>
  );
}
