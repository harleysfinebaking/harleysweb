'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header3 } from '@/components/Header3'
import { Footer } from '@/components/Footer'
import { Button } from "@/components/ui/button"

export default function Home4() {
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

  const menuItems = [
    { name: 'Medovik Cakes', image: '/photos/danishmedovik.jpg' },
    { name: 'Macarons', image: '/photos/macaroons.jpg' },
    { name: 'Butter Cookies', image: '/photos/cookies.jpg' },
    { name: 'Assorted Bakes', image: '/photos/assorted.jpg' },
    { name: 'Cheesecakes', image: '/photos/cheesecakes.jpg' },
    { name: 'Macarons', image: '/photos/macaroons1.jpg' },
  ]

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-inter">
      <Header3 isScrolled={isScrolled} />

      <main>
      <section className="relative h-screen flex items-center justify-center">
          <Image 
            src="/photos/DSC06994.jpg" 
            alt="Harley's Patisserie" 
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          <div className={`relative z-10 text-center px-4 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100'}`}>
            {/* <div className="relative inline-block mb-8">
              <div 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black rounded-[50%] w-[370px] h-[260px] shadow-lg" 
                style={{ borderRadius: '50% / 50%' }}
              ></div>
              <div className="relative z-10">
                <Image 
                  src="/logocircle/logosnew/logonew-white-tran1.png" 
                  alt="Harley's" 
                  width={380}
                  height={220}
                  className="w-auto h-auto"
                />
              </div>
            </div> */}
            {/* <h1 className="text-5xl md:text-7xl font-light mb-4 text-white font-mulish">Indulge in Elegance</h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-mulish">Experience the refined "Kaffee und Kuchen" tradition at Harley's</p>
            <Button className="bg-[#CBEBF2] text-[#4A4A4A] hover:bg-[#F5D1D8] text-lg px-8 py-3">Order Now</Button> */}
          </div>
        </section>


        <section id="about" className="py-20 bg-[#f5d1d8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-8 text-center font-mulish  text-pink-950">Who We Are</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 ml-24 mb-8 md:mb-0">
                <Image src="/photos/bgremoved/macarons-removebg-preview.png" alt="Harley's Interior" width={400} height={300} className="" />
              </div>
              <div className="md:w-1/2 md:pl-8 mr-24">
                <p className="text-lg mb-4 text-center text-pink-900 font-mulish font-light">Harley's is more than just a bakery – it's a destination. We are pioneers in introducing authentic Medovik cakes to India, bringing the delightful tradition of "Kaffee und Kuchen" (Coffee and Cake) to the subcontinent.</p>
                <p className="text-lg text-center text-pink-900 font-mulish font-light">Our signature Medovik has become a nationwide favorite, with monthly sales exceeding 10,000 kilograms. Join us in reliving the tradition of coffee drinking, where friends and family gather to enjoy coffee, cake, and conversation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-24 bg-gradient-to-b from-[#f5d1d8] to-[#CBEBF2]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-thin mb-12 text-pink-950  text-center font-mulish">Our Delightful Menu</h2>
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