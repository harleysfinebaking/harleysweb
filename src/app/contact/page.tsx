'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Button } from "@/components/ui/button"

export default function Contact() {
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
        <section className="relative h-[50vh] flex items-center justify-center">
          <Image 
            src="/photos/contact.jpg" 
            alt="Contact Harley's Patisserie" 
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Contact Us</h1>
            {/* <p className="text-xl md:text-2xl mb-8 text-white font-imperial bg-[#CBEBF2]/20 p-8 rounded-lg">We'd Love to Hear from You</p> */}
          </div>
        </section>

        <section className="py-20 bg-[#f5d1d8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center text-pink-800 opacity-60">Visit Us</h2>
            <div className="mb-12">
              <div className="w-full h-96 bg-[#CBEBF2] rounded-lg overflow-hidden">
                {/* Replace with actual Google Maps embed */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7401758335!2d78.37766021441547!3d17.42833870619444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93df5b7f8f8f%3A0x3f3f3f3f3f3f3f3f!2sHarley&#39;s%20Corporate!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                //   allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#FEFEFA] p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-pink-800">Address</h3>
                <p className="text-pink-900 font-light">
                  Harley's Corporate, Survey No:55/E,<br />
                  Nanakramguda Rd, Hyderabad,<br />
                  Telangana 500032.
                </p>
              </div>
              <div className="bg-[#FEFEFA] p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-4 text-pink-800">Contact</h3>
                <p className="text-pink-900 font-light">
                  Email: care@harleys.com<br />
                  Phone: +91 98480 66661
                </p>
              </div>
            </div> */}
          </div>
        </section>

        {/* <section className="py-20 bg-[#FEFEFA]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center text-pink-800 opacity-60">Get in Touch</h2>
            <form className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-pink-800 mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-pink-800 mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-pink-800 mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500" required></textarea>
              </div>
              <Button type="submit" className="w-full bg-[#f5d1d8] hover:bg-[#CBEBF2] text-pink-950 px-8 py-3 rounded-sm text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}