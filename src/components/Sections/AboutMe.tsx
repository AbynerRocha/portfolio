import CodeBlock, { Property, Punctuation, StringVal } from '../Code';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { ImageFrame } from '../ImageFrame';

export function AboutMe() {
  const { t } = useTranslation()

  return (
    <section id="about-me" className="flex w-full min-h-[calc(100vh-2rem)]" data-section>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:items-center md:gap-0">
        <section className="w-full wrap-break-word">
          {/* Desktop */}
          <div className="hidden md:flex flex-row items-center space-x-10">
            <div className="h-72 w-48 overflow-hidden rounded-lg border border-border">
              <header className="flex flex-row items-center gap-3 bg-card font-code border-b border-b-border text-secondary py-2 pl-4">
                <div
                  className="size-3 bg-tertiary rounded-full"
                />
                <span className="text-xs">{t('about-me.photo-title')}</span>
              </header>
              <div className="relative h-64 w-48">
                <img
                  src="/foto.webp"
                  alt={t('about-me.photo-alt')}
                  className="h-full w-full object-cover object-top"
                />

                {/* Gradiente sobre a imagem */}
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,22,28,0.15)_0%,rgba(20,22,28,0.45)_60%,rgba(232,163,61,0.20)_100%)]" />

              </div>
            </div>
            <div className="w-1/2 space-y-5">
              <h4 className="font-code font-medium italic text-green-600">// {t("about-me.subtitle")}</h4>
              <h2 className="font-title text-text-primary font-bold text-4xl">{t("about-me.title")}</h2>
              <p className="text-lg text-secondary">
                {t("about-me.description")}
              </p>
            </div>
          </div>
          {/* Mobile */}
          <div className="flex flex-col md:hidden">
            <header className="flex flex-col items-center space-y-3 wrap-break-word">
              <h4 className="font-code font-medium italic text-green-600 mb-3">// {t("about-me.subtitle")}</h4>
              <ImageFrame title={t('about-me.photo.title')}>
                <img
                  src="/foto.webp"
                  alt={t('about-me.photo-alt')}
                />
              </ImageFrame>
              <div className="space-y-2">
                <h2 className="font-title text-text-primary font-bold text-2xl">{t("about-me.title")}</h2>
                <p className="text-md text-secondary">
                  {t("about-me.description")}
                </p>
              </div>
            </header>
          </div>
        </section>
        <aside className="flex w-full flex-col items-center wrap-break-word">
          <CodeBlock className="w-full max-w-lg bg-card px-5 py-5 md:w-120">
            <span className="flex flex-row justify-end items-center text-sm text-secondary mb-1">quick_facts.json <X size={13} /></span>
            <div className="h-0.5 w-full bg-border" />
            <span className="flex flex-row justify-between">
              <Property>base</Property> <StringVal>Porto, PT</StringVal>
            </span>
            <span className="flex flex-row justify-between">
              <Property>focus</Property> <StringVal>Back-End Dev.</StringVal>
            </span>
            <span className="flex flex-row justify-between">
              <Property>stack</Property> <span><Punctuation>[</Punctuation>
                <StringVal>NodeJS</StringVal><Punctuation>,</Punctuation>
                <StringVal>TypeScript</StringVal>
                <Punctuation>]</Punctuation>
              </span>
            </span>
            <span className="flex flex-row justify-between">
              <Property>open-to-work</Property>
              <span className="text-emerald-500">true</span>
            </span>
          </CodeBlock>
        </aside>
      </div>
    </section>
  )
}
