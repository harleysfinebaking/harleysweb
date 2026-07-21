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
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-end justify-center">
          <div className="absolute inset-0 bg-[#CBEBF2]"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-black-800 opacity-100">
              Let's Create Something Special
            </h1>
            <p className="text-lg md:text-xl text-black-100">
              Connect with us for customised cakes, bulk orders, or special events
            </p>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-12 bg-pink-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl text-pink-400 mb-3">🎂</div>
                <h3 className="text-xl font-semibold text-black-800 mb-2">Customised Cakes</h3>
                <p className="text-gray-700">Design your dream cake for any occasion</p>
              </div>
              <div>
                <div className="text-4xl text-pink-400 mb-3">📦</div>
                <h3 className="text-xl font-semibold text-black-800 mb-2">Bulk Orders</h3>
                <p className="text-gray-700">Perfect for corporate gifts and events</p>
              </div>
              <div>
                <div className="text-4xl text-pink-400 mb-3">🎉</div>
                <h3 className="text-xl font-semibold text-black-800 mb-2">Special Events</h3>
                <p className="text-gray-700">Let us know about your special requirements</p>
              </div>
            </div>
          </div>
        </section>

        {/* Inquiry Form */}
        <BusinessInquiry />

        {/* Contact Info Section */}
        <section className="py-16 bg-pink-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light text-center text-black-800 opacity-60 mb-12">
              Other Ways to Reach Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-black-800 mb-3">Email</h3>
                {/*<p className="text-gray-700 mb-2">
                  <strong>Business Head:</strong> businesshead@harleys.com
                </p>*/}
                <p className="text-gray-700">
                  <strong>General:</strong> care@harleys.com
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-black-800 mb-3">Phone</h3>
                <p className="text-gray-700">
                  <strong>Call us:</strong> 07965190483
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
