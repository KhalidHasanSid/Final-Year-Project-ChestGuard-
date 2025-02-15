import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header.jsx'

export default function Layout() {
  return (
    <>
      <header className="sticky top-0 pt-0.5  pb-4 z-50 bg-[#111827] shadow-md relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-cyan-500 after:shadow-[0_0_8px_#6b21a8] after:opacity-90">
  <Header />
</header>

  
      <main>
        <Outlet />
      </main>
    </>
  )
}
