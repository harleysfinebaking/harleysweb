import React from 'react'
import { Button } from "@/components/ui/button"

export function MenuSection() {
  const menuItems = ['Medovik Cakes', 'Gourmet Cheesecakes', 'French Pastries', 'Croissants', 'Focaccia Sandwiches', 'Macarons']

  return (
    <section id="menu" className="py-16 bg-[#CBEBF2]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#4A4A4A]">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-[#4A4A4A]">{item}</h3>
              <p className="text-gray-600 mb-4">Indulge in our exquisite selection of {item.toLowerCase()}, crafted with the finest ingredients and utmost care.</p>
              <Button variant="outline" className="text-[#4A4A4A] border-[#F5D1D8] hover:bg-[#F5D1D8]">View {item}</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}