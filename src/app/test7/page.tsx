'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header6 } from '@/components/Header6'
import { Footer } from '@/components/Footer'
import { Button } from "@/components/ui/button"

export default function Home4() {
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

  const menuItems = [
    { name: 'Medovik Cakes', image: '/photos/danishmedovik.jpg' },
    { name: 'Macarons', image: '/photos/macaroons.JPG' },
    { name: 'Butter Cookies', image: '/photos/cookies.JPG' },
    { name: 'Assorted Bakes', image: '/photos/assorted.JPG' },
    { name: 'Cheesecakes', image: '/photos/cheesecakes.jpg' },
    { name: 'Macarons', image: '/photos/macaroons1.JPG' },
  ]

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-inter">
      <Header6 isScrolled={isScrolled} />

      <main>
      <section className="relative h-screen flex items-center justify-center">
          <Image 
            src="/photos/hero.jpg" 
            alt="Harley's Patisserie" 
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          <div className={`relative z-10 text-center px-4 transition-all duration-500 ${isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100'}`}>
            <div className="relative inline-block mb-8">
              <div 
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/50 backdrop-blur-md rounded-[50%] w-[370px] h-[260px] shadow-lg" 
                style={{ borderRadius: '50% / 50%' }}
              ></div>
              <div className="relative z-10">
                <Image 
                  src="/logo.png" 
                  alt="Harley's" 
                  width={220}
                  height={120}
                  className="w-auto h-auto"
                />
              </div>
            </div>
            {/* <h1 className="text-5xl md:text-7xl font-light mb-4 text-white font-mulish">Indulge in Elegance</h1>
            <p className="text-xl md:text-2xl mb-8 text-white font-mulish">Experience the refined "Kaffee und Kuchen" tradition at Harley's</p>
            <Button className="bg-[#CBEBF2] text-[#4A4A4A] hover:bg-[#F5D1D8] text-lg px-8 py-3">Order Now</Button> */}
          </div>
        </section>


        <section id="about" className="py-20 bg-[#f5d1d8]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-8 text-center font-mulish text-pink-800 opacity-60">Who We Are</h2>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
        <div className="w-full md:w-1/2 md:pl-8 px-4 md:px-0">
            <p className="text-xl mb-4 pt-8 px-8 md:px-16 text-center text-pink-900 font-mulish font-light">
            India&apos;s ultimate luxury <br/> destination  for cakes, coffee, and

confections. Known for world-class menu, mouth-watering flavours, Victorian

elegance, and award-winning quality.  
            </p>
            {/* <p className="text-2xl text-center text-pink-900 font-mulish font-light">
              Our signature Medovik has become a nationwide favorite, with monthly sales exceeding 10,000 kilograms. Join us in reliving the tradition of coffee drinking, where friends and family gather to enjoy coffee, cake, and conversation.
            </p> */}
            <p className="text-xl mb-4 px-8 md:px-16 text-center text-pink-900 font-mulish font-light">
            Harley&apos;s is where
            indulgence<br/> meets innovation.
</p>
            <p className="text-xl mb-4 px-8 md:px-16 text-center text-pink-900 font-mulish font-light">
              Proudly crafted in India,<br/>

poised to captivate the world.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center my-8 px-8 md:mb-0">
            <Image 
              src="/photos/building.jpg" 
              alt="Harley's Delicacies" 
              width={500} 
              height={300} 
              className="max-w-full h-auto rounded-lg shadow-lg px"
            />
          </div>
          
        </div>
      </div>
    </section>

    <section id="signature-collection" className="py-24 bg-[#CBEBF2]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light mb-12 text-center font-mulish text-pink-950">Signature Collection</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="relative w-full md:w-1/3 aspect-[3/4]">
                <Image 
                  src="/photos/cheesecakes.jpg" 
                  alt="Signature Collection 1" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <Button className="absolute bottom-4 rounded-sm left-1/2 transform -translate-x-1/2 bg-[#CBEBF2] text-pink-950 hover:bg-pink-100">
                  View More
                </Button>
              </div>
              <div className="relative w-full md:w-1/3 aspect-[3/4]">
                <Image 
                  src="/photos/danishmedovik.jpg" 
                  alt="Signature Collection 2" 
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
                <Button className="absolute bottom-4 rounded-sm left-1/2 transform -translate-x-1/2 bg-[#CBEBF2] text-pink-950 hover:bg-pink-100">
                  View More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="koffee-and-kuchen" className="py-24 bg-[#f5d1d8]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light mb-12 text-center font-mulish text-pink-950">Kaffee und Kuchen</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 md:ml-24">
                <Image 
                  src="/photos/coffee.jpg" 
                  alt="Kaffee und Kuchen" 
                  width={300} 
                  height={275} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 md:mr-24 text-center">
                <p className="text-lg mb-4 text-pink-900 font-mulish font-light px-8">
                  &quot;Kaffee und Kuchen&quot; is a cherished <br/>German tradition that we&apos;ve brought to India. It&apos;s a delightful afternoon break, typically enjoyed between 3 and 5 pm, where friends and family gather to savor a cup of coffee and a slice of cake.
                </p>
                <p className="text-lg mb-4 text-pink-900 font-mulish font-light px-8">
                  At Harley&apos;s, we&apos;ve embraced this tradition, offering a perfect setting for you to relax, indulge in our exquisite cakes and pastries, and enjoy rich, aromatic coffee. It&apos;s more than just a snack - it&apos;s a social ritual that brings people together.
                </p>
                <p className="text-lg text-pink-900 font-mulish font-light px-8">
                  Experience the warmth of &quot;Kaffee und Kuchen&quot; at Harley&apos;s - where every bite and sip is a celebration of life&apos;s sweet moments.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="menu" className="py-24 bg-gradient-to-b from-[#f5d1d8] to-[#CBEBF2]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-thin mb-12 text-pink-950  text-center font-mulish">Our Delightful Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {menuItems.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={400} 
                    height={300} 
                    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-xl font-semibold text-[#d45770] font-mulish text-center transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}