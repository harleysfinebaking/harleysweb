'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const SkeletonLoader = () => (
  <div className="bg-gray-200 rounded-lg animate-pulse aspect-square"></div>
)

const ImageWithSkeleton = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg aspect-square">
      {isLoading && <SkeletonLoader />}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className={`object-cover transition-transform duration-300 hover:scale-110 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

export default function FoundationPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4f8] to-[#FEFEFA] font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />

      <motion.main 
        className="pt-40 md:pt-40 px-4 md:px-8 lg:px-24 xl:px-48 py-12 md:py-24"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.section className="py-8 md:py-20" variants={fadeInUp}>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-24">
              {/* Left Column - Text Content */}
              <motion.div className="w-full lg:w-1/2 space-y-4" variants={stagger}>
                <motion.div className="space-y-4" variants={fadeInUp}>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-black">
                    Gifting Happy Memories
                  </h2>
                  <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black">
                    HARLEY'S FOUNDATION
                  </h1>
                  <div className="text-xl md:text-2xl lg:text-3xl font-light text-black mt-4 md:mt-8">
                    It's all about the <span className="font-normal">Celebrations</span> of<br className="hidden md:inline" />
                    the <span className="font-normal">Uncelebrated!</span>
                  </div>
                </motion.div>
                
                <motion.p 
                  className="text-base md:text-lg text-black font-light leading-relaxed mt-4 md:mt-8 max-w-2xl"
                  variants={fadeInUp}
                >
                  At Harley's, we see ourselves as the third parent for every
                  underprivileged child. To us, being there for these children
                  is a commitment we hold dear, ensuring they experience
                  the joy and warmth of memorable childhood birthday
                  celebrations. In this way, we contribute to a crucial part of
                  their childhood memories, making us an integral part of
                  their lives.
                </motion.p>
              </motion.div>

              {/* Right Column - Image Grid */}
              <motion.div className="w-full lg:w-1/2 mt-8 lg:mt-0" variants={stagger}>
                <div className="grid grid-cols-2 gap-2 md:gap-4">
                  {[ 2, 3, 4].map((num) => (
                    <motion.div key={num} variants={fadeInUp}>
                      <ImageWithSkeleton
                        src={`/photos/foundation/${num}.png`}
                        alt={`Foundation Image ${num}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  )
}