import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'

import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import '../styles.css'
import Navbar, { NavbarDrawer } from '../components/Navbar';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isDrawerOpen])

  return (
    <>
      <HeadContent />
      <div className="min-h-screen w-full bg-primary font-text text-text-primary">
        <Navbar
          isDrawerOpen={isDrawerOpen}
          onClickDrawer={() => setIsDrawerOpen(true)}
        />
      {isDrawerOpen && <NavbarDrawer
        onCloseDrawer={() => setIsDrawerOpen(false)}
      />}

      <Outlet />

        <Footer/>
      </div>
    </>
  )
}
