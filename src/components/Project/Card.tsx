
import { ExternalLink, Folder } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LuGithub } from "react-icons/lu";
import type { ProjectCardProps } from ".";
import { TechBadge } from "./TechBadge";

export function ProjectCard({ data: { name, description, github, deploy, techs } }: ProjectCardProps) {
  const { t } = useTranslation()

  return <div
    className="flex min-h-72 w-full flex-col justify-between rounded-xl border border-border bg-card px-7 py-6 wrap-break-word md:w-[70%]
    transition-all duration-200 ease-in-out hover:-translate-y-3 
    "

  >
    <header className="flex flex-row justify-between">
      <span className="text-accent"><Folder /></span>
      <span className="flex flex-row gap-3 text-secondary ">
        {deploy && <a href={deploy}><ExternalLink className="size-6 md:size-5 hover:text-text-primary hover:cursor-pointer" /></a>}
      </span>
    </header>
    <div className="mt-3 flex-1 w-full">
      <h6 className="font-code font-semibold">{name}</h6>
      <p className="text-secondary">
        {t(description)}
      </p>
    </div>
    <footer className="flex flex-col items-center space-y-4">
      <div className="flex flex-wrap items-end justify-start">
        {techs.map((tech, idx) => <TechBadge key={idx}>{tech}</TechBadge>)}
      </div>
      <a href={github} target="_blank"
        className="flex h-12 w-64 items-center justify-center gap-3 rounded-xl border border-accent bg-accent/10 px-2 py-2 text-xs font-code font-medium text-accent hover:bg-accent/20 md:w-54"
      >
        <LuGithub size={15} />
        <span>
          GET /{name.replace(" ", "-").toLowerCase()}/repo
        </span>
      </a>
    </footer>
  </div>
}