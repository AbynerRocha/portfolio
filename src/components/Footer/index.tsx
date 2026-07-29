import React from 'react'
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer
      className="flex flex-col items-center justify-centerspace-y-2 text-center h-12 md:h-20 w-full border-t-2 border-t-border py-4 font-code text-sm text-secondary md:text-md"
    >
      <span>
        Criado com ♥ por Abyner Bezerra
      </span>
      <a href="https://github.com/AbynerRocha/portfolio" className="flex flex-row items-center gap-2"><FaGithub/> Repositório deste projeto</a>
    </footer>
  )
}
