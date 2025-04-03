'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

type TypingAnimProps = {
  children: string,
  speed?: number,
  className?: string,
  blink?: boolean
}

export default function TypingAnim({ children, className, speed, blink }: TypingAnimProps) {
  const [displayText, setDisplayText] = useState('')
  speed = speed || 100

  useEffect(() => {
    let idx = 0
   
    const interval = setInterval(() => {
      if(idx === children.length) clearInterval(interval)
      setDisplayText(children.slice(0, idx))
      idx++
    }, speed)

    return () => clearInterval(interval)
  }, [children, speed])

  return (
    <span className='space-x-2 flex items-center'>
      <span className={className}>
        {displayText}
      </span>
      {blink && (
        <motion.span 
          animate={{ opacity: [0, 1] }} 
          transition={{ duration: 0.4, repeat: Infinity, repeatType: 'reverse' }} 
          className='inline-block w-[1px] h-5 bg-zinc-100'
        />
      )}
    </span>
  )
}
