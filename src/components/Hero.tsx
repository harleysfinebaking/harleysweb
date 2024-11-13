import React from 'react'
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="py-20 bg-[url('/photos/DSC00574.jpg?height=600&width=1200')] bg-cover bg-center font-mulish">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-light mb-4 text-white shadow-text ">Indulge in Elegance</h2>
        <p className="text-xl mb-8 text-white shadow-text">Experience the refined "Kaffee und Kuchen" tradition at Harley's</p>
        <Button className="bg-[#CBEBF2] text-[#4A4A4A] hover:bg-[#F5D1D8]">Order Now</Button>
      </div>
    </section>
  )
}