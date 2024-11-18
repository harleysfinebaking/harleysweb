'use client'

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LoadingPage from '@/components/LoadingPage'

export default function App() {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home')
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return <LoadingPage />
}