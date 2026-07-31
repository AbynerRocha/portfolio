import { createFileRoute } from '@tanstack/react-router'
import CodeBlock, { Keyword, Property, Punctuation, StringVal } from '../components/Code';
import { useTranslation } from 'react-i18next';
import { AboutMe } from '#/components/Sections/AboutMe.tsx';
import Projects from '#/components/Sections/Projects.tsx';
import Contact from '#/components/Sections/Contact.tsx';
import i18n from '../i18n';

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: i18n.t("head.title") },
      {
        name: "description",
        content: i18n.t("head.description")
      }
    ]
  }),
  component: Home
})

const stacks = ["NodeJS", "TypeScript", "PHP", "MySQL"]

function Home() {
  const { t } = useTranslation()

  return (
    <main className="flex flex-col min-h-screen items-center p-4 sm:p-8 space-y-10">
      <section id="hero" data-section className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-xl flex-col items-center justify-center gap-2 sm:gap-6 md:gap-12 md:max-w-7xl lg:flex-row lg:justify-between">
        <CodeBlock withLineNumber className="w-full max-w-full sm:w-auto sm:min-w-[24rem] lg:w-lg">
          <>
            <Keyword>const</Keyword> dev <Punctuation>= &#123;</Punctuation>
          </>

          <span className="pl-4">
            <Property>name</Property><Punctuation>:</Punctuation> <StringVal>Abyner Rocha</StringVal>,
          </span>
          <span className="pl-4">
            <Property>role</Property><Punctuation>:</Punctuation> <StringVal>Back-end developer</StringVal>,
          </span>
          <span className="pl-4">
            <Property>stacks</Property><Punctuation>:</Punctuation> <Punctuation>[</Punctuation>
            {stacks.map((stack, idx) => {
              return (
                <span key={idx}>
                  <StringVal>{stack}</StringVal>{idx + 1 !== stacks.length && <Punctuation>,</Punctuation>}
                </span>
              )
            })}
            <Punctuation>]</Punctuation>,
          </span>
          <span className="pl-4">
            <Property>base</Property><Punctuation>:</Punctuation> <StringVal>Porto, Portugal</StringVal>
          </span>
          <span >
            <Punctuation
              className="flex flex-row items-center"
            >
              &#125;
              <div
                className="bg-accent animate-blink h-4 w-1.5 ml-0.5 mt-0.5"
              />
            </Punctuation>

          </span>
        </CodeBlock>
        <section className="mt-10 flex flex-col md:items-center justify-center space-y-6 pl-0 sm:pl-7 lg:mt-0 lg:max-w-160 lg:flex-1">
          <h1 className="font-title text-center md:text-center font-bold text-3xl md:text-5xl text-text-primary w">{t("hero.title")}</h1>
          <p className="text-secondary text-center md:text-center text-sm md:text-lg">{t('hero.subtitle')}</p>

          <div className="font-code space-y-2 md:space-x-4 flex flex-col items-center justify-center">
            <a href="#contact" className="flex items-center justify-center bg-accent rounded-lg h-12 w-64 font-medium text-tertiary cursor-pointer transition-all duration-150 hover:bg-accent/80 active:bg-accent">{t("hero.buttons.work-together")}</a>
            <a href="#projects" className="flex items-center justify-center bg-none border border-border rounded-lg h-12 w-48 text-secondary cursor-pointer transition-all duration-150 active:bg-primary hover:bg-card">{t("hero.buttons.view-projects")}</a>
          </div>
        </section>
      </section>
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  )
}
