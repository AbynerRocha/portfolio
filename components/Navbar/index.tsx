'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import BrazilFlag from '../../public/brazil_flag.svg'
import USAFlag from '../../public/usa_flag.svg'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })
import PortuguseLang from "@/locales/pt.json"
import EnglishLang from "@/locales/en.json"
import { GrFormClose } from 'react-icons/gr'
import TypingAnim from '../Animations/Typing'

interface INavbarProps {
  elements: { id: string, element: HTMLElement | null }[],
  onLanguageChange?: (lang: 'en' | 'pt') => void
  language?: 'en' | 'pt',
  isMobile: boolean
}

export default function Navbar({ elements, language, onLanguageChange, isMobile }: INavbarProps) {
  const [langText, setLangText] = useState<typeof PortuguseLang>(PortuguseLang)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => setLangText(language === 'pt' ? PortuguseLang : EnglishLang), [language])

  console.log((isMobile ? 'my-photo-mobile' : 'about-me'))

  function handleScrollTo(element?: HTMLElement | null) {
    if (!element || element === null) return

    if (mobileMenuOpen) setMobileMenuOpen(false)

    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <nav className='z-50 fixed top-0 text-zinc-100 w-full h-fit p-2 backdrop-blur-md '>
      {/* Desktop Menu */}
      <div className="lg:flex flex-row h-20 items-center justify-between w-full mx-3 max-sm:hidden md:hidden">
        <div>
          <span
            onClick={() => handleScrollTo(elements.find(e => e.id === 'home')?.element)}
            className={`${jetBrainsMono.className} text-2xl font-semibold cursor-pointer`}
          >
            A.R
          </span>
        </div>

        <div className='flex flex-1 justify-end items-center'>
          <ul className={`${jetBrainsMono.className} flex row space-x-5 mr-4`}>
            <li className='flex h-12 w-fit px-6 py-1 space-x-2 border rounded-xl border-zinc-800 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
              <span className='text-zinc-500'>01.</span>
              <span onClick={() => handleScrollTo(elements.find(e => e.id === 'home')?.element)}>
                <TypingAnim speed={120}>{langText.navbar.home}</TypingAnim>
              </span>
            </li>
            <li className='flex h-12 w-fit px-6 py-1 space-x-2 border rounded-xl border-zinc-800 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
              <span className='text-zinc-500'>02.</span>
              <span onClick={() => handleScrollTo(elements.find(e => e.id === (isMobile ? 'my-photo-mobile' : 'about-me'))?.element)}>
                <TypingAnim speed={120}>{langText.navbar.about_me}</TypingAnim>
              </span>
            </li>
            <li className='flex h-12 w-fit px-6 py-1 space-x-2 border rounded-xl border-zinc-800 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
              <span className='text-zinc-500'>03.</span>
              <span onClick={() => handleScrollTo(elements.find(e => e.id === 'projects')?.element)}>
                <TypingAnim speed={120}>{langText.navbar.projects}</TypingAnim>
              </span>
            </li>
            <li className='flex h-12 w-fit px-6 py-1 space-x-2 border rounded-xl border-zinc-800 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
              <span className='text-zinc-500'>04.</span>
              <span onClick={() => handleScrollTo(elements.find(e => e.id === 'contacts')?.element)}>
                <TypingAnim speed={120}>{langText.navbar.contact}</TypingAnim>
              </span>
            </li>
          </ul>
          <div className='flex  w-12 h-full  mr-10'>
            <button onClick={() => onLanguageChange && onLanguageChange(language === 'en' ? 'pt' : 'en')} className='w-full h-full flex justify-center items-center'>
              {language === 'pt' ? <Image src={BrazilFlag} alt='Bandeira Brasileira' /> : <Image src={USAFlag} alt='USA Flag' />}
            </button>
          </div>
        </div>

      </div>

      {/* Mobile Menu */}
      <section className='flex flex-row w-full h-16 pr-3 justify-between items-center lg:hidden'>
        <div>
          <span
            onClick={() => handleScrollTo(elements.find(e => e.id === 'home')?.element)}
            className={`${jetBrainsMono.className} text-2xl font-semibold cursor-pointer`}
          >
            A.R
          </span>
        </div>
        <div onClick={() => setMobileMenuOpen(true)} className='space-y-2'>
          <span className="block h-[3px] rounded-full w-8 bg-zinc-200"></span>
          <span className="block h-[3px] rounded-full w-8 bg-zinc-200"></span>
          <span className="block h-[3px] rounded-full w-8 bg-zinc-200"></span>
        </div>
      </section>
      <div className={`${jetBrainsMono.className} z-[99] absolute top-0 right-2 h-screen w-full bg-zinc-900`} style={{ display: mobileMenuOpen ? 'block' : 'none' }}>

        <div className='h-fit w-full flex justify-end items-center pt-3'>
          <span onClick={() => setMobileMenuOpen(false)} className='cursor-pointer'>
            <GrFormClose className='text-zinc-200 size-14' />
          </span>
        </div>

        <ul className='flex flex-col space-y-4 text-center w-full h-fit text-2xl font-semibold '>
          <li className='flex h-12 w-fit px-6 py-1 space-x-2 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
            <span className='text-zinc-500'>01.</span>
            <button onClick={() => handleScrollTo(elements.find(e => e.id === 'home')?.element)}>
              {langText.navbar.home}
            </button>
          </li>
          <li className='flex h-12 w-fit px-6 py-1 space-x-2 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
            <span className='text-zinc-500'>02.</span>
            <span onClick={() => handleScrollTo(elements.find(e => e.id === 'about-me-mobile')?.element)}>
              {langText.navbar.about_me}
            </span>
          </li>
          <li className='flex h-12 w-fit px-6 py-1 space-x-2 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
            <span className='text-zinc-500'>03.</span>
            <span onClick={() => handleScrollTo(elements.find(e => e.id === 'projects')?.element)}>
              {langText.navbar.projects}
            </span>
          </li>
          <li className='flex h-12 w-fit px-6 py-1 space-x-2 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
            <span className='text-zinc-500'>04.</span>
            <span onClick={() => handleScrollTo(elements.find(e => e.id === 'contacts')?.element)}>
              {langText.navbar.contact}
            </span>
          </li>
        </ul>
        <div className='flex pl-2 h-full justify-center items-center'>
          <button
            className='py-2 px-7 flex justify-center items-center border border-zinc-600 rounded-2xl'
            onClick={() => onLanguageChange && onLanguageChange(language === 'en' ? 'pt' : 'en')}
          >
            {language === 'pt' ? (<div className='flex flex-row items-center space-x-3'>
              <Image src={BrazilFlag} alt='Bandeira Brasileira' />
              <span>Português</span>
            </div>) : (<div className='flex flex-row items-center space-x-3'>
              <Image src={USAFlag} alt='USA Flag' />
              <span>English</span>
            </div>)
            }
          </button>
        </div>
      </div>
    </nav>
  )
}
