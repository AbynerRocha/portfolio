import { ArrowUpRight, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="flex flex-col justify-center w-full min-h-[calc(100vh-2rem)] space-y-10" data-section>
      <header className="w-full h-fit flex flex-col md:items-center justify-center">
        <span className="flex items-center justify-center w-42 md:w-120 h-10 mb-6 md:mb-8 bg-emerald-600/20 border-2 border-emerald-700 rounded-full font-code">
          <span className="flex flex-row items-center gap-3">
            <div
              className="rounded-full bg-emerald-400 size-2 md:size-2.5 animate-pulse"
            />
            <h4 className="text-emerald-600 text-sm md:hidden">{t('contact.badge.mobile')}</h4>
            <h4 className="text-emerald-600 text-sm hidden md:block">{t('contact.badge.desktop')}</h4>
          </span>
        </span>

        <h2 className="font-title text-4xl md:text-5xl font-bold">{t('contact.title')}</h2>
        <h4 className="text-lg text-secondary mt-6 md:mt-8">{t('contact.subtitle')}</h4>
      </header>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-6">
        <a href="mailto:abynerr.rocha@gmail.com">
          <div className="flex flex-row md:flex-col items-center md:justify-center gap-3 px-4 bg-card border-2 border-border rounded-xl h-32 md:h-62 w-full font-code">
            <span className="flex items-center justify-center size-13 md:size-16 bg-accent/20 rounded-xl">
              <Mail className="text-accent size-6" />
            </span>
            <div className="flex flex-col md:items-center gap-2">
              <span className="text-sm text-secondary">email</span>
              <span className="text-sm">abynerr.rocha@gmail.com</span>
            </div>
            <span className="flex flex-1 items-center justify-end text-secondary md:hidden">
              <ArrowUpRight />
            </span>
          </div>
        </a>
        <a href="https://github.com/AbynerRocha" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row md:flex-col items-center md:justify-center gap-3 px-4 bg-card border-2 border-border rounded-xl h-32 md:h-62 w-full font-code">
            <span className="flex items-center justify-center size-13 md:size-16 bg-accent/20 rounded-xl">
              <LuGithub className="text-accent size-6" />
            </span>
            <div className="flex flex-col md:items-center gap-2">
              <span className="text-sm text-secondary">Github</span>
              <span className="text-sm">AbynerRocha</span>
            </div>
            <span className="flex flex-1 items-center justify-end text-secondary md:hidden">
              <ArrowUpRight />
            </span>
          </div>
        </a>
        <a href="https://linkedin.com/in/abynerrocha/" target="_blank" rel="noopener noreferrer">
          <div className="flex flex-row md:flex-col items-center md:justify-center gap-3 px-4 bg-card border-2 border-border rounded-xl h-32 md:h-62 w-full font-code">
            <span className="flex items-center justify-center size-13 md:size-16 bg-accent/20 rounded-xl">
              <FaLinkedinIn size={22} className="text-accent" />
            </span>
            <div className="flex flex-col md:items-center gap-2">
              <span className="text-sm text-secondary">LinkedIn</span>
              <span className="text-sm">Abyner Rocha</span>
            </div>
            <span className="flex flex-1 items-center justify-end text-secondary md:hidden">
              <ArrowUpRight />
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}
