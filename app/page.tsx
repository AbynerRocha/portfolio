'use client'

import Navbar from "@/components/Navbar";
import Image from 'next/image'
import MyPhoto from '../public/abyner.jpg'
import * as z from 'zod/v4'
import { JetBrains_Mono } from 'next/font/google'
import { motion, useScroll, useTime, useTransform } from 'motion/react'
import { FaAngleDoubleUp, FaAngleDoubleDown, FaLinkedinIn, FaReact, FaHtml5, FaCss3, FaStar, FaPhp, FaHeart, FaFileDownload, FaGithub } from "react-icons/fa";
import { useEffect, useMemo, useRef, useState } from "react";
import { SiJavascript, SiTypescript } from "react-icons/si";
import Card from "@/components/Card";
import PortuguseLang from "@/locales/pt.json"
import EnglishLang from "@/locales/en.json"
import { projectSchema } from "@/@types/projects";
import ProjectsPT from "@/locales/projects/pt.json";
import ProjectsEN from "@/locales/projects/en.json";
import { MdOutgoingMail } from "react-icons/md";
import TypingAnim from "@/components/Animations/Typing";
import { toast } from "sonner";
import { env } from "@/lib/dotenv";

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

type Project = z.infer<typeof projectSchema>

const projectsPT = projectSchema.array().parse(ProjectsPT)
const projectsEN = projectSchema.array().parse(ProjectsEN)

const myContactEmail = 'abynerr.rocha@gmail.com'

const myTechs = [
  { name: 'ReactJS', skillRating: 4, icon: FaReact },
  { name: 'JavaScript', skillRating: 4, icon: SiJavascript },
  { name: 'TypeScript', skillRating: 4, icon: SiTypescript },
  { name: 'HTML', skillRating: 5, icon: FaHtml5 },
  { name: 'CSS', skillRating: 4, icon: FaCss3 },
  { name: 'PHP', skillRating: 3, icon: FaPhp },
]

interface ISections {
  id: string,
  element: HTMLElement | null
}

