import React from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
// import { HeroSection } from '@/components/Hero'
import { AboutSection } from '@/components/About'
import { MenuSection } from '@/components/Menu'
import { SignatureSection } from '@/components/Signature'
import { PairingsSection } from '@/components/Pairings'
// import { ContactSection } from '@/components/Contact'

export default function HarleysPatisserie() {
  return (
    <div className="bg-[#FEFEFA] min-h-screen font-serif">
      <Header />
      <main className="pt-[180px] font-mulish font-extralight"> {/* Adjust based on your header height */}
        {/* <HeroSection /> */}
        <AboutSection />
        <MenuSection />
        <SignatureSection />
        <PairingsSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  )
}