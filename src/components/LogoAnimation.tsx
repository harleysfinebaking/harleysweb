'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LogoAnimation() {
  // Variables to control curved text
  const curvedTextConfig = {
    fontSize: 32, // Font size in pixels
    letterSpacing: 1, // Letter spacing in pixels
    yPosition: 365, // Y position of the text (higher value = lower on the screen)
    curveHeight: 70, // Height of the curve (higher value = more pronounced curve)
    textWidth: 600, // Width of the text path
    curveDirection: -1, // 1 for curve up, -1 for curve down
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px] bg-[#CBEBF2] p-4">
      {/* Oval background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute w-[330px] h-[230px] bg-white/30 backdrop-blur-md rounded-[50%]"
      />

      {/* Crown */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-16 h-8 mb-2 z-10"
      >
        <Image
          src="/photos/layers/crown.png"
          alt="crown"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>

      {/* 1983 with ribbons */}
      <div className="flex items-center justify-center mb-2 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-12 h-8"
        >
          <Image
            src="/photos/layers/left-ribbon.png"
            alt="left ribbon"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
        
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-3 text-lg font-serif"
          style={{ fontFamily: "'Times New Roman', Times, serif" }}
        >
          1983
        </motion.span>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-12 h-8"
        >
          <Image
            src="/photos/layers/right-ribbon.png"
            alt="right ribbon"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </div>

      {/* Harley's */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="relative w-48 h-8 mb-2 z-10"
      >
        <Image
          src="/photos/layers/brandname.png"
          alt="HARLEY'S"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>

      {/* Line */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="relative w-32 h-[2px] mb-2 z-10"
      >
        <Image
          src="/photos/layers/line.png"
          alt="underline"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>

      {/* Fine Baking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative w-32 h-8 z-10 mb-8"
      >
        <Image
          src="/photos/layers/finebaking.png"
          alt="Fine Baking"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>

      {/* Curved text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        className="absolute w-full z-10"
        style={{ bottom: `${400 - curvedTextConfig.yPosition}px` }}
      >
        <svg viewBox={`0 0 ${curvedTextConfig.textWidth} 100`} className="w-full h-24">
          <path
            id="curve"
            d={`M0,${curvedTextConfig.curveHeight * curvedTextConfig.curveDirection} 
               Q${curvedTextConfig.textWidth / 2},${curvedTextConfig.curveHeight * curvedTextConfig.curveDirection * -1} 
               ${curvedTextConfig.textWidth},${curvedTextConfig.curveHeight * curvedTextConfig.curveDirection}`}
            fill="transparent"
          />
          <text className="text-[#221F1F] font-semibold" style={{ 
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: `${curvedTextConfig.fontSize}px`,
            letterSpacing: `${curvedTextConfig.letterSpacing}px`
          }}>
            <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle">
              ARTISAN CAKES & EXOTIC COFFEE
            </textPath>
          </text>
        </svg>
      </motion.div>
    </div>
  )
}