'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface DecoratedTitleProps {
  title: string
  className?: string
}

export default function DecoratedTitle({ title, className = '' }: DecoratedTitleProps) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className={`flex flex-col items-center justify-center mb-4 ${className}`}>
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
          animate={inView ? { opacity: 1, clipPath: 'inset(0 0% 0 0)' } : {}}
          transition={{ duration: 0.8 }}
          className="w-12 h-8 relative mr-4"
        >
          <Image
            src="/photos/ribbon/left-ribbon.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
        <h2 className="text-3xl text-center text-[#221F1F]">{title}</h2>
        <motion.div
          initial={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
          animate={inView ? { opacity: 1, clipPath: 'inset(0 0 0 0%)' } : {}}
          transition={{ duration: 0.8 }}
          className="w-12 h-8 relative ml-4"
        >
          <Image
            src="/photos/ribbon/right-ribbon.png"
            alt=""
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={inView ? { opacity: 1, scaleX: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-24 h-[1px] mt-2 bg-[#221F1F] opacity-70"
      />
    </div>
  )
}