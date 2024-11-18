'use client'

import React, { useState, useEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import DecoratedTitle from '@/components/DecoratedTitle'

export default function ComingSoon() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-[#FEFEFA] font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />

      <main className="flex-grow flex items-center justify-center bg-[#CBEBF2]">
        <section className="w-full py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center mt-44">
              <DecoratedTitle title={'Coming Soon!'}/>
              {/* <h1 className="text-4xl md:text-3xl font-extralight mb-4 text-[#221F1F] mt-48">Coming Soon!</h1> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}