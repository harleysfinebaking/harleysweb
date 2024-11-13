'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function BrickWall() {
  return (
    <div className="absolute inset-0 z-0 bg-[#E6E6E2] overflow-hidden">
      <div className="w-full h-full flex flex-col">
        {[...Array(10)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex-1 flex relative">
            {[...Array(rowIndex % 2 === 0 ? 16 : 17)].map((_, colIndex) => (
              <div
                key={colIndex}
                className={`flex-1 bg-[#FEFEFA] border-r border-[#E6E6E2] ${
                  rowIndex % 2 === 0 ? '' : colIndex === 0 ? 'ml-[-.25%]' : ''
                }`}
              ></div>
            ))}
            <div className="absolute inset-0 border-t border-b border-[#E6E6E2]"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <BrickWall />
      <div className="relative z-10">
        <div className="py-0 overflow-hidden">
          <div className="container mx-auto relative">
            <p className="text-[#4A4A4A] text-xs whitespace-nowrap inline-block animate-marquee">
              Welcome to Harley's Fine Baking - Indulge in our signature Medovik cakes and experience the "Kaffee und Kuchen" tradition!
            </p>
          </div>
        </div>
        
        <div className={`transition-all duration-500 ${scrolled ? 'py-1' : 'py-2'}`}>
          <div className="container mx-auto flex justify-center items-center">
            <div className={`relative ${scrolled ? 'w-12 h-12' : 'w-20 h-20'} transition-all duration-500`}>
              <Image
                src="/logo.png"
                alt="Harley's Fine Baking Logo"
                width={500}
                height={500}
                className="object-contain transition-all duration-300"
              />
            </div>
          </div>
        </div>
        
        <nav className="py-2">
          <ul className="flex justify-center space-x-6 text-[#4A4A4A]">
            <li><Link href="#about" className="hover:text-[#CBEBF2] transition-colors">About</Link></li>
            <li><Link href="#menu" className="hover:text-[#CBEBF2] transition-colors">Menu</Link></li>
            <li><Link href="#signature" className="hover:text-[#CBEBF2] transition-colors">Signature</Link></li>
            <li><Link href="#contact" className="hover:text-[#CBEBF2] transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}