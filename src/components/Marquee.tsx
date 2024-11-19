'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import localFont from 'next/font/local'

const embassyFont = localFont({ 
  src: '../../public/fonts/Embassy.otf',
  display: 'swap'
})

interface MarqueeProps {
  texts: string[]
  showMarquee: boolean
}

export function Marquee({ texts, showMarquee }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [contentWidth, setContentWidth] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    if (containerRef.current) {
      setContentWidth(containerRef.current.scrollWidth / 2)
    }
  }, [texts])

  useEffect(() => {
    if (contentWidth > 0) {
      controls.start({
        x: [0, -contentWidth],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      })
    }
  }, [contentWidth, controls])

  const renderMarqueeItem = (text: string, index: number) => {
    if (text === "Fine Baking") {
      return (
        <span 
          key={index} 
          className={`${embassyFont.className} text-[#4A4A4A] text-2xl mx-8 inline-block`}
        >
          {text}
        </span>
      )
    }
    return (
      <span key={index} className="text-[#4A4A4A] text-sm mx-8 inline-block">
        {text}
      </span>
    )
  }

  return (
    <div 
      className={`transition-all duration-300 ease-in-out ${
        showMarquee ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-[#F5D1D8]`}
    >
      <div className="py-1 overflow-hidden">
        <motion.div
          ref={containerRef}
          className="inline-flex whitespace-nowrap items-center h-6"
          animate={controls}
          initial={{ x: 0 }}
        >
          {[...texts, "Fine Baking", ...texts, "Fine Baking"].map((text, index) => (
            <React.Fragment key={index}>
              {renderMarqueeItem(text, index)}
              <span className="text-[#4A4A4A] opacity-40 text-sm mx-4">|</span>
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  )
}