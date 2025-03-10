'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
// import { Button } from "@/components/ui/button"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { OrderModal } from './OrderModal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselItems = [
  
  {
    video: "https://firebasestorage.googleapis.com/v0/b/homefront-479e7.appspot.com/o/video3.mp4?alt=media&token=fe4bb5cb-2511-4e8a-954c-f21b83ce8dfe",
    image: "/photos/hero1.jpg", // Fallback image for video
    title: "Indulge in Elegance",
    subtitle: "Experience the refined \"Kaffee und Kuchen\" tradition at Harley's"
  },
  {
    image:"https://firebasestorage.googleapis.com/v0/b/homefront-479e7.appspot.com/o/harleys%2FGWR%20Photo.jpg?alt=media&token=e741066b-57ef-4293-bfd9-025c8a67c6d0",
    
    title: "Guinness World Record",
    subtitle: "Harley's broke the guinness world record for the largest Medovik cake"
  },

  
  {
    image: "/photos/hero2.jpg",
    title: "Artisanal Delights",
    subtitle: "Discover our handcrafted pastries and cakes"
  },
  {
    image: "/photos/hero3.jpg",
    title: "A Taste of Tradition",
    subtitle: "Savor the flavors of authentic European baking"
  }
]

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const sliderRef = useRef<Slider>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        sliderRef.current?.slickPrev()
      } else if (e.key === 'ArrowRight') {
        sliderRef.current?.slickNext()
      }
    }
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    window.addEventListener('keydown', handleKeyDown)
    handleResize() // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const handleVideoCanPlay = () => {
    setIsVideoLoaded(true)
    if (videoRef.current) {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next)
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
      setIsVideoLoaded(false)
      setIsVideoPlaying(false)
    },
    afterChange: (current: number) => {
      if (current === 1 && videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error('Error playing video:', error)
        })
        setIsVideoPlaying(true)
      } else {
        setIsVideoPlaying(false)
      }
    },
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute bottom-4 left-0 right-0 flex justify-center md:justify-end md:bottom-10 md:right-10">
        <ul className="m-0 p-0"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 mx-1 rounded-full border-2 border-white transition-all duration-300 ease-in-out ${
          activeSlide === i ? 'bg-white' : 'bg-transparent'
        }`}
      />
    ),
    dotsClass: "slick-dots slick-thumb custom-dot",
  }

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (videoRef.current) {
          videoRef.current.pause()
        }
      } else {
        if (activeSlide === 1 && videoRef.current) {
          videoRef.current.play().catch(error => {
            console.error('Error playing video:', error)
          })
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [activeSlide])

  useEffect(() => {
    if (activeSlide === 1 && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Error playing video:', error)
      })
    }
  }, [activeSlide])

  return (
    <section className="relative h-screen overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
  {carouselItems.map((item, index) => (
    <div key={index} className="relative h-screen flex items-center justify-center">
      {item.video ? (
        <>
          <video
            ref={videoRef}
            muted
            playsInline
            loop
            onCanPlay={handleVideoCanPlay}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isVideoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <source src={item.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Image
            src={item.image}
            alt={`Harley's Patisserie - ${item.title}`}
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            priority={index === 0} // First item gets priority for optimized loading
            className={`transition-opacity duration-500 ${
              isVideoLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </>
      ) : (
        <Image
          src={item.image} // No need to check for item.mobileImage anymore
          alt={`Harley's Patisserie - ${item.title}`}
          fill
          style={{ objectFit: 'cover' }}
          quality={100}
          priority={index === 0}
        />
      )}
    </div>
  ))}
</Slider>

      <button 
        onClick={() => sliderRef.current?.slickPrev()} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button 
        onClick={() => sliderRef.current?.slickNext()} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 rounded-full p-2 transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
      <noscript>
        <h1>Harley's Fine Baking</h1>
      </noscript>
      <div className="md:hidden fixed bottom-12 left-0 right-0 z-50 flex justify-center">
        <button onClick={() => setIsOrderModalOpen(true)} className="bg-black hover:scale-105 text-white hover:bg-[#CBEBF2] hover:text-black text-lg px-6 py-2 rounded-md transition-colors duration-300 fixed-button">
          Order Now
        </button>
      </div>
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
      <style jsx>{`
        :global(.slick-dots) {
          bottom: 1rem;
        }
        @media (min-width: 768px) {
          :global(.slick-dots) {
            bottom: 2.5rem;
          }
        }
      `}</style>
    </section>
  )
}

