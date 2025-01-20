import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { GrMysql } from 'react-icons/gr'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'
import { twMerge } from 'tailwind-merge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ToolTIp'

type Tech = 'HTML' | 'CSS' | 'JavaScript' | 'ReactJS' | 'NextJS'  | 'TypeScript' | 'TailwindCSS' | 'MySQL' | 'MongoDB' | 'NodeJS' | 'More'

interface ICardProps {
  title: string
  description: string
  project?: {
    image_url?: string,
    github: string,
    techs: Tech[]
  }
}

export default function Card({ title, description, project }: ICardProps) {
  if(project && project.techs && project.techs.length > 7) {
    throw new Error('The maximum number of techs is 7')
  }

  function TechIcon({ tech, className }: { tech: Tech, className?: string }) {
    switch (tech) {
      case 'HTML': 
        return <FaHtml5 className={className} />
      case 'CSS':
        return <FaCss3 className={className} />
      case 'JavaScript':
        return <FaJs className={className} />
      case 'ReactJS':
        return <FaReact className={className} />
      case "NextJS":
        return <RiNextjsLine className={className} />
      case "TypeScript":
        return <TbBrandTypescript className={className} />
      case "NodeJS":
        return <FaNodeJs className={className} />
      case "TailwindCSS":
        return <RiTailwindCssFill className={className} />
      case 'MySQL':
        return <GrMysql className={className} />
      case 'MongoDB':
        return <SiMongodb className={className} />
      case 'More':
        return <BsThreeDots className={className} />
    }
  }

  return (
    <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
      <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
        {project && project.image_url &&
          <Image
            alt={`${title} image`}
            src="https://images.unsplash.com/photo-1506187334569-7596f62cf93f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3149&q=80" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110"
          />
        }
      </div>
      <div className='w-full flex items-center justify-end absolute top-0 -left-5 z-20 m-0 pt-4 ps-4 '>
        <div className='flex flex-row items-center gap-5 group-hover:scale-110 group-hover:-translate-x-3 group-hover:translate-y-2 transition-all duration-300 ease-in-out'>
          {project && project.techs.map((tech, index) => {
            return (
              <div key={index} className='w-8 h-8 border border-zinc-200 rounded-full flex items-center justify-center'>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className='cursor-default'>
                      <TechIcon tech={tech} className='text-zinc-200 size-5' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <span className="text-zinc-200">{tech}</span>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full absolute bottom-0 z-20 m-0 pb-4 ps-4">
        {/* <div className={project && project.github !== '' ? `translate-y-10 group-hover:translate-y-0 transition-all duration-300 ease-in-out` : ''}> */}
        <div className={twMerge('w-[94%] h-fit flex flex-row justify-between')}>
          <div className='flex flex-col w-1/2 break-words transition duration-300 ease-in-out  group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110'>
            <h1 className="text-2xl font-bold text-white shadow-xl">{title}</h1>
            <p className="text-sm font-light text-gray-200 shadow-xl">{description}</p>
          </div>
          {project && project.github !== '' && (
            <div className='flex flex-1 justify-end items-center'>
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-100 opacity-0 translate-x-5 group-hover:translate-x-0 group-hover:opacity-100 group hover:bg-zinc-100 transition-all duration-300 ease-in-out"
              >
                <span className='w-full h-full flex items-center justify-center text-zinc-100 hover:text-zinc-900 duration-300 transition-all ease-in-out'>
                  <FiGithub className="size-5" />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
