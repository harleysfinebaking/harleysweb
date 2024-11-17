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

export function Header3({ isScrolled }: { isScrolled: boolean }) {
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
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={`transition-all duration-300 ease-in-out ${
          showMarquee ? 'max-h-8 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <Marquee text="Welcome to Harley's Fine Baking - Indulge in our signature Medovik cakes and experience the 'Kaffee und Kuchen' tradition!" />
      </div>
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-white/20 backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-2 md:py-4">
          <div className="flex justify-between items-center md:hidden">
            <Link href="/" className="text-2xl font-bold text-[#4A4A4A]">
              <Image 
                src={isScrolled ? "/textlogo/smalllogo.png" : "/logo.png"} 
                alt="Harley's" 
                width={isScrolled ? 100 : 200} 
                height={isScrolled ? 50 : 200} 
                className="w-24 h-auto" 
              />
            </Link>
            <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          <nav className="hidden md:flex justify-between items-center">
            <div className="flex space-x-6 items-center">
              <Link href="#about" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>About</Link>
              <Link href="#menu" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Menu</Link>
              <Link href="#order" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Order Now</Link>
            </div>
            <div className="relative flex items-center justify-center">
              {!isScrolled && (
                <div 
                  className="absolute bg-[#f5d1d8]/15 backdrop-blur-md rounded-[50%] w-[200px] h-[130px] shadow-lg" 
                  style={{ borderRadius: '50% / 50%' }}
                ></div>
              )}
              <div className="relative z-10">
                <Image 
                  src={isScrolled ? "/textlogo/smalllogo.png" : "/logo.png"}
                  alt="Harley's" 
                  width={isScrolled ? 100 : 120}
                  height={isScrolled ? 50 : 120}
                  className="w-auto h-auto"
                />
              </div>
            </div>
            <div className="flex space-x-6 items-center">
              <Link href="#locations" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Locations</Link>
              <Link href="#foundation" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Foundation</Link>
              <Link href="#blog" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Blog</Link>
            </div>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-4 py-4 bg-[#FEFEFA]">
            <Link href="#about" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#menu" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="#order" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Order</Link>
            <Link href="#locations" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Locations</Link>
            <Link href="#foundation" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Foundation</Link>
            <Link href="#blog" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          </nav>
        </div>
      )}
    </header>
  )
}