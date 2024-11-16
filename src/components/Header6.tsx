'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

function Marquee({ text }: { text: string }) {
  return (
    <div className="bg-[#F5D1D8] overflow-hidden py-0">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-[#4A4A4A] text-xs font-mulish mx-4">{text}</span>
        <span className="text-[#4A4A4A] text-xs font-mulish mx-4">{text}</span>
      </div>
    </div>
  )
}

export function Header6({ isScrolled }: { isScrolled: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showMarquee, setShowMarquee] = useState(true)

  useEffect(() => {
    if (isScrolled) {
      setShowMarquee(false)
    } else {
      setShowMarquee(true)
    }
  }, [isScrolled])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-24'}`}>
      <div 
        className={`transition-all duration-300 ease-in-out ${
          showMarquee ? 'max-h-8 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <Marquee text="Welcome to Harley's Fine Baking - Indulge in our signature Medovik cakes and experience the 'Kaffee und Kuchen' tradition!" />
      </div>
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className={`container mx-auto px-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
          <div className="flex justify-between items-center md:hidden">
            <Link href="/" className="text-2xl font-bold text-[#4A4A4A]">
              <Image 
                src={isScrolled ? "/textlogo/textlogo.png" : "/logo.png"} 
                alt="Harley's" 
                width={200} 
                height={200} 
                className={`transition-all duration-300 ${isScrolled ? 'w-20 h-auto' : 'w-24 h-auto'}`}
              />
            </Link>
            <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          <nav className="hidden md:flex justify-between items-center">
            <div className="flex space-x-6 items-center">
              <Link href="#about" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-white'}`}>About</Link>
              <Link href="#menu" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-white'}`}>Menu</Link>
            </div>
            <Link href="/" className={`mx-6 relative ${isScrolled ? 'h-12' : 'h-16'}`}>
              <Image 
                src="/logo.png" 
                alt="Harley's Logo" 
                width={200} 
                height={200} 
                className={`w-40 h-auto absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100 translate-y-0'}`}
              />
              <Image 
                src="/textlogo/textlogo.png" 
                alt="Harley's Text Logo" 
                width={200} 
                height={200} 
                className={`w-32 h-auto absolute top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 ${isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
              />
            </Link>
            <div className="flex space-x-6 items-center">
              <Link href="#locations" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-white'}`}>Locations</Link>
              <Link href="#contact" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-white'}`}>Contact</Link>
            </div>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 bg-[#FEFEFA]">
            <Link href="#about" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#menu" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="#locations" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Locations</Link>
            <Link href="#contact" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}