'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { OrderModal } from './OrderModal'

const carouselItems = [
  {
    image: "/photos/hero1.jpg",
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
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
          backgroundColor: "transparent",
          transition: "all 0.3s ease",
          display: "inline-block",
          margin: "0 4px",
        }}
      />
    ),
    dotsClass: "slick-dots slick-thumb custom-dot",
  }

  return (
    <section className="relative h-screen overflow-hidden">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative h-screen flex items-center justify-center">
            <Image 
              src={item.image}
              alt={`Harley's Patisserie - ${item.title}`}
              layout="fill"
              objectFit="cover"
              quality={100}
              priority={index === 0}
            />
            
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