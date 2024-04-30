import clsx from 'clsx';
import Card from "./card";
import { gsap } from 'gsap';
import { services } from '../cardcontent';
import { useState, useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Tab ({ children, active, setActive }) {
  return (
    <button
      className={clsx("p-4 rounded-full transition-colors duration-500", {
      "text-light-yellow": active === children,
      "text-[#626160] bg-transparent": active !== children
      })}
      onClick={() => setActive(children)}>
        {children}
    </button>
  )
}

function filterServices (category) {
  return services.filter(service => service.category === category);
}

export default function Services() {
  const [active, setActive] = useState("Software");
  const tabsRef = useRef(null);
  const containerTabsRef = useRef(null);
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    gsap.fromTo(titleRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut', 
        scrollTrigger: {
          trigger: titleRef.current,
          start: "-40% 60%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(subtitleRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut', 
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: "-40% 60%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(containerTabsRef.current, 
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut', 
        scrollTrigger: {
          trigger: containerTabsRef.current,
          start: "-40% 60%",
          toggleActions: "play none none none"
        }
      }
    )
  }, []);

  useEffect(() => {

    const activeTab = Array.from(tabsRef.current.children).find(tab => tab.textContent === active);
    if (activeTab) {
      gsap.to(backgroundRef.current, { x: activeTab.offsetLeft, width: activeTab.offsetWidth, duration: 0.5, ease: 'power2.inOut' });
    }
  }, [active]);

  return (
    <section className="w-full my-16 flex flex-col items-center">
      <div className="w-[80%]">
        <h3 ref={titleRef} className="text-4xl">Te ayudamos
          <span className="text-carrot"> creando</span>
          <br /> mejores soluciones
        </h3>
        <p ref={subtitleRef} className="text-lg font-light">Tenemos personas especializadas para cada servicio que ofrecemos</p>
      </div>

      <div ref={containerTabsRef} className="relative bg-[#222222] rounded-full py-1 px-1 gap-2 my-8 overflow-hidden">
        <div ref={backgroundRef} className="absolute left-1 top-1 h-[90%] bg-dark rounded-full"></div>
        <div ref={tabsRef} className="relative z-10 flex">
          <Tab active={active} setActive={setActive}>Software</Tab>
          <Tab active={active} setActive={setActive}>Instalaciones</Tab>
          <Tab active={active} setActive={setActive}>Servicio técnico</Tab>
          <Tab active={active} setActive={setActive}>Marketing</Tab>
        </div>
      </div>

      <div className="flex w-[80%] flex-row gap-2 flex-wrap">
        {
          filterServices(active).map((service, index) => (
            <Card key={`${active}-${index}`} icon={service.icon} title={service.title} description={service.description} type="service" index={index} />
          ))
        }
      </div>
    </section>
  )
}