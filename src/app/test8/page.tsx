'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header7 } from '@/components/Header7'
import { Footer } from '@/components/Footer'
import { Button } from "@/components/ui/button"
import Categories from "@/components/Categories"

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
    <div className="min-h-screen bg-[#FEFEFA] font-['Trebuchet_MS',_sans-serif]">
      <Header7 isScrolled={isScrolled} />

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
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#f5d1d8]/15 backdrop-blur-md rounded-[50%] w-[370px] h-[260px] shadow-lg" 
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
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white"></h1>
            <p className="text-xl md:text-5xl mb-8 text-white font-imperial bg-[#CBEBF2]/20 p-8 rounded-lg">Where every bite tells a delicious story & <br/> every sip resonates to perfection</p>
            
            <Button className="bg-[#f5d1d8] text-pink-950 hover:bg-pink-100 text-lg px-8 py-3 rounded-sm">
              Order Now
            </Button>
            <Button className="bg-[#CBEBF2] ml-8 text-pink-950 hover:bg-pink-100 text-lg px-8 py-3 rounded-sm">
Explore Menu           </Button>
          </div>
        </section>

        
        <section id="about" className="py-20 bg-[#f5d1d8]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-pink-800 opacity-60">Who We Are</h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:justify-between">
              <div className="w-full md:w-1/2 md:pl-8 px-4 md:px-0">
                <p className="text-xl mb-4 pt-8 px-8 md:px-16 text-center text-pink-900 font-light">
                At Harley’s, we believe in creating masterpieces with every bake and every sip of our specially brewed coffee.  
                </p>
                <p className="text-xl mb-4 px-8 md:px-16 text-center text-pink-900 font-light">
                We are more than just a bakery—we are a destination for celebration, relaxation, and indulgence. Established in 2021, Harley’s has quickly become the most desired brand for Cakes & Desserts and a go-to destination for Specialty Coffee lovers. Whether it's a cozy morning with a perfect Americano or a grand celebration featuring our signature Medovik cake, Harley’s is your companion for life’s sweetest moments.

                </p>
              
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

        <section className="py-24 bg-[#FEFEFA] text-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <Image 
              src="/photos/belgianmedovik.jpg" 
              alt="Harley's Signature Medovik Cake" 
              width={600} 
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl text-pink-800 opacity-80 font-light">Medovik Cake</h2>
              <p className="text-xl text-pink-800 italic font-light">&quot;A Taste of Royalty in Every Bite&quot;</p>
            </div>
            
            <div className="space-y-4 text-[#4A4A4A]">
              <p className="leading-relaxed">
                Discover the charm of our Medovik Cake, the &quot;Queen Cake&quot; of Empress Elizabeth Alexeievna. Made with pure honey and premium ingredients, it's a timeless masterpiece balancing indulgence with nourishment.
              </p>
              <p className="leading-relaxed">
                As India's largest Medovik producer, we sell over 10,000 kg monthly, redefining dessert as both luxurious and healthy.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-pink-800">Harley&apos;s Signature Medovik Features:</h4>
              <p>Natural ingredients with authentic honey flavor</p>
              <p>Perfect balance of taste and nutrition</p>
              <p>Available in various sizes for all occasions</p>
              
            </div>

            <Button className="bg-[#f5d1d8] hover:bg-[#b34760] text-[#b34760] hover:text-white px-8 py-3 rounded-sm text-lg">
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </section>



        <section id="ivory-lounge" className="py-24 bg-[#FEFEFA]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light mb-12 text-center text-pink-950">Harley's Ivory Club</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 md:ml-32 mb-8 md:mb-0">
                <Image 
                  src="/photos/crown.png" 
                  alt="Harley's Ivory Club" 
                  width={300} 
                  height={300} 
                  className="rounded-lg "
                />
              </div>
              <div className="md:w-1/2 md:pl-8 text-center">
                <h3 className="text-2xl font-semibold mb-4 text-pink-900">Treat Yourself & Earn Rewards!</h3>
                <p className="text-lg mb-4 text-pink-900 font-light">
                  Every sip and every bite counts! Earn 10% Harley's Crowns with every purchase, redeemable for future treats at all our outlets.
                </p>
                <p className="text-lg mb-6 text-pink-900 font-light">
                  Join our exclusive Ivory Club and indulge in a world of premium benefits, special events, and exquisite flavors.
                </p>
                <Button className="bg-[#CBEBF2] text-pink-950 hover:bg-pink-100 rounded-sm">
                  Learn More About Ivory Club
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="signature-collection" className="py-24 bg-[#CBEBF2]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-light mb-12 text-center text-pink-950">Signature Collection</h2>
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
            <h2 className="text-4xl font-light mb-12 text-center text-pink-950">Kaffee und Kuchen</h2>
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
                <p className="text-lg mb-4 text-pink-950 font-light px-8">
                Harley’s is pioneering a unique coffee experience
inspired by the European tradition of “Kaffee und
Kuchen”—a ritual akin to India’s beloved “Chai
Biscuit.” Harley’s is redefining India’s coffee culture

with the concept of pairing—the tradition of
enjoying coffee with a perfectly matched cake.
                </p>
                <p className="text-2xl font-bold text-pink-950 py-1 px-8">
        Koffee und Kuchen
      </p>
      <div className="w-24 h-0.5 bg-pink-950 mx-auto"></div>
      <p className="text-2xl font-bold text-pink-950 py-1 px-8">
        Coffee and Cake
      </p>
                <p className="text-lg text-pink-950 font-light px-8 pt-2">
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
<Categories/>
        {/* <section id="menu" className="py-24 bg-gradient-to-b from-[#f5d1d8] to-[#CBEBF2]">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-thin mb-12 text-pink-950 text-center">Our Delightful Menu</h2>
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
                    <h3 className="text-xl font-semibold text-[#d45770] text-center transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">{item.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </div>
  )
}