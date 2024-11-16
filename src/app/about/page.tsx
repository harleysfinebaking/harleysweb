'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header7 } from '@/components/Header7'
import { Footer } from '@/components/Footer'
import { Button } from "@/components/ui/button"

export default function About() {
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
      <Header7 isScrolled={isScrolled} />

      <main>
        <section className="relative h-[50vh] flex items-center justify-center">
          <Image 
            src="/photos/interior2.jpg" 
            alt="About Harley's Patisserie" 
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Welcome to Harley's!</h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-imperial bg-[#CBEBF2]/20 p-8 rounded-lg">Indulge in Luxury, Relish the Moment</p>
          </div>
        </section>

        <section className="py-20 bg-[#f5d1d8]">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xl mb-8 text-pink-900 font-light leading-relaxed">
                India's ultimate luxury in cakes, coffee, and confections. Known for world-class flavors, Victorian elegance, and award-winning quality, Harley's is where indulgence meets innovation. Proudly crafted in India, poised to captivate the world.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FEFEFA]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center text-pink-800 opacity-60">Vision and Mission</h2>
            <div className="bg-[#CBEBF2] p-8 rounded-lg text-center">
              <p className="text-lg text-pink-900 font-light leading-relaxed">
                Our vision is to become the world's most beloved luxury dessert brand. Our mission is to create moments of joy through our exquisite creations, blending tradition with innovation in every bite and sip.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f5d1d8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center text-pink-800 opacity-60">Growth Trajectory</h2>
            <div className="text-center">
              <p className="text-lg text-pink-900 font-light leading-relaxed">
                From our humble beginnings in 2021, Harley's has rapidly grown to become India's largest producer of Medovik cakes. Our commitment to quality and innovation has driven our expansion across multiple cities, with plans for international growth on the horizon.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#FEFEFA]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center text-pink-800 opacity-60">What Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#CBEBF2] p-6 rounded-lg">
                <p className="text-pink-900 italic mb-4">
                  "Harley's desserts are simply divine! The Medovik cake is a slice of heaven."
                </p>
                <p className="text-pink-800 font-semibold">- Priya S., Mumbai</p>
              </div>
              <div className="bg-[#CBEBF2] p-6 rounded-lg">
                <p className="text-pink-900 italic mb-4">
                  "The coffee and cake pairing at Harley's is an experience like no other. Absolutely delightful!"
                </p>
                <p className="text-pink-800 font-semibold">- Rahul M., Bangalore</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#f5d1d8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center text-pink-800 opacity-60">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Artisan Desserts', 'Exotic Coffee', 'Gifting Specials', 'Bakery & Confectionery', 'Customized Cakes', 'Catering Services'].map((item, index) => (
                <div key={index} className="bg-[#FEFEFA] p-6 rounded-lg text-center">
                  <h3 className="text-xl font-medium mb-2 text-pink-800">{item}</h3>
                  <p className="text-pink-900 font-light">Discover our range of {item.toLowerCase()}.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}