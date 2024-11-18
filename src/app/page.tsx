'use client'

import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import LoadingPage from '@/components/LoadingPage'
import Home from '@/components/Home'  // Assuming this is your main content component

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)  // Adjust this value to control how long the loading page is shown

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingPage key="loading" />
      ) : (
        <Home key="main" />
      )}
    </AnimatePresence>
  )
}