'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function LogoAnimation() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[400px] bg-white p-4">
      {/* Crown */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-16 h-8 mb-2"
      >
        <Image
          src="/photos/layers/crown.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </motion.div>

      {/* 1983 with ribbons */}
      <div className="flex items-center justify-center mb-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative w-12 h-8"
        >
          <Image
            src="/photos/layers/left-ribbon.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
        
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mx-3 text-lg font-serif"
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
            alt=""
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
        className="relative w-48 h-8 mb-2"
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
        className="relative w-32 h-[2px] mb-2"
      >
        <Image
          src="/photos/layers/line.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </motion.div>

      {/* Fine Baking */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.4 }}
        className="relative w-32 h-8"
      >
        <Image
          src="/photos/layers/finebaking.png"
          alt="Fine Baking"
          layout="fill"
          objectFit="contain"
        />
      </motion.div>
    </div>
  )
}