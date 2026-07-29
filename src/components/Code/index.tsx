
import React from 'react'
import { twMerge } from 'tailwind-merge';

type CodeBlockProps = {
  className?: string
  children: React.ReactNode
  withLineNumber?: boolean
}

type CodeLineProps = {
  lineNumber?: number
  children: React.ReactNode
  className?: string
}

export const Keyword = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={twMerge("text-orange-500 font-semibold", className)}>{children}</span>
)

export const Property = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={twMerge("text-sky-400", className)}>{children}</span>
)

export const StringVal = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={twMerge("text-accent font-semibold", className)}>"{children}"</span>
)

export const Punctuation = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={twMerge("text-secondary", className)}>{children}</span>
)

export function CodeLine({ lineNumber, children, className }: CodeLineProps) {
  return (
    <div className={twMerge("flex flex-row items-start gap-3 font-code text-sm leading-7 sm:text-[15px]", className)}>
      {lineNumber && <aside className="w-4 shrink-0 text-right text-tertiary select-none sm:w-6">
        {lineNumber}
      </aside>}
      <pre className="m-0 flex-1 overflow-x-hidden wrap-break-word whitespace-pre-wrap text-text-primary">
        {children}
      </pre>
    </div>
  )
}

export default function CodeBlock({ className, withLineNumber, children }: CodeBlockProps) {
  return (
    <div className={twMerge("w-full overflow-hidden rounded-lg bg-primary px-4 py-3 font-code", className)}>
      {React.Children.map(children, (child, idx) => {
        if(!child) return null

        return <CodeLine key={idx} lineNumber={withLineNumber ? idx+1 : undefined}>
          {child}
        </CodeLine>
      })}
    </div>
  )
}

