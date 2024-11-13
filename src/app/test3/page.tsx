'use client'

import React from 'react'
import Image from 'next/image'
import { Header1 } from '@/components/Header1'
import { Footer } from '@/components/Footer'
// import { Marquee } from '@/components/Marquee'

export default function Home() {
  const menuItems = [
    { name: 'Medovik Cakes', image: '/photos/danishmedovik.jpg' },
    { name: 'Gourmet Cheesecakes', image: '/photos/macaroons.jpg' },
    { name: 'Butter Cookies', image: '/photos/cookies.jpg' },
    { name: 'Croissants', image: '/photos/croissant.jpg' },
    { name: 'Focaccia Sandwiches', image: '/photos/belgianmedovik.jpg' },
    { name: 'Macarons', image: '/photos/macaroons1.jpg' },
  ]

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-inter">
        
      <Header1 />

      <main>
        <section className="relative h-screen flex items-center justify-center">
          <Image 
            src="/photos/DSC00553.jpg" 
            alt="Harley&apos;s Patisserie" 
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 opacity-40"></div>
          <div className="relative z-10 text-center px-4">
            {/* Hero content can be added here if needed */}
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#4A4A4A]">About Harley&apos;s</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="/photos/3.jpg" alt="Harley&apos;s Interior" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg mb-4">Harley&apos;s is more than just a bakery – it's a destination. We are pioneers in introducing authentic Medovik cakes to India, bringing the delightful tradition of "Kaffee und Kuchen" (Coffee and Cake) to the subcontinent.</p>
                <p className="text-lg">Our signature Medovik has become a nationwide favorite, with monthly sales exceeding 10,000 kilograms. Join us in reliving the tradition of coffee drinking, where friends and family gather to enjoy coffee, cake, and conversation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-24 bg-gradient-to-b from-[#f5d1d8] to-[#F5D1D8]/10">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light mb-12 text-center font-mulish">Our Delightful Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={400} 
                    height={300} 
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-xl font-semibold text-[#d45770] font-mulish text-center transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">{item.name}</h3>
                  </div>
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