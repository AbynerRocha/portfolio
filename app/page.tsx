'use client'

import Navbar from "@/components/Navbar";
import Image from 'next/image'
import MyPhoto from '../public/abyner.jpg'
import LinkedinLogo from '../public/linkedin.svg'
import { JetBrains_Mono } from 'next/font/google'
import { motion, useScroll, useSpring, useTime, useTransform } from 'motion/react'
import { FaAngleDoubleUp, FaAngleDoubleDown, FaLinkedinIn, FaReact, FaHtml5, FaCss3 } from "react-icons/fa";
import { useEffect, useState } from "react";
import { SiTypescript } from "react-icons/si";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ToolTIp";
import Card from "@/components/Card";

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

interface ISections {
  id: string,
  element: HTMLElement | null
}

export default function Home() {
  const [scrollElements, setScrollElements] = useState<ISections[]>([])

  useEffect(() => {
    setScrollElements([
      { id: 'home', element: document.getElementById('home') },
      { id: 'about-me', element: document.getElementById('about-me') },
      { id: 'projects', element: document.getElementById('projects') },
      { id: 'contacts', element: document.getElementById('contacts') }
    ])
  }, [])

  const distance = 10
  const time = useTime()
  const { scrollYProgress } = useScroll()

  const opacityChevronScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleChevronScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const chevronLoopAnimY = useTransform(time, (latest) => Math.sin(latest / 270) * distance);
  const blinkLoopAnim = useTransform(time, (latest) => Math.sin(latest / 100) * 10)

  const scrollToTopOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])
  const scrollToTopDisplay = useTransform(scrollYProgress, [0.1, 0.7], ['none', 'flex'])

  function handleScrollTo(element?: HTMLElement | null) {
    if (!element || element === null) return

    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }


  return (
    <main className="h-full w-full">
      <Navbar elements={scrollElements} />

      <section className="w-full h-[60rem]">
        <div className="flex h-[94%] justify-center items-center ">
          <div className="flex flex-row h-64 w-fit ml-3" id='home'>

            <div className="flex flex-col justify-center h-full w-full space-y-2">
              <div className="flex flesx-row items-end space-x-1">
                <span className={`${jetBrainsMono.className} text-zinc-500 text-lg`}>Hello, my name is</span>
                <motion.div
                  className="h-[18px] w-[0.3px] mb-[5px] bg-zinc-100"
                  style={{ opacity: blinkLoopAnim }}
                />
              </div>
              <h2 className="text-zinc-200 font-semibold text-7xl">Abyner Rocha</h2>
              <h4 className="text-zinc-400 font-light text-5xl">I build things for the web </h4>
              <div className="w-full flex justify-end">
                <button
                  className="bg-transparent border-2 border-zinc-600 text-zinc-400 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-600 hover:text-zinc-100"
                  onClick={() => handleScrollTo(scrollElements.find(element => element.id === 'contacts')?.element)}
                >
                  Let's work together
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-[2%] flex justify-center items-center ">
          <motion.button
            id="chevron-scroll"
            style={{ translateY: chevronLoopAnimY, opacity: opacityChevronScroll, scale: scaleChevronScroll, cursor: 'pointer' }}
            onClick={() => handleScrollTo(scrollElements.find(element => element.id === 'about-me')?.element)}
          >
            <FaAngleDoubleDown
              className="text-zinc-500 size-7"
            />
          </motion.button>
        </div>
      </section>
      <section className="w-full h-[60rem]" >
        <div className="flex flex-row h-full w-full">
          <div className="flex flex-1 items-center h-full ml-6" id="about-me">
            <div className="flex flex-row space-x-4 items-center ml-3">
              <Image
                src={MyPhoto}
                alt="My Photo"
                className="rounded-full h-60 w-60"
              />
              <div className={`${jetBrainsMono.className} space-y-2 flex flex-col text-zinc-200 w-1/2`}>
                <h3 className="text-4xl font-bold">Abyner Rocha</h3>
                <p className="text-md font-thin text-zinc-400">
                  Dolore proident veniam amet sunt dolore culpa excepteur. Lorem laborum non excepteur non. Veniam nostrud veniam tempor deserunt ea deserunt sit labore elit nulla veniam. Laborum dolore esse ex ex occaecat amet.<br />
                  Ipsum adipisicing ad sit quis pariatur sunt do do. Consectetur qui esse commodo officia ea anim excepteur consectetur. Do id occaecat voluptate aliqua cillum. Laboris mollit esse duis do occaecat. Exercitation sit officia minim velit amet amet culpa qui. Adipisicing eiusmod in elit deserunt ad reprehenderit eiusmod mollit tempor veniam quis officia ea fugiat.
                </p>
              </div>
            </div>
          </div>

          <div className="h-full w-[35%] flex flex-col space-y-10 items-center justify-center pb-14">
            <h4 className={`${jetBrainsMono.className} text-2xl font-medium text-zinc-100`}>Minhas Tecnologias</h4>
            <div className="relative rounded-[50%] h-[20rem] w-[20rem] flex items-center justify-center  ">
              <div className="absolute w-20 h-20 flex items-center justify-center" style={{ top: '10%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <FaReact className="fill-zinc-200 size-20" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-zinc-200">React</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="absolute flex justify-center items-center w-20 h-20" style={{ top: '50%', right: '10%', transform: 'translate(50%, -50%)' }}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <FaHtml5 className="fill-zinc-200 size-20" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-zinc-200">HTML</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="z-0 absolute flex justify-center items-center w-20 h-20" style={{ bottom: '10%', left: '50%', transform: 'translate(-50%, 50%)' }}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <FaCss3 className="fill-zinc-200 size-16" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-zinc-200">CSS</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="absolute flex justify-center items-center w-20 h-20" style={{ top: '50%', left: '10%', transform: 'translate(-50%, -50%)' }}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <SiTypescript className="fill-zinc-200 size-16" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-zinc-200">TypeScript</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-[60rem]" id="projects">
        <div className="flex flex-row items-center justify-center h-full w-full">
          <Card
            title="Teste"
            description="Testaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaae"
            project={{
              github: "dsadadas",
              techs: ['NextJS', 'TailwindCSS', 'TypeScript']
            }}
          />
          <Card
            title="Teste"
            description="Teste"
            project={{
              github: "dsadadas",
              techs: ['NextJS', 'TailwindCSS', 'TypeScript']
            }}
          />
          <Card
            title="Teste"
            description="Teste"
            project={{
              github: "dsadadas",
              techs: ['NextJS', 'TailwindCSS', 'More']
            }}
          />
        </div>

      </section>

      <div className="fixed bottom-4 right-4 flex flex-col">
        <motion.span
          id="chevron-scroll-up"
          className="size-16 flex justify-center items-center cursor-pointer"
          onClick={() => handleScrollTo(scrollElements.find(element => element.id === 'home')?.element)}
          style={{
            opacity: scrollToTopOpacity,
            display: scrollToTopDisplay
          }}
        >
          <FaAngleDoubleUp
            className="fill-zinc-500 size-7"
          />
        </motion.span>
        <span className="group bg-transparent border-2 border-zinc-100 rounded-full size-16 flex justify-center items-center cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-200">
          <FaLinkedinIn
            className="fill-zinc-200 size-7 transition-all duration-200 ease-linear group-hover:fill-zinc-900"
          />
        </span>
      </div>

    </main>
  );
}
