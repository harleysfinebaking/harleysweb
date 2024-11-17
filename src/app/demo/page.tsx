'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header3 } from '@/components/Header3'
import { Footer } from '@/components/Footer'
import { Button } from "@/components/ui/button"
import Categories from '@/components/Categories'
import HeroSection from '@/components/Hero'

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
    <div className="min-h-screen bg-[#FEFEFA] font-['Trebuchet_MS',_sans-serif] ">
      <Header3 isScrolled={isScrolled} />

      <main>
     
    <HeroSection/>


        <section id="about" className="py-12 bg-[#f5d1d8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-[#221F1F] ">Who We Are</h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              <div className="w-full md:w-1/2 md:pl-8 px-0 md:px-0">
                <p className="text-xl mb-4 pt-8 px-8 md:px-16 text-center text-[#221F1F] font-light">
                At Harley’s, we believe in creating masterpieces with every bake and every sip of our specially brewed coffee.  
                </p>
                <p className="text-xl mb-4 px-8 md:px-16 text-center text-[#221F1F] font-light">
                We are more than just a bakery—we are a destination for celebration, relaxation, and indulgence. Established in 2021, Harley’s has quickly become the most desired brand for Cakes & Desserts and a go-to destination for Specialty Coffee lovers. Whether it's a cozy morning with a perfect Americano or a grand celebration featuring our signature Medovik cake, Harley’s is your companion for life’s sweetest moments.

                </p>
              
              </div>
              <div className="w-full md:w-1/2 flex justify-center my-4 px-4 md:mb-0">
                <Image 
                  src="/photos/jubilee.jpeg" 
                  alt="Harley's Delicacies" 
                  width={1000} 
                  height={1000} 
                  className="max-w-full h-full rounded-lg shadow-lg px"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-[#CBEBF2] text-center">
      <div className="container mx-auto px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-[#221F1F]">Medovik Cake</h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/photos/categories/medovik.jpg" 
              alt="Harley's Signature Medovik Cake" 
              width={600} 
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
            
              <p className="text-xl text-[#221F1F] italic font-light">&quot;A Taste of Royalty in Every Bite&quot;</p>
            </div>
            
            <div className="space-y-4 text-[#221F1F]">
              <p className="leading-relaxed">
                Discover the charm of our Medovik Cake, the &quot;Queen Cake&quot; of Empress Elizabeth Alexeievna. Made with pure honey and premium ingredients, it's a timeless masterpiece balancing indulgence with nourishment.
              </p>
              <p className="leading-relaxed">
                As India's largest Medovik producer, we sell over 10,000 kg monthly, redefining dessert as both luxurious and healthy.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#221F1F]">Harley&apos;s Signature Medovik Features:</h4>
              <p>Natural ingredients with authentic honey flavor</p>
              <p>Perfect balance of taste and nutrition</p>
              <p>Available in various sizes for all occasions</p>
              
            </div>

            {/* <Button className="bg-[#f5d1d8] hover:bg-[#FEFEFA] text-[#b34760] hover:text-[#b34760] px-8 py-3 hover:shadow-md rounded-sm text-lg">
              Order Now
            </Button> */}
          </div>
        </div>
      </div>
    </section>

{/* test */}

      

        
        <section id="koffee-and-kuchen" className="py-12 bg-[#f5d1d8]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light mb-12 text-center text-[#221F1F] opacity-70 ">Kaffee und Kuchen</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0 md:ml-24">
                <Image 
                  src="/photos/koffeekuchen.png" 
                  alt="Kaffee und Kuchen" 
                  width={400} 
                  height={400} 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-8 md:mr-24 text-center">
                <p className="text-lg mb-4 text-[#221F1F] opacity-70 font-light sm:px-4 md:px-0">
                Harley’s is pioneering a unique coffee experience
inspired by the European tradition of “Kaffee und
Kuchen”—a ritual akin to India’s beloved “Chai
Biscuit.” Harley’s is redefining India’s coffee culture

with the concept of pairing—the tradition of
enjoying coffee with a perfectly matched cake.
                </p>
                <p className="text-2xl font-bold text-[#221F1F] opacity-70 py-1 px-8">
        Koffee und Kuchen
      </p>
      <div className="w-24 h-0.5 bg-[#221F1F] opacity-70 mx-auto"></div>
      <p className="text-2xl font-bold text-[#221F1F] opacity-70 py-1 px-8">
        Coffee and Cake
      </p>
                <p className="text-lg text-[#221F1F] opacity-70 font-light sm:px-4 md:px-0 pt-2 ">
                We elevate the experience by serving specialty

coffee alongside premium cakes with

complementary flavors. This unique pairing creates
a memorable, multi-sensory experience for our
customers, celebrating the joy of savoring coffee
and dessert together, exclusively crafted at Harley’s.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="ivory-lounge" className="py-12 bg-[#FEFEFA]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light mb-12 text-center text-[#221F1F] opacity-70 ">Harley's Ivory Club</h2>
            <div className="flex flex-col md:flex-row items-center justify-between mx-12">
              <div className="md:w-1/2 sm:w-1/4 md:ml-32 mb-8 md:mb-0">
                <Image 
                  src="/photos/crown.png" 
                  alt="Harley's Ivory Club" 
                  width={300} 
                  height={300} 
                  className="rounded-lg "
                />
              </div>
              <div className="md:w-1/2 text-center md:mx-24  ">
                <h3 className="text-2xl font-semibold mb-4 text-[#221F1F] opacity-70">Treat Yourself & Earn Rewards!</h3>
                <p className="text-lg mb-4 text-[#221F1F] opacity-70 font-light  ">
                  Every sip and every bite counts! Earn 10% Harley's Crowns with every purchase, redeemable for future treats at all our outlets.
                </p>
                <p className="text-lg mb-6 text-[#221F1F] opacity-70 font-light">
                  Join our exclusive Ivory Club and indulge in a world of premium benefits, special events, and exquisite flavors.
                </p>
                {/* <Button className="bg-[#CBEBF2] text-pink-950 hover:bg-[#f5d1d8] rounded-sm">
                  Learn More About Ivory Club
                </Button> */}
              </div>
            </div>
          </div>
        </section>
       <Categories/>
      </main>

      <Footer />
    </div>
  )
}