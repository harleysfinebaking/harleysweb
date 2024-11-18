'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header3 } from "@/components/Header3"
import { Footer } from "@/components/Footer"

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
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4f8] to-[#FEFEFA] font-['Trebuchet_MS',_sans-serif] ">
      <Header3 isScrolled={isScrolled} />

      <main className="pt-40 px-48 py-24">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-24">
              {/* Left Column - Text Content */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-light text-black">
                    Gifting Happy Memories
                  </h2>
                  <h1 className="text-4xl md:text-6xl font-bold text-black">
                    HARLEY'S FOUNDATION
                  </h1>
                  <div className="text-2xl md:text-3xl font-light text-black mt-8">
                    It's all about the <span className="font-normal">Celebrations</span> of<br />
                    the <span className="font-normal">Uncelebrated!</span>
                  </div>
                </div>
                
                <p className="text-lg text-black font-light leading-relaxed mt-8 max-w-2xl">
                  At Harley's, we see ourselves as the third parent for every
                  underprivileged child. To us, being there for these children
                  is a commitment we hold dear, ensuring they experience
                  the joy and warmth of memorable childhood birthday
                  celebrations. In this way, we contribute to a crucial part of
                  their childhood memories, making us an integral part of
                  their lives.
                </p>
              </div>

              {/* Right Column - Image Grid */}
              <div className="w-full lg:w-1/2 mt-8 lg:mt-0 ">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((num) => (
                    <div key={num} className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
                      <Image
                        src={`/photos/foundation/${num}.png`}
                        alt={`Foundation Image ${num}`}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                        className="object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}