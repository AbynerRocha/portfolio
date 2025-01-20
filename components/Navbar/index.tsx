
import Link from 'next/link'
import React from 'react'
import { JetBrains_Mono } from 'next/font/google'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

interface INavbarProps {
  elements: { id: string, element: HTMLElement | null }[]
}

export default function Navbar({ elements }: INavbarProps) {

  function handleScrollTo(element?: HTMLElement | null) {
    if (!element || element === null) return

    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <nav className='z-50 fixed top-0 text-zinc-100 w-full h-20 p-2 backdrop-blur-md'>
      <div className="flex flex-row items-center justify-between w-full h-full mx-3">
        <div>
          <span 
            onClick={() => handleScrollTo(elements.find(e => e.id === 'home')?.element)}
            className={`${jetBrainsMono.className} text-2xl font-semibold cursor-pointer`}
          >
            A.R
          </span>
        </div>

        <div className={`${jetBrainsMono.className} flex row space-x-5 mr-4`}>
          <span className='flex h-12 w-fit px-6 py-1 space-x-2 border rounded-xl border-zinc-800 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
            <span className='text-zinc-500'>01.</span>
            <span onClick={() => handleScrollTo(elements.find(e => e.id === 'home')?.element)}>
              home
            </span>
          </span>
          <span className='flex h-12 w-fit px-6 py-1 space-x-2 border rounded-xl border-zinc-800 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
            <span className='text-zinc-500'>02.</span>
            <span onClick={() => handleScrollTo(elements.find(e => e.id === 'about-me')?.element)}>
              about-me
            </span>
          </span>
          <span className='flex h-12 w-fit px-6 py-1 space-x-2 border rounded-xl border-zinc-800 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
            <span className='text-zinc-500'>03.</span>
            <span onClick={() => handleScrollTo(elements.find(e => e.id === 'projects')?.element)}>
              projects
            </span>
          </span>
          <span className='flex h-12 w-fit px-6 py-1 space-x-2 border rounded-xl border-zinc-800 justify-center items-center text-zinc-300 font-medium text-md cursor-pointer transition-all duration-200 ease-linear hover:text-zinc-100 hover:border-zinc-600'>
            <span className='text-zinc-500'>04.</span>
            <span onClick={() => handleScrollTo(elements.find(e => e.id === 'contacts')?.element)}>
              conctacts
            </span>
          </span>
        </div>
      </div>
    </nav>
  )
}
