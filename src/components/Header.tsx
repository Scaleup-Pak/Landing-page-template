const navLinks = [
  { href: "#about", label: "About us", active: true },
  { href: "#creators", label: "Creators", active: false },
  { href: "#features", label: "Features", active: false },
  { href: "#advertiser", label: "Advertisers", active: false },
]

import { useState, useEffect } from 'react'
import logo from '../assets/logo.svg'

interface HeaderProps {
  navigationLinks?: typeof navLinks
  ctaText?: string
  backgroundColor?: string
}

export function Header({
  navigationLinks = navLinks,
  ctaText = "Contact & Suggestions",
  backgroundColor = "#3931C5",
}: HeaderProps = {}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // Add a small delay before closing to see the click animation
    setTimeout(() => setIsMenuOpen(false), 150)
  }

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
      
      <header 
        className={`w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px] py-4 sm:py-5 md:py-6 transition-all duration-300 relative z-50 ${
          isScrolled ? 'shadow-lg backdrop-blur-sm' : ''
        }`} 
        style={{ backgroundColor }}
      >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
          <img 
            src={logo} 
            alt="Lalalaugh logo" 
            className="h-7 sm:h-8 md:h-9 lg:h-10 transition-all duration-200" 
          />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navigationLinks.map((link, index) => (
            <span
              key={link.href}
              className={`relative transition-all duration-300 font-medium text-sm xl:text-base cursor-pointer hover:text-white hover:scale-105 ${
                link.active ? "text-white" : "text-white/70"
              } after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full`}
              onClick={() => handleNavClick(link.href)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </span>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="hidden lg:block bg-white cursor-pointer text-[#3931C5] hover:bg-white/90 hover:scale-105 hover:shadow-lg font-semibold px-[30px] xl:px-6 py-2 xl:py-3 rounded-lg transition-all duration-300 text-sm xl:text-base whitespace-nowrap transform"
            onClick={() => handleNavClick('#contact')}
          >
            {ctaText}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden text-white focus:outline-none p-2 cursor-pointer rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-110 active:scale-95 ${
              isMenuOpen ? 'bg-white/10 rotate-90' : ''
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                className="transition-all duration-300"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 mt-4 sm:mt-6' 
            : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 border border-white/20">
          <nav className="flex flex-col gap-3 sm:gap-4">
            {navigationLinks.map((link, index) => (
              <span
                key={link.href}
                className={`transition-all duration-300 font-medium text-sm sm:text-base cursor-pointer hover:text-white hover:translate-x-2 hover:scale-105 active:scale-95 ${
                  link.active ? "text-white" : "text-white/70"
                } transform translate-y-2 opacity-0 ${
                  isMenuOpen ? 'animate-slideInUp' : ''
                } relative pl-4 before:absolute before:left-0 before:top-1/2 before:w-2 before:h-2 before:bg-white/50 before:rounded-full before:transform before:-translate-y-1/2 before:transition-all before:duration-300 hover:before:bg-white hover:before:scale-125`}
                onClick={() => handleNavClick(link.href)}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {link.label}
              </span>
            ))}
            <button
              type="button"
              className={`bg-white text-[#3931C5] hover:bg-white/90 hover:scale-105 hover:shadow-lg font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 text-sm sm:text-base self-start mt-2 transform translate-y-2 opacity-0 ${
                isMenuOpen ? 'animate-slideInUp' : ''
              }`}
              onClick={() => handleNavClick('#contact')}
              style={{ 
                animationDelay: `${navigationLinks.length * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              {ctaText}
            </button>
          </nav>
        </div>
      </div>
    </header>
    </>
  )
}