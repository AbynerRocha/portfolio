import { projects } from "#/utils/projects.ts";
import { useTranslation } from "react-i18next";
import { HighlightProject, ProjectCard } from '#/components/Project'

export default function Projects() {
  const { t } = useTranslation()

  return <section id="projects" className="relative w-full" data-section>
    <div className="w-full h-auto">
      <header className="space-y-2 md:hidden">
        <h4 className="text-sm md:text-md font-code font-medium italic text-green-600">// {t("projects.comment")}</h4>
        <h2 className="font-title text-text-primary font-bold text-4xl">{t("projects.title")}</h2>
      </header>
      <div className="w-full h-fit flex flex-col items-center -space-y-12">
        <div className="flex h-screen w-full flex-col items-center justify-center px-4 md:px-0">
          <header className="mb-6 hidden w-full space-y-2 md:block">
            <h4 className="text-sm md:text-md font-code font-medium italic text-green-600">// {t("projects.comment")}</h4>
            <h2 className="font-title text-text-primary font-bold text-4xl">{t("projects.title")}</h2>
          </header>
          <div className="flex w-full justify-center">
            <div className="w-full max-w-8xl md:mt-0">
              <HighlightProject
                data={projects[0]}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 place-items-center mt-4">
          {projects.map((project, idx) => <ProjectCard key={idx} data={project} />)}
        </div>
      </div>
    </div>
  </section>
} 
