'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { BusinessInquiry } from '@/components/BusinessInquiry'

export default function BusinessInquiryPage() {
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
    <div className="min-h-screen bg-[#FEFEFA] font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />

      <main>
        {/* Top Decorative Banner with Bakery Items Background */}
        <section className="relative h-[500px] w-full overflow-hidden bg-[#2D2A26]">
          <Image 
            src="/photos/categories/assorted.jpg" // Update with your actual image path
            alt="Bakery background header items"
            fill
            className="object-cover object-center opacity-80"
            priority
          />
        </section>

        {/* Form and Info Container Layout */}
        <section className="max-w-7xl mx-auto px-6 py-12 md:py-16 -mt-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column Information Card */}
            <div className="lg:col-span-1 p-2">
              <div className="bg-[#CBEBF2] text-black p-8 rounded-3xl shadow-lg min-h-[300px] flex flex-col justify-center">
                <h2 className="text-2xl font-normal mb-8">
                  We're here to help you
                </h2>
                <p className="text-sm leading-relaxed mb-8 opacity-90">
                  Kindly provide us with as much details as possible for easy understanding.
                </p>
                <div className="mt-auto text-sm opacity-90">
                  <p className="mb-2">Fill up the form below and for further queries contact us at -</p>
                  <p>Email - <a href="mailto:care@harleys.com" className="underline hover:text-pink-800 transition-colors">care@harleys.com</a></p>
                  <p>Phone - <a href="tel:07965190483" className="underline hover:text-pink-800 transition-colors">07965190483</a></p>
                </div>
              </div>
            </div>

            {/* Right Column Form Component */}
            <div className="lg:col-span-2">
              <BusinessInquiry />
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
