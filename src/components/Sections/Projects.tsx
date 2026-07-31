import { projects } from "#/utils/projects.ts";
import { ExternalLink, Folder } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LuGithub } from "react-icons/lu";
import { twMerge } from "tailwind-merge";

export default function Projects() {
  const { t } = useTranslation()

  const colorsTechBadge = ["bg-accent-tertiary/20 text-accent-tertiary", "bg-accent-secondary/20 text-accent-secondary ", "bg-accent/20 text-accent"]
  return <section id="projects" className="flex items-center w-full min-h-[calc(100vh-2rem)]" data-section>
    <div>
      <header className="space-y-2">
        <h4 className="text-sm md:text-md font-code font-medium italic text-green-600">// {t("projects.comment")}</h4>
        <h2 className="font-title text-text-primary font-bold text-4xl">{t("projects.title")}</h2>
      </header>
      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center">
        {projects.map((project, idx) => {

          return (
            <div key={idx} className="flex min-h-72 w-full flex-col justify-between rounded-xl border border-border bg-card px-7 py-6 wrap-break-word md:w-[70%]">
              <header className="flex flex-row justify-between">
                <span className="text-accent"><Folder /></span>
                <span className="flex flex-row gap-3 text-secondary ">
                  <a href={project.github} target="_blank"><LuGithub className="size-6 md:size-5 hover:text-text-primary hover:cursor-pointer" /></a>
                  {project.deploy && <a href={project.deploy}><ExternalLink className="size-6 md:size-5 hover:text-text-primary hover:cursor-pointer" /></a>}
                </span>
              </header>
              <div className="mt-3 flex-1 w-full">
                <h6 className="font-code font-semibold">{project.name}</h6>
                <p className="text-secondary">
                  {t(project.description)}
                </p>
              </div>
              <footer className="mt-auto flex flex-wrap items-center justify-center gap-2 pt-3 text-xs">
                {project.techs.map((tech, idx) => {
                  const random = Math.floor(Math.random() * colorsTechBadge.length)
                  return <span key={idx} className={twMerge("py-1 px-3 rounded-lg", colorsTechBadge[random])}>{tech}</span>
                })}
              </footer>
            </div>
          )
        })}
      </div>
    </div>
  </section>
}
