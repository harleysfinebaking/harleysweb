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

export function Header4() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showMarquee, setShowMarquee] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowMarquee(false)
        setIsScrolled(true)
      } else {
        setShowMarquee(true)
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={`transition-all duration-300 ease-in-out ${
          showMarquee ? 'max-h-6 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <Marquee text="Welcome to Harley's Fine Baking - Indulge in our signature Medovik cakes and experience the 'Kaffee und Kuchen' tradition!" />
      </div>
      <div 
        className={`transition-all duration-300 ${
          isScrolled ? 'bg-[#FEFEFA] shadow-md' : 'bg-transparent'
        } brick-pattern`}
      >
        <div className="container mx-auto px-4 py-1 md:py-2">
          <div className="flex justify-between items-center md:hidden">
            <Link href="/" className="text-2xl font-bold text-[#4A4A4A]">
              <Image src="/logocircle/logosnew/logonew-black-tran.png" alt="Harley's" width={150} height={150} className="w-20 h-auto" />
            </Link>
            <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
          <nav className="hidden md:flex justify-between items-center">
            <div className="flex space-x-6 items-center">
              <Link href="#about" className={`hover:text-[#d45770] transition-colors text-base ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>About</Link>
              <Link href="#menu" className={`hover:text-[#d45770] transition-colors text-base ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Menu</Link>
            </div>
            <Link href="/" className="mx-6">
              <Image src="/logo.png" alt="Harley's" width={150} height={150} className="w-32 h-auto" />
            </Link>
            <div className="flex space-x-6 items-center">
              <Link href="#locations" className={`hover:text-[#d45770] transition-colors text-base ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Locations</Link>
              <Link href="#contact" className={`hover:text-[#d45770] transition-colors text-base ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Contact</Link>
            </div>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center space-y-2 py-2 bg-[#FEFEFA]">
            <Link href="#about" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#menu" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="#locations" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Locations</Link>
            <Link href="#contact" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
      <style jsx>{`
        .brick-pattern {
          background-color: #f5f5f5;
          background-image: linear-gradient(335deg, #ffffff 23px, transparent 23px),
            linear-gradient(155deg, #ffffff 23px, transparent 23px),
            linear-gradient(335deg, #ffffff 23px, transparent 23px),
            linear-gradient(155deg, #ffffff 23px, transparent 23px);
          background-size: 58px 58px;
          background-position: 0px 2px, 4px 35px, 29px 31px, 34px 6px;
        }
      `}</style>
    </header>
  )
}