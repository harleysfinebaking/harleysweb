import React from 'react'

interface MarqueeProps {
  text: string
}

export function Marquee({ text }: MarqueeProps) {
  return (
    <div className="bg-[#F5D1D8] overflow-hidden py-0">
      <div className="animate-marquee whitespace-nowrap">
        <span className="text-[#4A4A4A] text-xs font-mulish mx-4">{text}</span>
        <span className="text-[#4A4A4A] text-xs font-mulish mx-4">{text}</span>
      </div>
    </div>
  )
}