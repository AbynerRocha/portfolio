import { createFileRoute } from '@tanstack/react-router'
import CodeBlock, { Keyword, Property, Punctuation, StringVal } from '../components/Code';

export const Route = createFileRoute('/')({ component: Home })

const stacks = ["NodeJS", "TypeScript", "PHP", "MySQL"]

function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-4 sm:p-8 space-y-10">
      <section className="mx-auto flex min-h-[calc(100vh-2rem)] w-full max-w-xl flex-col items-center justify-center gap-2 sm:gap-6 md:gap-12 md:max-w-7xl lg:flex-row lg:justify-between">
        <section className="mt-10 flex flex-col md:items-start justify-center space-y-6 pl-0 sm:pl-7 lg:mt-0 lg:max-w-160 lg:flex-1">
          <h1 className="font-title text-center md:text-start font-bold text-3xl md:text-5xl text-text-primary w">Eu construo produtos web do zero ao deploy.</h1>
          <p className="text-secondary text-center md:text-start text-sm md:text-lg">TypeScript e NodeJS no dia a dia. Focado em código que resolve problema real,não so que roda.</p>

          <div className="font-code space-y-2 md:space-x-4 flex flex-col items-center justify-center">
            <button className="bg-accent rounded-lg h-12 w-64 font-medium text-tertiary cursor-pointer transition-all duration-150 hover:bg-accent/80 active:bg-accent">$ vamos-trabalhar-juntos</button>
            <button className="bg-none border border-border rounded-lg h-12 w-48 text-secondary cursor-pointer transition-all duration-150 active:bg-primary hover:bg-card">ver projetos</button>
          </div>
        </section>
        
        <CodeBlock className="w-full max-w-full sm:w-auto sm:min-w-[24rem] lg:w-[32rem] mt-10">
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

      </section>

      <section className="w-full min-h-[calc(100vh-2rem)] bg-red-500">
        
      </section>
    </main>
  )
}
