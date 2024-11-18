'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { OrderModal } from './OrderModal'
import { motion, AnimatePresence } from 'framer-motion'

function Marquee({ texts }: { texts: string[] }) {
  return (
    <div className="bg-[#F5D1D8] overflow-hidden py-1">
      <div className="animate-marquee whitespace-nowrap">
        {texts.map((text, index) => (
          <React.Fragment key={index}>
            <span className="text-[#4A4A4A] text-sm mx-4 inline-block">
              {text}
            </span>
            {index < texts.length - 1 && <span className="text-[#4A4A4A] opacity-40 text-sm">|</span>}
          </React.Fragment>
        ))}
        {texts.map((text, index) => (
          <React.Fragment key={index + texts.length}>
            <span className="text-[#4A4A4A] text-sm mx-4 inline-block">
              {text}
            </span>
            {index < texts.length - 1 && <span className="text-[#4A4A4A] opacity-40 text-sm">|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export function Header({ isScrolled }: { isScrolled: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showMarquee, setShowMarquee] = useState(true)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isScrolled) {
      setShowMarquee(false)
    } else {
      setShowMarquee(true)
    }
  }, [isScrolled])

  const scrollToSection = (sectionId: string) => {
    router.push('/home')
    setTimeout(() => {
      const section = document.getElementById(sectionId)
      if (section) {
        const yOffset = -80
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    }, 100)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div 
        className={`transition-all duration-300 ease-in-out ${
          showMarquee ? 'max-h-8 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <Marquee texts={[
          "Guinness World Record Attempt: Largest Medovik Cake on 6th December 2024 at Maaya Luxury Convention, Hyderabad.",
          "Grand Opening: Harley's Ivory Lounge in Kala Ghoda, Mumbai on 24th November 2024.",
          "New Outlet: Second Ivory Lounge in Basavanagudi, Bangalore opened on 9th November 2024.",
          "Harley's – Celebrate Every Moment!"
        ]} />
      </div>
      <div className={`transition-all duration-300 ${isScrolled ? 'bg-[#CBEBF2]/30 backdrop-blur-xl' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-2 md:py-4">
          <div className="flex justify-between items-center md:hidden">
            <Link href="/home" className="text-2xl font-bold text-[#4A4A4A]">
              <Image 
                src={isScrolled ? "/textlogo/smalllogo.png" : "/logo.png"} 
                alt="Harley's" 
                width={isScrolled ? 100 : 200} 
                height={isScrolled ? 50 : 200} 
                className={isScrolled? "w-24 h-auto py-4" : "w-24 h-auto" }  
              />
            </Link>
            <Button 
              className="md:hidden z-50 w-12 h-12 bg-pink-100/10 hover:bg-blue-100/30 flex items-center justify-center" 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.2 }}
                className="w-8 h-8 flex items-center justify-center"
              >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </motion.div>
            </Button>
          </div>
          <nav className="hidden md:flex justify-between items-center">
            <div className="flex space-x-6 items-center">
              <button onClick={() => scrollToSection('about')} className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>About</button>
              <button onClick={() => scrollToSection('menu')} className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Menu</button>
              <button onClick={() => setIsOrderModalOpen(true)} className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Order Now</button>
            </div>
            <div className="relative flex items-center justify-center">
              {!isScrolled && (
                <div 
                  className="absolute bg-[#CBEBF2]/30 backdrop-blur-md rounded-[50%] w-[200px] h-[130px] shadow-lg" 
                  style={{ borderRadius: '50% / 50%' }}
                ></div>
              )}
              <div className="relative z-10">
              <Link href="/home" className="text-2xl font-bold text-[#4A4A4A]">
                <Image 
                  src={isScrolled ? "/textlogo/smalllogo.png" : "/logo.png"}
                  alt="Harley's" 
                  width={isScrolled ? 100 : 120}
                  height={isScrolled ? 50 : 120}
                  className="w-auto h-auto"
                />
                </Link>
              </div>
            </div>
            <div className="flex space-x-6 items-center">
              <button onClick={() => scrollToSection('locations')} className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Locations</button>
              <Link href="/foundation" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Foundation</Link>
              <Link href="/coming-soon" className={`hover:text-[#d45770] transition-colors text-lg ${isScrolled ? 'text-[#4A4A4A]' : 'text-black'}`}>Blog</Link>
            </div>
          </nav>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="md:hidden fixed top-0 right-0 w-1/2 h-full bg-white/30 backdrop-blur-md"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          >
            <nav className="flex flex-col items-end space-y-8 py-20 px-8 h-full mt-20">
              <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="text-[#4A4A4A] hover:text-[#d45770] transition-colors text-2xl">About</button>
              <button onClick={() => { scrollToSection('menu'); setIsMenuOpen(false); }} className="text-[#4A4A4A] hover:text-[#d45770] transition-colors text-2xl">Menu</button>
              <button onClick={() => { scrollToSection('locations'); setIsMenuOpen(false); }} className="text-[#4A4A4A] hover:text-[#d45770] transition-colors text-2xl">Locations</button>
              <Link href="/foundation" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors text-2xl" onClick={() => setIsMenuOpen(false)}>Foundation</Link>
              <Link href="/coming-soon" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors text-2xl" onClick={() => setIsMenuOpen(false)}>Blog</Link>
              <button onClick={() => { setIsOrderModalOpen(true); setIsMenuOpen(false); }} className="text-[#4A4A4A] hover:text-[#d45770] transition-colors text-2xl">Order Now</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
    </header>
  )
}