export default function Home() {
  const scrollRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [language, setLanguage] = useState<'en' | 'pt'>('pt')
  const [languageText, setLanguageText] = useState<typeof PortuguseLang>(PortuguseLang)
  const [scrollElements, setScrollElements] = useState<ISections[]>([])
  const [projects, setProjects] = useState<Project[]>(projectsPT)

  const renderTechSkillLevel = useMemo(() => {
    return (level: number) => {
      const darkStars = 5 - level
      const stars = []

      // White Stars
      for (let i = 0; i < level; i++) {
        stars.push(<FaStar key={i + level} className="size-5 text-zinc-400 group-hover:text-zinc-200 transition-all ease-linear duration-200" />)
      }

      // Dark Stars
      for (let i = 0; i < darkStars; i++) {
        stars.push(<FaStar key={i} className="size-5 text-zinc-700" />)
      }

      return stars
    }
  }, [])

  // Animations

  const distance = 10
  const time = useTime()
  const { scrollYProgress } = useScroll()

  const opacityChevronScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scaleChevronScroll = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const chevronLoopAnimY = useTransform(time, (latest) => Math.sin(latest / 270) * distance);

  const scrollToTopOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])
  const scrollToTopDisplay = useTransform(scrollYProgress, [0.1, 0.7], ['none', 'flex'])

  useEffect(() => {
    setScrollElements([
      { id: 'home', element: document.getElementById('home') },
      { id: 'about-me', element: document.getElementById('about-me') },
      { id: 'about-me-mobile', element: document.getElementById('about-me-mobile') },
      { id: 'projects', element: document.getElementById('projects') },
      { id: 'contacts', element: document.getElementById('contacts') }
    ])


    setIsMobile((window.innerWidth <= 768))

    window.addEventListener('resize', () => setIsMobile((window.innerWidth <= 768)))

    return () => {
      window.removeEventListener('resize', () => setIsMobile((window.innerWidth <= 768)))
    };
  }, [])


  function handleScrollTo(element?: HTMLElement | null, block: 'start' | 'center' | 'end' = 'center') {
    if (!element || element === null) return

    element.scrollIntoView({ behavior: 'smooth', block })
  }

  function handleChangeLanguage(lang: 'en' | 'pt') {
    setLanguage(lang)
    setLanguageText(lang === 'en' ? EnglishLang : PortuguseLang)
    setProjects(lang === 'en' ? projectsEN : projectsPT)
  }

  function handleDownloadCV() {
    window.open('../CV_AbynerBezerra.pdf', '_blank')
  }

  function handleEmail() {
    // Se estiver no mobile, abre o app de email
    
    if (isMobile) {
      window.open(`mailto:${myContactEmail}`, '_blank')
      return
    }
    
    // Se estiver no desktop, copia o email para a área de transferência
    
    navigator.clipboard.writeText(myContactEmail).then(() => {
      toast.success('Email copiado para a área de transferência')
    })
    .catch(() => {
      toast.error('Erro ao copiar email para a área de transferência')
    })
  }

  return (
    <main ref={scrollRef} className="h-full w-full">
      <Navbar
        elements={scrollElements}
        language={language}
        onLanguageChange={handleChangeLanguage}
        isMobile={isMobile}
      />

      <section className="w-full h-[60rem]">
        <div className="flex h-[94%] max-sm:h-[77%] justify-center items-center ">
          <div className="flex flex-row h-64 w-fit ml-3" id='home'>

            <div className="flex flex-col justify-center h-full w-full space-y-2">
              <div className="flex flesx-row items-end space-x-1">
                <TypingAnim
                  blink
                  speed={80}
                  className={`${jetBrainsMono.className} text-zinc-500 text-lg`}
                >
                  {languageText.home.sub_text}
                </TypingAnim>
              </div>
              <motion.h2
                initial={{ opacity: 0, translateX: -70 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: false }}
                className="text-zinc-200 font-semibold text-7xl max-sm:text-5xl"
              >
                Abyner Rocha
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, translateX: 70 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: true }}
                className="text-zinc-400 font-light text-5xl max-sm:text-2xl"
              >
                {languageText.home.sub_header}
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, translateY: 40 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1.3 }}
                viewport={{ once: true }}
                className="w-full flex justify-end max-sm:justify-center"
              >
                <button
                  className="bg-transparent border-2 border-zinc-600 text-zinc-400 mt-2 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ease-linear hover:bg-zinc-600 hover:text-zinc-100"
                  onClick={() => handleScrollTo(scrollElements.find(element => element.id === 'contacts')?.element)}
                >
                  {languageText.home.button_text}
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full h-[2%] flex justify-center items-center ">
          <motion.button
            id="chevron-scroll"
            style={{ translateY: chevronLoopAnimY, opacity: opacityChevronScroll, scale: scaleChevronScroll, cursor: 'pointer' }}
            onClick={() => handleScrollTo(scrollElements.find(element => element.id === (isMobile ? 'about-me-mobile' : 'about-me'), (isMobile ? 'end' : 'center'))?.element)}
            aria-label="Scroll down"
          >
            <FaAngleDoubleDown
              className="text-zinc-500 size-7"
            />
          </motion.button>
        </div>
      </section>
      <motion.section
        className={`${jetBrainsMono.className} w-full h-fit py-10 pr-2flex justify-center`}
        initial={{ opacity: 0, translateY: 10 }}
        whileInView={{ opacity: 1, translateY: 0 }}
      >
        <div className="flex flex-row h-full w-full max-sm:flex-col">
          <div className="flex flex-1 max-sm:flex-col max-sm:space-y-6 items-center h-full ml-6" id="about-me">
            <article className="flex flex-row w-full space-x-4 items-center md:ml-3">
              <motion.span
                initial={{ opacity: 0, translateX: -80 }}
                whileInView={{ opacity: 1, translateX: 0 }}
                viewport={{ root: scrollRef, once: true }}
                transition={{ duration: 1.3 }}
              >
                <Image
                  src={MyPhoto}
                  alt="My Photo"
                  className="lg:block rounded-full h-60 w-60 max-sm:hidden md:hidden"
                />
              </motion.span>
              <div className='space-y-2 max-sm:space-y-4 flex flex-col items-center justify-center text-zinc-200 lg:w-1/2 max-sm:w-[90%] '>
                <div className="flex max-sm:flex-col max-sm:items-center max-sm:space-y-3 max-md:w-full">
                  <Image
                    src={MyPhoto}
                    alt="My Photo"
                    className="rounded-full h-40 w-40 lg:hidden"
                  />
                  <h3 id='about-me-mobile' className="text-4xl font-bold text-center">
                    <TypingAnim
                      speed={80}
                    >
                      Abyner Rocha
                    </TypingAnim>
                  </h3>
                </div>

                <div className="flex flex-col space-y-2">
                  <motion.span
                    initial={{ opacity: 0, translateX: 50 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    viewport={{ root: scrollRef, once: true }}
                    transition={{ duration: 1.3 }}
                  >
                    {languageText.about_me.description.split('\n').map((line, index) => (
                      <p key={index} className="text-md md:font-thin text-zinc-400">
                        {line}
                      </p>
                    ))}
                  </motion.span>
                  <motion.button
                    className="bg-transparent border-2 border-zinc-600 text-zinc-400 mt-2 px-4 py-2 rounded-xl cursor-pointer flex flex-row items-center justify-center gap-3 transition-all duration-200 ease-linear hover:bg-zinc-600 hover:text-zinc-100"
                    onClick={handleDownloadCV}
                    initial={{ opacity: 0, translateY: 50 }}
                    whileInView={{ opacity: 1, translateY: 0 }}
                    viewport={{ root: scrollRef, once: true }}
                  >
                    <FaFileDownload /> {languageText.about_me.cv_button}
                  </motion.button>
                </div>
              </div>
            </article>
            <aside className="flex flex-col h-full w-full justify-center items-center space-y-4">
              <h1 className="text-zinc-100 text-3xl font-semibold mb-3">
                <TypingAnim
                  speed={80}
                >
                  {languageText.about_me.techs_title}
                </TypingAnim>
              </h1>

              {/* Techs */}
              <div className="w-[90%] h-fit">
                <div className="flex flex-row flex-wrap justify-center w-full h-full gap-5">
                  {myTechs.map((tech, index) => {
                    return (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ root: scrollRef, once: true }}
                        transition={{ duration: 0.7, delay: index * 0.3 }}
                        key={index}
                        className="group flex flex-col space-y-2 border text-zinc-400 border-zinc-600 rounded-xl w-64 items-center p-4 cursor-pointer transition-all duration-200 ease-linear lg:hover:mx-4 hover:scale-110 hover:bg-zinc-600 hover:text-zinc-100">
                        <div className="flex flex-row space-x-2 items-center">
                          <tech.icon className="size-10" />
                          <span className="text-xl font-medium">{tech.name}</span>
                        </div>
                        <div className="flex flex-row space-x-3 items-center">
                          {renderTechSkillLevel(tech.skillRating)}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </motion.section>

      <section className="w-full h-[60rem] flex flex-col justify-center space-y-6" id="projects">
        <h2 className={`${jetBrainsMono.className} text-zinc-100 font-semibold text-3xl text-center`}>{languageText.projects.title}</h2>
        <div className="flex gap-6 flex-wrap text-zinc-100 justify-center items-center content-center">
          {projects && projects.length > 0 && (
            projects.map((project, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, translateX: -100 }}
                  whileInView={{ opacity: 1, translateX: 0 }}
                  viewport={{ root: scrollRef, once: true }}
                  transition={{ duration: 1.1, delay: index * 0.2 }}
                >
                  <Card
                    title={project.name}
                    description={project.description}
                    project={{
                      image: env.NEXT_PUBLIC_URL + project.image,
                      github: project.github,
                      deploy: project.deploy,
                      techs: project.techs,
                      type: project.type
                    }}
                  />
                </motion.span>
              );
            })
          )}
        </div>
      </section>

      <section className="w-full h-[30rem]" id="contacts">
        <div className="space-y-4 w-full h-full">
          <h2 className={`${jetBrainsMono.className} text-zinc-100 font-semibold text-3xl text-center`}>{languageText.contacts.title}</h2>w 
          <div className="flex flex-row h-full md:justify-center md:items-center gap-4 max-sm:flex-col max-sm:items-center">
            <motion.span
              className="flex flex-row space-x-4 h-12 w-52"
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ root: scrollRef, once: true }}
              transition={{ duration: 1.1, delay: 0 }}
            >
              <a
                href="https://www.linkedin.com/in/abynerrocha/"
                target="_blank"
                rel="noreferrer"
                className="w-full h-full font-medium flex flex-row items-center justify-center gap-2 bg-transparent border-2 border-[#0e76a8] text-zinc-100 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:bg-[#0e76a8]"
              >
                <FaLinkedinIn className="size-7" />
                <span className="text-lg">LinkedIn</span>
              </a>
            </motion.span>
            <motion.span
              className="flex flex-row space-x-4 h-12 w-52"
              initial={{ opacity: 0, translateY: -100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ root: scrollRef, once: true }}
              transition={{ duration: 1.1, delay: 0.2 }}
            >
              <a
                href="https://www.github.com/abynerrocha/"
                target="_blank"
                rel="noreferrer"
                className="w-full h-full font-medium flex flex-row items-center justify-center gap-2 bg-transparent border-2 border-zinc-200 text-zinc-100 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-800 hover:bg-zinc-200"
              >
                <FaGithub className="size-7" />
                <span className="text-lg">Github</span>
              </a>
            </motion.span>
            <motion.span
              className="flex flex-row space-x-4 h-12 w-52"
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              viewport={{ root: scrollRef, once: true }}
              transition={{ duration: 1.1, delay: 0.4 }}
            >
              <button
                className="w-full h-full font-medium flex flex-row items-center justify-center gap-2 bg-transparent border-2 border-red-600 text-zinc-100 px-4 py-2 rounded-xl cursor-pointer transition-all duration-200 ease-linear hover:text-red-100 hover:bg-red-600"
                onClick={handleEmail}
              >
                <MdOutgoingMail className="size-7" />
                <span className="text-lg">Email</span>
              </button>
            </motion.span>
            <motion.button
              className="bg-transparent border-2 text-md font-medium border-zinc-400 text-zinc-200 h-12 w-52 rounded-xl cursor-pointer flex flex-row items-center justify-center gap-3 transition-all duration-200 ease-linear hover:bg-zinc-400 hover:text-zinc-700"
              onClick={handleDownloadCV}
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              viewport={{ root: scrollRef, once: true }}
              transition={{ duration: 1.1, delay: 0.6 }}
            >
              <FaFileDownload /> {languageText.contacts.cv_button}
            </motion.button>
          </div>
          <div className="h-fit w-full flex justify-center items-center">

          </div>
        </div>
      </section>

      <div className="fixed bottom-4 right-4 flex flex-col sm:bottom-2 gap-4 z-20">
        <motion.span
          id="chevron-scroll-up"
          className="size-16 flex justify-center items-center cursor-pointer"
          onClick={() => handleScrollTo(scrollElements.find(element => element.id === 'home')?.element, 'end')}
          style={{
            opacity: scrollToTopOpacity,
            display: scrollToTopDisplay
          }}
        >
          <FaAngleDoubleUp
            className="fill-zinc-500 size-7"
          />
        </motion.span>
      </div>

      <footer className="relative flex flex-col items-center border-t border-zinc-600 bottom-0 w-full h-22 p-3">
        <div>
          <a target="_blank" className='text-zinc-300 text-sm cursor-pointer hover:underline' href="https://github.com/AbynerRocha/portfolio">{languageText.footer.rep_link}</a>
        </div>
        <div className="flex flex-col justify-center items-center h-full w-full">
          <span className="text-zinc-100 font-semibold">Abyner Rocha - {new Date().getFullYear()}</span>
          <span className="text-zinc-100 font-normal flex flex-row items-center gap-2">{languageText.footer.text} <FaHeart className="text-zinc-200" /></span>
        </div>
      </footer>
    </main>
  );
}
