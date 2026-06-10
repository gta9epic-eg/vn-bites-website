'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu as MenuIcon, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 w-full bg-[#0f0f0f] bg-opacity-95 backdrop-blur z-50 border-b border-[#2d2d2d]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#d4a574] rounded-full flex items-center justify-center">
            <span className="text-[#0f0f0f] font-bold text-lg">V</span>
          </div>
          <span className="text-2xl font-serif font-bold text-[#d4a574]">VN Bites</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[#e5e5e5] hover:text-[#d4a574] transition-colors text-sm font-light"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block px-6 py-2 bg-[#c41e3a] text-white rounded-md hover:bg-[#a01830] transition-colors text-sm font-medium">
          Reserve Table
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#d4a574]"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] border-t border-[#2d2d2d]">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-[#e5e5e5] hover:text-[#d4a574] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-6 py-2 bg-[#c41e3a] text-white rounded-md hover:bg-[#a01830] transition-colors">
              Reserve Table
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
