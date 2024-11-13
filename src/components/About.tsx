import React from 'react'
import Image from 'next/image'

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-[#FEFEFA]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#4A4A4A]">About Harley's</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/photos/3.jpg" alt="Harley's Interior" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">Harley's is more than just a bakery – it's a destination. We are pioneers in introducing authentic Medovik cakes to India, bringing the delightful tradition of "Kaffee und Kuchen" (Coffee and Cake) to the subcontinent.</p>
            <p className="text-lg">Our signature Medovik has become a nationwide favorite, with monthly sales exceeding 10,000 kilograms. Join us in reliving the tradition of coffee drinking, where friends and family gather to enjoy coffee, cake, and conversation.</p>
          </div>
        </div>
      </div>
    </section>
  )
}