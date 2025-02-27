import Image from 'next/image'
import React from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaCss3, FaHtml5, FaJs, FaMobileAlt, FaNodeJs, FaReact } from 'react-icons/fa'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { GrMysql } from 'react-icons/gr'
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandTypescript } from 'react-icons/tb'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ToolTIp'
import Link from 'next/link'
import { projectSchema } from '@/@types/projects'
import { techsSchema } from '@/@types/tech'
import { MdOutlineWebAsset } from 'react-icons/md'
import { twMerge } from 'tailwind-merge'
import { z } from 'zod'

type Project = z.infer<typeof projectSchema>
type Tech = z.infer<typeof techsSchema>

interface ICardProps {
  className?: string
  title: string
  description: string
  project?: Omit<Project, 'name' | 'description'>
}

export default function Card({ title, description, project, className }: ICardProps) {

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
    <div className={twMerge("group relative m-0 flex h-[26rem] w-96 rounded-xl shadow-xl ring-gray-900/5 ", className)}>
      <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
        {project && project.image && <Image alt={`${title} image`} src={project.image} />}
      </div>
      <div className='w-full flex items-center justify-end absolute top-0 -left-5 z-20 m-0 pt-7  p-4 '>
        <div className='flex flex-row items-center gap-5 group-hover:scale-110 group-hover:-translate-x-3 group-hover:translate-y-2 transition-all duration-300 ease-in-out'>
          {project && project.techs.map((tech, index, arr) => {
            if(index > 5) return null

            if (index === 5 && arr.length > 6) return <TechIcon key={index} tech='More' className='text-zinc-100 size-5' />
            return (
              <TooltipProvider key={index}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger aria-label={tech} className='cursor-default'>
                    <div className='w-8 h-8 border border-zinc-200 text-zinc-200 rounded-full flex items-center justify-center hover:text-zinc-900 hover:bg-zinc-100 transition-all duration-300 ease-in-out'>
                      <TechIcon tech={tech} className='size-5' />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent >
                    <span className="text-zinc-200">{tech}</span>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            )
          })}
        </div>
      </div>
      <div className="w-full absolute bottom-0 z-20 m-0 pb-4 ps-4">
        <div className='w-[94%] h-fit flex flex-row justify-between'>
          <div className='flex flex-col w-1/2 break-words transition duration-300 ease-in-out  group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110'>
            <span className='flex flex-row gap-3 items-center'>
              {project && project.type === 'web' ? <MdOutlineWebAsset className='text-zinc-200 size-6' /> : <FaMobileAlt className="text-zinc-200 size-6" />}
              <h1 className="text-2xl font-bold text-white shadow-xl">{title}</h1>
            </span>
            <p className="text-sm font-light text-gray-200 shadow-xl">{description}</p>
          </div>
          <div className='flex flex-col flex-1 justify-center items-end gap-3'>
            {project && project.github !== '' && (
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-100 opacity-0 translate-x-5 group-hover:translate-x-0 group-hover:opacity-100 group hover:bg-zinc-100 transition-all duration-300 ease-in-out"
              >
                <span className='w-full h-full flex items-center justify-center text-zinc-100 hover:text-zinc-900 duration-300 transition-all ease-in-out'>
                  <Link aria-label={`Github repo from ${title}`} target='_blank' href={project.github} passHref>
                    <FiGithub className="size-5" />
                  </Link>
                </span>
              </div>
            )}
            {project?.deploy && project.deploy !== '' && (
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center border border-zinc-100 opacity-0 translate-x-5 group-hover:translate-x-0 group-hover:opacity-100 group hover:bg-zinc-100 transition-all duration-300 ease-in-out"
              >
                <span className='w-full h-full flex items-center justify-center text-zinc-100 hover:text-zinc-900 duration-300 transition-all ease-in-out'>
                  <Link aria-label={`Deploy url`} target='_blank' href={project.deploy} passHref>
                    <FiExternalLink className="size-5" />
                  </Link>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
