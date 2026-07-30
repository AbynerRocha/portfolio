import { ExternalLink, Folder } from "lucide-react";
import { LuGithub } from "react-icons/lu";

export default function Projects() {
  return <div>
    <header>
      <h4 className="font-code font-medium italic text-green-600">// projetos</h4>
      <h2 className="font-title text-text-primary font-bold text-4xl">O que eu construí</h2>
    </header>
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3 place-content-center place-items-center">
      <div className="h-72 w-full md:w-[70%] rounded-xl border border-border bg-card px-7 py-6 space-y-3 overflow-hidden wrap-break-word">
        <header className="flex flex-row justify-between">
          <span className="text-accent"><Folder/></span>
          <span className="flex flex-row gap-3 text-secondary ">
            <LuGithub className="size-6 md:size-5 hover:text-text-primary hover:cursor-pointer"/>
            <ExternalLink className="size-6 md:size-5 hover:text-text-primary hover:cursor-pointer"/>
          </span>
        </header>
        <div className="h-[70%] w-full">
          <h6 className="font-code font-semibold">nome-do-projeto</h6>
          <p className="text-secondary">
            Descrição curta e concreta: o que o sistema faz e para quem.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
        <footer className="text-xs flex items-center space-x-3">
          <span className="bg-accent-tertiary/20 text-accent-tertiary py-1 px-3 rounded-lg">React</span> 
          <span className="bg-accent-secondary/20 text-accent-secondary py-1 px-3 rounded-lg">PHP</span> 
          <span className="bg-accent/20 py-1 px-3 text-accent rounded-lg">MySQL</span> 
        </footer>
      </div>
      <div className="h-72 w-full md:w-[70%] rounded-xl border border-border bg-card px-7 py-6 space-y-3 overflow-hidden wrap-break-word">
        <header className="flex flex-row justify-between">
          <span className="text-accent"><Folder/></span>
          <span className="flex flex-row gap-3 text-secondary ">
            <LuGithub className="size-6 md:size-5 hover:text-text-primary hover:cursor-pointer"/>
            <ExternalLink className="size-6 md:size-5 hover:text-text-primary hover:cursor-pointer"/>
          </span>
        </header>
        <div className="h-[70%] w-full">
          <h6 className="font-code font-semibold">nome-do-projeto</h6>
          <p className="text-secondary">
            Descrição curta e concreta: o que o sistema faz e para quem.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
        <footer className="text-xs flex items-center space-x-3">
          <span className="bg-accent-tertiary/20 text-accent-tertiary py-1 px-3 rounded-lg">React</span> 
          <span className="bg-accent-secondary/20 text-accent-secondary py-1 px-3 rounded-lg">PHP</span> 
          <span className="bg-accent/20 py-1 px-3 text-accent rounded-lg">MySQL</span> 
        </footer>
      </div>
      <div className="h-72 w-full md:w-[70%] rounded-xl border border-border bg-card px-7 py-6 space-y-3 overflow-hidden wrap-break-word">
        <header className="flex flex-row justify-between">
          <span className="text-accent"><Folder/></span>
          <span className="flex flex-row gap-3 text-secondary ">
            <LuGithub className="size-6 md:size-5 hover:text-text-primary hover:cursor-pointer"/>
            <ExternalLink className="size-6 md:size-5 hover:text-text-primary hover:cursor-pointer"/>
          </span>
        </header>
        <div className="h-[70%] w-full">
          <h6 className="font-code font-semibold">nome-do-projeto</h6>
          <p className="text-secondary">
            Descrição curta e concreta: o que o sistema faz e para quem.aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          </p>
        </div>
        <footer className="text-xs flex items-center space-x-3">
          <span className="bg-accent-tertiary/20 text-accent-tertiary py-1 px-3 rounded-lg">React</span> 
          <span className="bg-accent-secondary/20 text-accent-secondary py-1 px-3 rounded-lg">PHP</span> 
          <span className="bg-accent/20 py-1 px-3 text-accent rounded-lg">MySQL</span> 
        </footer>
      </div>
    </div>
  </div>
}
