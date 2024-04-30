import clsx from 'clsx';
import { gsap } from 'gsap';
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function Card ({ icon, title, description, type = "default", index = 0 }) {
  const cardRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(cardRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, scrollTrigger: {
        trigger: cardRef.current,
        start: "-40% 45%",
        toggleActions: "play none none none"
      }, delay: index * 0.5}
    )
  }, [])

  return (
    <div ref={cardRef} className={clsx("min-w-[277px] max-w-[277px] rounded-2xl p-6", {
      "first:bg-dark": type === "default",
      "bg-dark": type === "service"
    })}>
      <Image
        src={icon}
        width={0}
        height={0}
        alt={title}
        className="w-8 h-8 mb-5"
      />
      <div className="text-light-yellow">
        <h4 className="text-xl font-medium">{title}</h4>
        <p className="text-base font-light">{description}</p>
      </div>
    </div>
  )
}