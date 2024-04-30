'use client'
import clsx from 'clsx';
import { gsap } from 'gsap';
import Button from './button';
import { Times } from './icon';
import { questions } from '@/app/questions';
import { useEffect, useRef, useState } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Question({ question, answer, isOpen, handleOpen }) {
  const questionRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(questionRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1, x: 0, duration: 1, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: questionRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    )

  }, [])

  return (
    <div ref={questionRef} className={clsx("w-full flex flex-col rounded-2xl p-5 gap-5", {
      'bg-dark': isOpen,
      'bg-very-dark': !isOpen
    })}>
      <button className="w-full flex justify-between items-center" onClick={handleOpen}>
        <h4 className="text-xl font-light">{question}</h4>
        <Times className={clsx("rotate-45 size-6 transition duration-300 ease-in-out", {
          'rotate-180': isOpen
        })} color="white" />
      </button>
      <p className={clsx("w-full flex justify-between text-[#979797] items-center transition-all duration-500 ease-in-out", {
        'max-h-0 overflow-x-hidden opacity-0': !isOpen,
        'flex max-h-[50px] opacity-100': isOpen
      })}>{answer}</p>
    </div>
  )
}

function MoreHelp() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
    
    { opacity: 0, y: 100 }, 
    { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut', 
    scrollTrigger: 
    { trigger: containerRef.current, 
      start: "0 80%", 
      toggleActions: "play none none none" } })
      
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut',
        scrollTrigger: {
          trigger: titleRef.current,
          start: "0% 90%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(subtitleRef.current,
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1, ease: 'power3.inOut',
      scrollTrigger: {
        trigger: subtitleRef.current,
        start: "0% 95%",
        toggleActions: "play none none none"
      }
    })
  }, [])

  return (
    <div ref={containerRef} className='w-full flex flex-col text-center p-5 bg-[#191818] rounded-2xl my-10'>
      <h3 ref={titleRef} className="text-2xl">¿Necesitas más ayuda?</h3>
      <p ref={subtitleRef} className='font-light'>
        Para cualquier consulta, estaremos encantados de responder a tus preguntas relacionadas con nuestros servicios y/o productos. Contáctanos en cualquiera de nuestras redes.
      </p>
      <div className='w-full flex gap-4 justify-center mt-8'>
        <Button href="#" style="secondary">Facebook</Button>
        <Button href="#" style="secondary">Instagram</Button>
        <Button href="#" style="secondary">WhatsApp</Button>
        <Button href="#" style="secondary">Correo electrónico</Button>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const titleRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1, y: 0, duration: 1, ease: 'power3.inOut',

        scrollTrigger: {
          trigger: titleRef.current,
          start: "-100% 60%",
          toggleActions: "play none none none"
        }
      }
    )
  }, [])

  const handleOpen = (index) => {
    setOpenQuestionIndex(openQuestionIndex === index ? null : index);
  }

  return (
    <section className="w-[80%] flex flex-col">
      <h3 ref={titleRef} className="text-4xl mb-6">Preguntas frecuentes</h3>
      <div className="w-full flex flex-col">
        {questions.map((question, index) => (
          <Question
            key={index}
            question={question.question}
            answer={question.answer}
            isOpen={openQuestionIndex === index}
            handleOpen={() => handleOpen(index)}
          />
        ))}
      </div>

      <MoreHelp />
    </section>
  )
}