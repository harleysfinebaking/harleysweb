'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"

function Marquee({ text }: { text: string }) {
  return (
    <div className="bg-[#F5D1D8] overflow-hidden py-1">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-[#4A4A4A] text-sm font-mulish mx-4">{text}</span>
        <span className="text-[#4A4A4A] text-sm font-mulish mx-4">{text}</span>
      </div>
    </div>
  )
}

function OrderModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={handleOutsideClick}>
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Choose your delivery partner</h2>
        <div className="flex justify-around items-center">
          <a href="https://www.swiggy.com/city/hyderabad/harleys-fine-baking-hitech-city-nanakramguda-rest376101" target="_blank" rel="noopener noreferrer" className="w-32 h-32 flex items-center justify-center">
            <Image src="/photos/swiggy1.png" alt="Swiggy" width={110} height={140} className='rounded-md object-contain' />
          </a>
          <a href="https://www.zomato.com/hyderabad/harleys-fine-baking-3-gachibowli/order" target="_blank" rel="noopener noreferrer" className="w-32 h-32 flex items-center justify-center">
            <Image src="/photos/zomato1.png" alt="Zomato" width={90} height={90} className='rounded-md object-contain' />
          </a>
        </div>
        <Button onClick={onClose} className="mt-4 w-full">Close</Button>
      </div>
    </div>
  )
}

export function Header3({ isScrolled }: { isScrolled: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showMarquee, setShowMarquee] = useState(true)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

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
                className={isScrolled? "w-24 h-auto py-4" : "w-24 h-auto" }  
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
              <button onClick={() => setIsOrderModalOpen(true)} className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Order Now</button>
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
            <button onClick={() => { setIsOrderModalOpen(true); setIsMenuOpen(false); }} className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">Order Now</button>
            <Link href="#locations" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Locations</Link>
            <Link href="#foundation" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Foundation</Link>
            <Link href="#blog" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors" onClick={() => setIsMenuOpen(false)}>Blog</Link>
          </nav>
        </div>
      )}
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </header>
  )
}