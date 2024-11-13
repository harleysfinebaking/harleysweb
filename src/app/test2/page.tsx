'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Footer } from '@/components/Footer'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


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
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FEFEFA]/90 shadow-md' : ''}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#4A4A4A]">
            <Image src="/logo.png" alt="Harley&apos;s" width={80} height={80} className="w-20 h-auto" />
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#about" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">About</Link>
            <Link href="#menu" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">Menu</Link>
            <Link href="#contact" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">Contact</Link>
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FEFEFA] pt-20">
          <nav className="flex flex-col items-center space-y-6 p-4">
            <Link href="#about" className="text-xl text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#menu" className="text-xl text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="#contact" className="text-xl text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}

      <main>
        <section className="relative h-screen flex items-center justify-center">
        {/* <div className="absolute inset-0 bg-black opacity-0"></div> */}
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
            {/* <h1 className="text-5xl md:text-7xl font-light mb-4 text-white font-mulish">Indulge in Elegance</h1> */}
            {/* <p className="text-xl md:text-2xl mb-8 text-white font-mulish">Experience the refined "Kaffee und Kuchen" tradition at Harley&apos;s</p> */}
            {/* <Button className="bg-[#CBEBF2] text-[#4A4A4A] hover:bg-[#F5D1D8] text-lg px-8 py-3">Order Now</Button> */}
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
                <p className="text-lg mb-4">Harley&apos;s is more than just a bakery – it&apos;s a destination. We are pioneers in introducing authentic Medovik cakes to India, bringing the delightful tradition of "Kaffee und Kuchen" (Coffee and Cake) to the subcontinent.</p>
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