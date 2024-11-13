import React from 'react'
import { Coffee, Cake } from 'lucide-react'

export function PairingsSection() {
  const pairings = [
    { icon: Coffee, text: 'Espresso' },
    { icon: Cake, text: 'Medovik' },
    { icon: Coffee, text: 'Cappuccino' },
    { icon: Cake, text: 'Cheesecake' },
  ]

  return (
    <section className="py-16 bg-[#FEFEFA]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#4A4A4A]">Perfect Pairings</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {pairings.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <item.icon className="h-16 w-16 text-[#4A4A4A] mb-4" />
              <span className="text-lg font-semibold text-[#4A4A4A]">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}