'use client'

import React from 'react'
import Home from '../pages/home/page'
import Contact from '../pages/contact/page'
import { usePathname } from 'next/navigation'
import Navbar from '../components/navbar'
function Website() {
  const pathname = usePathname()
  const renderPageContent = () => {
    switch (pathname) {
      case '/contact':
        return <Contact />
      case '/':
      default:
        return <Home />
    }
  }
  return (
    <>
      <main>
        <Navbar />
        {renderPageContent()}
      </main>
    </>
  )
}

export default Website
