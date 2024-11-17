import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function Locations() {
  const locations = [
    { name: "Hyderabad", image: "/photos/jubilee.jpeg" },
    { name: "Bengaluru", image: "/photos/jubilee.jpeg" },
    { name: "Mumbai", image: "/photos/jubilee.jpeg" },
  ]

  return (
    <section id="locations" className="py-16 bg-[#F5D1D8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#4A4A4A]">Our Locations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg shadow-lg">
                <Image 
                  src={location.image} 
                  alt={`${location.name} Location`} 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#4A4A4A]">{location.name}</h3>
              <Button className="bg-[#CBEBF2] text-[#4A4A4A] hover:bg-[#FEFEFA]">
                View Details
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}