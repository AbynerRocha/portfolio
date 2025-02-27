import TypingAnim from '@/components/Animations/Typing'
import React from 'react'

export default function Teste() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
        <TypingAnim speed={150} className='text-5xl text-zinc-100 font-semibold'>Teste</TypingAnim>
    </div>
  )
}
