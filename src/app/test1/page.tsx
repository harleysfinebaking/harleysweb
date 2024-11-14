'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function BrickWall() {
  return (
    <div className="absolute inset-0 z-0 bg-[#E6E6E2] overflow-hidden">
      <div className="w-full h-full flex flex-col">
        {[...Array(10)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex-1 flex relative">
            {[...Array(rowIndex % 2 === 0 ? 32 : 33)].map((_, colIndex) => (
              <div
                key={colIndex}
                className={`flex-1 bg-[#FEFEFA] border-r border-[#E6E6E2] ${
                  rowIndex % 2 === 0 ? '' : colIndex === 0 ? 'ml-[-1.5625%]' : ''
                }`}
              ></div>
            ))}
            <div className="absolute inset-0 border-t border-b border-[#E6E6E2]"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HarleysPatisserie() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-serif">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#FEFEFA] shadow-md' : ''}`}>
        <BrickWall />
        <div className="relative z-10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#4A4A4A]">Harley&apos;s</Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="#about" className="text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors">About</Link>
              <Link href="#menu" className="text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors">Menu</Link>
              <Link href="#signature" className="text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors">Signature</Link>
              <Link href="#contact" className="text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors">Contact</Link>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FEFEFA] pt-20">
          <nav className="flex flex-col items-center space-y-6 p-4">
            <Link href="#about" className="text-xl text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link href="#menu" className="text-xl text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors" onClick={() => setIsMenuOpen(false)}>Menu</Link>
            <Link href="#signature" className="text-xl text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors" onClick={() => setIsMenuOpen(false)}>Signature</Link>
            <Link href="#contact" className="text-xl text-[#4A4A4A] hover:text-[#CBEBF2] transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}

      <main className="pt-20">
        <section className="bg-[url('/photos/DSC00574.jpg')] bg-cover bg-center h-[80vh] flex items-center">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 shadow-text">Indulge in Elegance</h1>
            <p className="text-xl md:text-2xl text-white mb-8 shadow-text">Experience the refined &quot;Kaffee und Kuchen&quot; tradition at Harley&apos;s</p>
            <Button className="bg-[#CBEBF2] text-[#4A4A4A] hover:bg-[#F5D1D8]">Order Now</Button>
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
                <p className="text-lg mb-4">Harley&apos;s is more than just a bakery – it's a destination. We are pioneers in introducing authentic Medovik cakes to India, bringing the delightful tradition of &quot;Kaffee und Kuchen&quot; (Coffee and Cake) to the subcontinent.</p>
                <p className="text-lg">Our signature Medovik has become a nationwide favorite, with monthly sales exceeding 10,000 kilograms. Join us in reliving the tradition of coffee drinking, where friends and family gather to enjoy coffee, cake, and conversation.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-20 bg-[#CBEBF2]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#4A4A4A]">Our Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Medovik Cakes', 'Gourmet Cheesecakes', 'French Pastries', 'Croissants', 'Focaccia Sandwiches', 'Macarons'].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-[#4A4A4A]">{item}</h3>
                  <p className="text-gray-600 mb-4">Indulge in our exquisite selection of {item.toLowerCase()}, crafted with the finest ingredients and utmost care.</p>
                  <Button variant="outline" className="text-[#4A4A4A] border-[#F5D1D8] hover:bg-[#F5D1D8]">View {item}</Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="signature" className="py-20 bg-[#F5D1D8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-[#4A4A4A]">Our Signature Medovik</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image src="/photos/DanishHazelnutChocolateMedovik.jpg" alt="Signature Medovik Cake" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2 md:pl-8">
                <p className="text-lg mb-4">Our signature Medovik cake has captured the hearts of dessert lovers across India. With monthly sales exceeding 10,000 kilograms, it&apos;s clear that the delicate layers of honey cake and creamy filling have become a nationwide favorite.</p>
                <p className="text-lg mb-6">Experience the perfect balance of sweetness and texture that has made our Medovik an icon in the world of pastries.</p>
                <Button className="bg-[#CBEBF2] text-[#4A4A4A] hover:bg-[#FEFEFA]">Order Medovik</Button>
              </div>
            </div>
          </div>
        </section>

       
      </main>

      <footer className="bg-[#4A4A4A] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Harley&apos;s Fine Baking. All rights reserved.</p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#about" className="hover:text-[#CBEBF2] transition-colors">About</Link>
              <Link href="#menu" className="hover:text-[#CBEBF2] transition-colors">Menu</Link>
              <Link href="#signature" className="hover:text-[#CBEBF2] transition-colors">Signature</Link>
              <Link href="#contact" className="hover:text-[#CBEBF2] transition-colors">Contact</Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}