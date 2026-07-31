
import { CalendarCheck, ChartNoAxesColumnIncreasing, Database, FolderOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ImageFrame } from "../ImageFrame";
import type { ProjectCardProps } from ".";
import { TechBadge } from "./TechBadge";
import { LuGithub } from "react-icons/lu";

export function HighlightProject({ data: { name, github, techs } }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <div className="mx-auto flex w-full flex-col transition-all duration-200 ease-in-out md:w-5xl md:flex-row md:justify-center md:hover:-translate-y-3
    
    ">
      <ImageFrame
        title={name}
        className="w-full self-stretch md:w-auto"
        contentClassName="h-44 w-full flex-none md:h-auto md:w-48 md:flex-1 md:rounded-bl-xl"
        headerClassName="md:rounded-r-none"
        dotColor="bg-accent"
      >
        <img
          src="highlight-project-print.png"
        />
      </ImageFrame>
      <section className="w-full md:w-[55%]">
        <div className="flex min-h-72 h-full w-full flex-col justify-between space-y-2 rounded-b-xl border border-border bg-card px-5 py-4 wrap-break-word md:rounded-b-none md:rounded-r-xl md:px-7 md:py-6">
          <header className="flex flex-row justify-between">
            <span className="text-accent"><FolderOpen /></span>
            <h5 className="text-xs font-code font-semibold text-accent-tertiary md:text-base">Projeto de destaque</h5>
          </header>
          <div className="mt-3 flex-1 w-full md:w-[65%]">
            <h6 className="font-code font-semibold">{name}</h6>
            <p className="text-sm text-secondary md:text-base">
              {t('projects.highlight.description')}
            </p>

            <div className="mt-4 flex flex-col gap-3 md:mt-5 md:gap-4">
              <div className="flex flex-row items-center gap-3">
                <CalendarCheck className="size-5 shrink-0 text-accent md:size-6" />
                <span>
                  <h5 className="font-title">{t('projects.highlight.planning-workouts.title')}</h5>
                  <h6 className="text-xs text-secondary md:text-sm">{t('projects.highlight.planning-workouts.description')}</h6>
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <ChartNoAxesColumnIncreasing className="size-5 shrink-0 text-accent md:size-6" />
                <span>
                  <h5 className="font-title">{t('projects.highlight.follow-up.title')}</h5>
                  <h6 className="text-xs text-secondary md:text-sm">{t('projects.highlight.follow-up.description')}</h6>
                </span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <Database className="size-5 shrink-0 text-accent md:size-6" />
                <span>
                  <h5 className="font-title">{t('projects.highlight.own-management.title')}</h5>
                  <h6 className="text-xs text-secondary md:text-sm">{t('projects.highlight.own-management.description')}</h6>
                </span>
              </div>
            </div>
          </div>
          <footer className="mt-4 flex h-fit w-full flex-col gap-3 md:mt-5 md:items-start">
            <div className="flex flex-wrap items-end justify-center [&>span]:px-2 md:justify-start md:[&>span]:px-4">
              {techs.map((tech, idx) => <TechBadge key={idx}>{tech}</TechBadge>)}
            </div>
            <span className="w-full h-fit flex items-center justify-center">
              <a href={github} target="_blank"
                className="flex h-12 w-full max-w-64 items-center justify-center gap-3 rounded-xl border border-accent bg-accent/10 px-2 py-2 text-xs font-code font-medium text-accent hover:bg-accent/20 md:w-54"
              >
                <LuGithub size={15} />
                <span>
                  GET /{name.replace(" ", "-").toLowerCase()}/repo
                </span>
              </a>
            </span>
          </footer>
        </div>
      </section>
    </div>
  )
}

