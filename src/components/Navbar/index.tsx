import { FileBraces, Folder, X } from "lucide-react";
import { LuGithub } from "react-icons/lu";

type NavbarProps = {
  onClickDrawer?: () => void;
  isDrawerOpen?: boolean;
}

type NavbarDrawerProps = {
  onCloseDrawer?: () => void;
}

export function NavbarDrawer({ onCloseDrawer }: NavbarDrawerProps) {
  function handleClose() {
    document.getElementById('navbar-drawer')?.classList.remove('animate-in')
    document.getElementById('navbar-drawer')?.classList.add('animate-out')
    document.getElementById('background-drawer')?.classList.add('animate-out')

    setTimeout(() => {
      if (onCloseDrawer) onCloseDrawer()
    }, 480)
  }

  return <section className="fixed inset-0 top-0 h-full w-full z-1 font-code md:hidden ">
    <div
      id="background-drawer"
      className="absolute top-0 h-full w-full bg-primary/60 font-code animate-in duration-500 fade-in fade-out"
      onClick={handleClose}
    />
    <aside id="navbar-drawer" className="absolute right-0 z-20 bg-card w-[70%] h-full border-l-2 border-l-border animate-in duration-500 slide-in-from-right-full slide-out-to-right-full">
      <header className="w-full h-14 border-b-2 border-b-border flex items-center justify-between pl-5 pr-3">
        <span className="flex flex-row items-center gap-3 text-secondary">
          <Folder className="size-4" />
          <h5 className="text-sm">menu/</h5>
        </span>
        <span
          className="p-2"
          onClick={handleClose}
        >
          <X
            className="size-5 text-secondary"
          />
        </span>
      </header>

      <section className="h-[75%] text-sm mt-4 text-secondary">
        <ul>
          <li className="flex items-center gap-3 h-14 w-full pl-5 bg-accent/10 border-l-2 text-accent border-l-accent">
            <FileBraces className="size-4 " />hero.tsx
          </li>
          <li className="flex items-center gap-3 h-14 w-full pl-5"><FileBraces className="size-4 " />sobre.tsx</li>
          <li className="flex items-center gap-3 h-14 w-full pl-5"><FileBraces className="size-4 " />projetos.tsx</li>
          <li className="flex items-center gap-3 h-14 w-full pl-5"><FileBraces className="size-4 " />contato.tsx</li>
        </ul>
      </section>
      <footer className="p-3 h-full w-full border-t-2 border-t-border">
        <div className="flex flex-row justify-between text-sm mb-3 text-secondary">
          <span className="space-x-2">
            <span className="text-accent font-medium">PT</span>
            <span>EN</span>
          </span>
          <a href="https://github.com/AbynerRocha" target="_blank" className="flex flex-row items-center gap-1">
            <LuGithub/>
            Github
          </a>
        </div>
        <button className="bg-accent rounded-lg h-12 w-63 text-xs font-medium text-tertiary cursor-pointer transition-all duration-150 hover:bg-accent/80 active:bg-accent">$ ./entrar-em-contato.sh</button>
      </footer>
    </aside>
  </section>
}

export default function Navbar({ onClickDrawer, isDrawerOpen }: NavbarProps) {
  return (
    <nav className="fixed top-0 flex flex-row items-center w-full h-16 bg-card text-text-tertiary px-4 ">
      <div className="h-full w-fit flex flex-row space-x-2 items-center mr-10">
        <span className="bg-tertiary size-3 md:size-4 rounded-full"></span>
        <span className="bg-tertiary size-3 md:size-4 rounded-full"></span>
        <span className="bg-tertiary size-3 md:size-4 rounded-full"></span>
      </div>
      <div className=" hidden md:flex flex-1 flex-row justify-between font-code text-xs text-secondary">
        <ul className="flex flex-row space-x-3">
          <li className="bg-primary rounded-md border-t-2 border-t-accent py-2 w-24 text-accent text-center">
            <a>hero.tsx</a>
          </li>
          <li className="rounded-md py-2 w-24 text-center">
            <a>sobre.tsx</a>
          </li>
          <li className="rounded-md py-2 w-24 text-center">
            <a>projetos.tsx</a>
          </li>
          <li className="rounded-md py-2 w-24 text-center">
            <a>contato.tsx</a>
          </li>
        </ul>
        <button className="text-md cursor-pointer">
          PT/EN
        </button>
      </div>

      <div className="md:hidden flex flex-1 h-full items-center justify-end ">
        <button
          className="flex flex-col space-y-1 p-3"
          onClick={() => {
            if (isDrawerOpen === true) return

            if (onClickDrawer) onClickDrawer()
          }}
        >
          <span className="w-3 h-1 rounded bg-secondary"></span>
          <span className="w-5 h-1 rounded bg-secondary"></span>
          <span className="w-6.5 h-1 rounded bg-secondary"></span>
        </button>
      </div>
    </nav>
  )
}
