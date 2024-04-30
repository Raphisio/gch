'use client'

import {gsap} from 'gsap';
import Card from '@/app/ui/card';
import {useEffect, useRef} from 'react';
import {chooseUs} from '@/app/cardcontent';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function ChooseUs() {
  const titleRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(titleRef.current, 
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: {
        trigger: titleRef.current,
        start: "-40% 60%",
        toggleActions: "play none none none"
      }},
      
    
    )
  }, []);

  return (
    <section className="w-full py-16 bg-other-dark z-10 flex flex-col items-center">
    <div className="w-[80%] mb-8">
      <h3 ref={titleRef} className=" opacity-0 text-4xl">Cuando la gente <br/> <span className="text-carrot">elige</span> trabajar con nosotros</h3>
    </div>

    <div>
      <div className="flex justify-center gap-8">
        {chooseUs.map((item, index) => (
          <Card key={index} icon={item.icon} title={item.title} description={item.description} index={index} />
        ))}
      </div>
    </div>
  </section>
  )
}