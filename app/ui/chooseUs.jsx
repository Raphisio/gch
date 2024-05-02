'use client'

import { gsap } from 'gsap';
import { clsx } from 'clsx';
import Card from '@/app/ui/card';
import { chooseUs, dontChooseUs } from '@/app/cardcontent';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ChooseUs() {
  const titleRef = useRef(null);
  const text2Ref = useRef(null);
  const containerRef = useRef(null);
  const [isChoosing, setIsChoosing] = useState(true);
  const switchRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  // Animación al aparecer
  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1, x: 0, duration: 1, scrollTrigger: {
          trigger: titleRef.current,
          start: "-40% 60%",
          toggleActions: "play none none none"
        }
      },
    )
  }, []);


  const handleSwitch = () => {
    setIsChoosing(!isChoosing);
    gsap.fromTo(switchRef.current,
      { x: isChoosing ? 50 : 0 },
      { x: isChoosing ? 0 : 50, duration: 0.5 })

    gsap.fromTo(text2Ref.current,
      { x: isChoosing ? -50 : 0 },
      { x: isChoosing ? 0 : -50, duration: 0.5 })
  }

  return (
    <section className="w-full py-16 bg-other-dark z-10 flex flex-col items-center">
      <div ref={containerRef} className="w-[80%] mb-8">
        <div ref={titleRef} className='opacity-0 text-4xl'>
          <h3 className=''>Cuando la gente</h3>
          <div className='flex flex-row items-center gap-1 overflow-x-hidden'>
            <span className='bg-gradient-to-r from-very-dark w-3 h-6 z-10'></span>
            <span ref={text2Ref} className={clsx("-ml-1 flex flex-col md:flex-row gap-2 transition-colors duration-150 ease-in-out", {
              "text-carrot": isChoosing,
              "text-red-500": !isChoosing,
            })}>
              no elige
              <button
                className={clsx("relative bg-carrot w-[94px] h-11 rounded-full p-1 shadow-lg transition-colors duration-150 ease-in-out",
                  { 'bg-[#464343]': !isChoosing, 'bg-carrot': isChoosing })}
                onClick={handleSwitch}
              >
                <span ref={switchRef} className={clsx("absolute left-[2px] top-[2px] size-10 rounded-full bg-dark")}></span>
              </button>
              <h3 className='text-light-yellow'>trabajar con nosotros</h3>
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-center flex-wrap gap-8">
          {isChoosing ? chooseUs.map((card, index) => (
            <Card key={`${isChoosing}-${index}`} icon={card.icon} title={card.title} description={card.description} index={index} />
          )) : dontChooseUs.map((card, index) => (
            <Card key={`${isChoosing}-${index}`} icon={card.icon} title={card.title} description={card.description} index={index} />
          ))}
          
        </div>
      </div>
    </section>
  )
}