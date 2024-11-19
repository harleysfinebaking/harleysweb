'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { OrderModal } from './OrderModal'

const carouselItems = [
  {
    video: "https://firebasestorage.googleapis.com/v0/b/homefront-479e7.appspot.com/o/video3.mp4?alt=media&token=fe4bb5cb-2511-4e8a-954c-f21b83ce8dfe",
    image: "/photos/hero1.jpg", // Fallback image for video
    title: "Indulge in Elegance",
    subtitle: "Experience the refined \"Kaffee und Kuchen\" tradition at Harley's"
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
  const sliderRef = useRef<Slider>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleVideoEnd = () => {
    setIsVideoPlaying(false)
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

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
    autoplaySpeed: 5000, // Set to 5 seconds for non-video slides
    pauseOnHover: false,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    beforeChange: (current: number, next: number) => {
      setActiveSlide(next)
      if (next === 0) {
        setIsVideoLoaded(false)
        setIsVideoPlaying(false)
        if (videoRef.current) {
          videoRef.current.currentTime = 0
          videoRef.current.load()
        }
      }
    },
    afterChange: (current: number) => {
      if (current === 0) {
        if (videoRef.current) {
          videoRef.current.play()
          setIsVideoPlaying(true)
        }
      }
    },
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'absolute', bottom: '40px', right: '40px', textAlign: 'right' }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          border: "2px solid white",
          borderRadius: "50%",
          backgroundColor: activeSlide === i ? "white" : "transparent",
          transition: "all 0.3s ease",
          display: "inline-block",
          margin: "0 4px",
        }}
      />
    ),
    dotsClass: "slick-dots slick-thumb custom-dot",
  }

  useEffect(() => {
    if (sliderRef.current && videoRef.current) {
      videoRef.current.load()
    }
  }, [])

  useEffect(() => {
    if (isVideoPlaying && sliderRef.current) {
      sliderRef.current.slickPause()
    } else if (!isVideoPlaying && sliderRef.current) {
      sliderRef.current.slickPlay()
    }
  }, [isVideoPlaying])

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
                  onEnded={handleVideoEnd}
                  onCanPlay={handleVideoCanPlay}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
                >
                  <source src={item.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <Image 
                  src={item.image}
                  alt={`Harley's Patisserie - ${item.title}`}
                  layout="fill"
                  objectFit="cover"
                  quality={100}
                  priority={true}
                  className={`transition-opacity duration-500 ${isVideoLoaded ? 'opacity-0' : 'opacity-100'}`}
                />
              </>
            ) : (
              <Image 
                src={item.image}
                alt={`Harley's Patisserie - ${item.title}`}
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={index === 1}
              />
            )}
            
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            <div className={`relative z-10 flex flex-col items-center justify-between h-full py-16 px-4 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100'}`}>
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button onClick={() => setIsOrderModalOpen(true)} className="hidden md:block bg-black hover:scale-105 text-white hover:bg-[#CBEBF2] hover:text-black text-lg px-6 py-2 rounded-md transition-colors duration-300">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="md:hidden fixed bottom-12 left-0 right-0 z-50 flex justify-center">
        <button onClick={() => setIsOrderModalOpen(true)} className="bg-black hover:scale-105 text-white hover:bg-[#CBEBF2] hover:text-black text-lg px-6 py-2 rounded-md transition-colors duration-300 fixed-button">
          Order Now
        </button>
      </div>
      <OrderModal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} />
      <style jsx global>{`
        .custom-dot {
          text-align: right;
        }
        .custom-dot li {
          display: inline-block;
          margin: 0 4px;
        }
        .custom-dot li button:before {
          font-size: 0;
          line-height: 0;
          display: block;
          width: 12px;
          height: 12px;
          padding: 0;
          cursor: pointer;
          color: transparent;
          border: 0;
          outline: none;
          background: transparent;
        }
        .custom-dot li.slick-active button {
          background-color: white;
        }
        .fixed-button {
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  )
}