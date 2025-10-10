const navLinks = [
  { href: "#about", label: "About us", active: true },
  { href: "#creators", label: "Creators", active: false },
  { href: "#features", label: "Features", active: false },
  { href: "#advertiser", label: "Advertisers", active: false },
]

import { useState } from 'react'
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

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="w-full px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[106px] py-4 sm:py-5 md:py-6" style={{ backgroundColor }}>
      <div className="max-w-[1440px] mx-auto flex items-center justify-between ">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Lalalaugh logo" className="h-7 sm:h-8 md:h-9 lg:h-10" />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navigationLinks.map((link) => (
            <span
              key={link.href}
              className={`transition-colors font-medium text-sm xl:text-base cursor-pointer hover:text-white ${
                link.active ? "text-white" : "text-white/70"
              }`}
              onClick={() => handleNavClick(link.href)}
            >
              {link.label}
            </span>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            className="hidden lg:block bg-white cursor-pointer text-[#3931C5] hover:bg-white/90 font-semibold px-4 xl:px-6 py-2 xl:py-3 rounded-lg transition-colors text-sm xl:text-base whitespace-nowrap"
            onClick={() => handleNavClick('#contact')}
          >
            {ctaText}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-white focus:outline-none p-1 cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 sm:mt-6">
          <nav className="flex flex-col gap-3 sm:gap-4">
            {navigationLinks.map((link) => (
              <span
                key={link.href}
                className={`transition-colors font-medium text-sm sm:text-base cursor-pointer hover:text-white ${
                  link.active ? "text-white" : "text-white/70"
                }`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </span>
            ))}
            <button
              type="button"
              className="bg-white text-[#3931C5] hover:bg-white/90 font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors text-sm sm:text-base self-start mt-2"
              onClick={() => handleNavClick('#contact')}
            >
              {ctaText}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}