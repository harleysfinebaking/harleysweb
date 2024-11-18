'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header3 } from "@/components/Header3"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"

export default function FoundationPage() {
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
      <Header3 isScrolled={isScrolled} />

      <main className="pt-40 bg-[#CBEBF2]">
        <section className="py-20 bg-[#CBEBF2]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl md:text-5xl font-light mb-4 text-[#221F1F]">HARLEY'S FOUNDATION</h1>
              <p className="text-xl md:text-2xl mb-8 text-[#221F1F] font-thin">Gifting Happy Memories</p>
            
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-4">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="relative overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={`/photos/foundation/${num}.png`}
                      alt={`Foundation Image ${num}`}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                ))}
              </div>
              <div className="bg-[#f5d1d8] mt-16 p-8 rounded-lg shadow-lg max-w-3xl mb-4">
                <p className="text-lg text-[#221F1F] font-thin leading-relaxed">
                  At Harley's, we see ourselves as the third parent for every
                  underprivileged child. To us, being there for these children
                  is a commitment we hold dear, ensuring they experience
                  the joy and warmth of memorable childhood birthday
                  celebrations. In this way, we contribute to a crucial part of
                  their childhood memories, making us an integral part of
                  their lives.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}