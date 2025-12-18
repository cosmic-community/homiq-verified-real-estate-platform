'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="text-2xl sm:text-3xl font-clash font-bold text-primary">
            Homiq
          </div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a 
              href="#how-it-works" 
              className="text-text hover:text-primary transition-colors duration-200 font-clash"
            >
              How it works
            </a>
            <a 
              href="#properties" 
              className="text-text hover:text-primary transition-colors duration-200 font-clash"
            >
              Properties
            </a>
            <a 
              href="#verification" 
              className="text-text hover:text-primary transition-colors duration-200 font-clash"
            >
              How we verify
            </a>
            <a 
              href="#contact" 
              className="text-text hover:text-primary transition-colors duration-200 font-clash"
            >
              Contact
            </a>
            
            <a
              href="#properties"
              className="bg-accent hover:bg-accent-dark text-white px-6 py-2.5 rounded-lg font-clash transition-colors duration-200"
            >
              Browse Homes
            </a>
          </div>
          
          <button 
            className="md:hidden text-primary"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}