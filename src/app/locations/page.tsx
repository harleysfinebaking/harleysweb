'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header7 } from '@/components/Header7'
import { Footer } from '@/components/Footer'
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from 'lucide-react'

interface Location {
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
}

const LocationCard: React.FC<Location> = ({ name, address, phone, hours, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="h-48 relative">
      <Image 
        src={image} 
        alt={name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-pink-800 mb-4">{name}</h3>
      <div className="flex items-start mb-2">
        <MapPin className="w-5 h-5 text-pink-800 mr-2 mt-1" />
        <p className="text-pink-900">{address}</p>
      </div>
      <div className="flex items-center mb-2">
        <Phone className="w-5 h-5 text-pink-800 mr-2" />
        <p className="text-pink-900">{phone}</p>
      </div>
      <div className="flex items-start mb-4">
        <Clock className="w-5 h-5 text-pink-800 mr-2 mt-1" />
        <p className="text-pink-900">{hours}</p>
      </div>
      <Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name + ' ' + address)}`} target="_blank" rel="noopener noreferrer">
        <Button className="w-full bg-[#f5d1d8] hover:bg-[#CBEBF2] text-pink-800 px-6 py-2 rounded-sm">
          Get Directions
        </Button>
      </Link>
    </div>
  </div>
)

export default function Locations() {
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

  const featuredLocations: Location[] = [
    {
      name: "Hyderabad",
      address: "Nanakramguda Rd, Hyderabad, Telangana 500032, India",
      phone: "+91 80830 98888",
      hours: "Mon-Sun: 9:00 AM - 10:00 PM",
      image: "/photos/locations.jpg"
    },
    {
      name: "Bengaluru",
      address: "Road No. 12, Banjara Hills, Hyderabad, Telangana 500034, India",
      phone: "+91 80830 98888",
      hours: "Mon-Sun: 8:00 AM - 11:00 PM",
      image: "/photos/locations.jpg"
    },
    {
      name: "Mumbai",
      address: "80 Feet Road, Koramangala, Bengaluru, Karnataka 560034, India",
      phone: "+91 80830 98888",
      hours: "Mon-Sun: 7:00 AM - 12:00 AM",
      image: "/photos/locations.jpg"
    },
  ]

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-['Trebuchet_MS',_sans-serif]">
      <Header7 isScrolled={isScrolled} />

      <main>
        <section className="relative h-[50vh] flex items-center justify-center">
          <Image 
            src="/photos/locations.jpg" 
            alt="Harley's Patisserie Locations" 
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Our Locations</h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-imperial bg-[#CBEBF2]/20 p-8 rounded-lg">
              Indulge in Luxury at 50 Locations Across India
            </p>
          </div>
        </section>

        <section className="py-24 bg-gradient-to-b from-[#f5d1d8] to-[#CBEBF2]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-light mb-12 text-center text-pink-800 opacity-60">Featured Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredLocations.map((location, index) => (
                <LocationCard key={index} {...location} />
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-xl text-pink-900 mb-8">
                Discover Harley's Patisserie in major cities across India, including Hyderabad, Bengaluru, Mumbai, Delhi, and many more!
              </p>
              <Button className="bg-[#f5d1d8] hover:bg-[#CBEBF2] text-pink-800 px-8 py-3 rounded-sm text-lg">
                Find a Location Near You
              </Button>
            </div>
          </div>
        </section>

        <section className="py-24 bg-[#FEFEFA]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-light mb-8 text-pink-800 opacity-60">Coming to Your City Soon</h2>
            <p className="text-xl text-pink-900 mb-8">We're expanding! Look out for new Harley's Patisserie locations in:</p>
            <ul className="text-lg text-pink-900 mb-12 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <li>Pune</li>
              <li>Ahmedabad</li>
              <li>Chennai</li>
              <li>Kolkata</li>
              <li>Jaipur</li>
              <li>Chandigarh</li>
            </ul>
          
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}