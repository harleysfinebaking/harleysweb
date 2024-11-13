import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export function SignatureSection() {
  return (
    <section id="signature" className="py-16 bg-[#F5D1D8]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#4A4A4A]">Our Signature Medovik</h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/photos/DanishHazelnutChocolateMedovik.jpg" alt="Signature Medovik Cake" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">Our signature Medovik cake has captured the hearts of dessert lovers across India. With monthly sales exceeding 10,000 kilograms, it's clear that the delicate layers of honey cake and creamy filling have become a nationwide favorite.</p>
            <p className="text-lg mb-6">Experience the perfect balance of sweetness and texture that has made our Medovik an icon in the world of pastries.</p>
            <Button className="bg-[#CBEBF2] text-[#4A4A4A] hover:bg-[#FEFEFA]">Order Medovik</Button>
          </div>
        </div>
      </div>
    </section>
  )
}