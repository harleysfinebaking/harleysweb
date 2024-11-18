'use client'

import React from 'react'
import LogoAnimation from './LogoAnimation'
import { motion } from 'framer-motion'

export default function LoadingPage() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#CBEBF2]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LogoAnimation />
    </motion.div>
  )
}