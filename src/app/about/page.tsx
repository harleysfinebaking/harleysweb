'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from "framer-motion";
import DecoratedTitle from "@/components/DecoratedTitle";
import { Infinity } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

export default function About() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />

      <main>
        <section className="pt-36 md:pt-48 pb-12 bg-[#CBEBF2]">
          <div className="container mx-auto px-3 flex flex-col md:flex-row justify-center gap-x-4 lg:gap-x-10 items-center">
            <iframe
              src="https://www.youtube.com/embed/Sw6EIzPxlZE?si=HkZgxmH-_LWwp32b"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="rounded-lg w-full max-w-[900px] h-[300px] md:h-[400px] mb-4 md:mb-0"
            ></iframe>
            <motion.div
              className="bg-[#E8F7FF] p-4 rounded-2xl border shadow-md w-full md:max-w-80 md:h-[400px] flex flex-col justify-between"
              variants={fadeInUp}
            >
              <div className="text-3xl md:text-4xl font-bold leading-[42px] md:leading-[54px]">
                Guinness <br /> World Record <br /> Holder
              </div>
              <p className="mt-2 text-gray-600 text-base">
                On December 6, 2024, Broke the “Guinness World Record!” : The
                legendary Russian Medovik Cake now stands immortalized in
                history, proudly representing Harley's excellence and
                innovation.
              </p>
            </motion.div>
          </div>
        </section>
        <motion.section
          id="our vision"
          className="py-10 bg-[#f5d1d8]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={stagger}
        >
          <div className="container mx-auto md:px-4">
            <div className="px-4 mx-4 md:mx-8">
              <div className="flex items-center">
                <div className="border border-gray-400 rounded-full px-3 py-1 mb-8 text-sm md:text-base font-semibold">
                  Our Vision
                </div>
              </div>
              <motion.p
                className="text-base md:text-lg lg:text-xl text-[#221F1F] mb-8 md:mb-0 "
                variants={fadeInUp}
              >
                To create a world where every bite reflects passion, quality,
                and sustainability, blending timeless traditions with modern
                innovation to inspire joy and connection.
              </motion.p>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="our commitments"
          className="py-10 bg-[#CBEBF2]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
        >
          <div className="container mx-auto">
            <motion.div variants={fadeInUp}>
              <DecoratedTitle
                title="Our Commitments"
                headingLevel="h2"
                className="px-3"
              />
            </motion.div>
            <div className="flex flex-col items-center justify-between gap-y-4 gap-x-3 mt-8 px-3">
              <motion.div
                className="bg-[#E8F7FF] py-4 lg:py-10 rounded-2xl border shadow-md w-full px-3 lg:px-14"
                variants={fadeInUp}
              >
                <div className="flex items-center">
                  <div className="border border-gray-400 rounded-full px-3 py-1 text-sm md:text-base font-semibold">
                    Our Commitment to Quality
                  </div>
                </div>
                <div className="md:flex items-center gap-x-2 xl:gap-x-40 ">
                  <p className="text-base md:text-lg lg:text-xl py-4 w-full max-w-2/3">
                    We source the finest ingredients to ensure excellence in
                    every product. Our specialty coffee, from one of
                    Chikmagalur's oldest plantations, reflects our dedication to
                    delivering unmatched flavor.
                  </p>
                  <Image
                    src="/photos/quality.webp"
                    alt="Quality"
                    objectFit="cover"
                    height={300}
                    width={700}
                    className="rounded-md shadow-xl"
                  />
                </div>
              </motion.div>

              <motion.div
                className="bg-[#E8F7FF] py-4 lg:py-10 rounded-2xl border shadow-md w-full px-3 lg:px-14"
                variants={fadeInUp}
              >
                <div className="flex items-center">
                  <div className="border border-gray-400 rounded-full px-3 py-1 text-sm md:text-base font-semibold md:ml-auto">
                    Our Commitment to Innovation
                  </div>
                </div>
                <div className="md:flex md:flex-row-reverse items-center gap-x-2 xl:gap-x-40 ">
                  <p className="text-base md:text-lg lg:text-xl md:text-right w-full max-w-2/3 py-4">
                    Innovation drives us to explore new flavors and techniques.
                    Through creative recipes and engaging workshops, we redefine
                    what it means to bake with love.
                  </p>
                  <Image
                    src="/photos/innovation.webp"
                    alt="Innovation"
                    objectFit="cover"
                    height={300}
                    width={700}
                    className="rounded-md shadow-xl"
                  />
                </div>
              </motion.div>

              <motion.div
                className="bg-[#E8F7FF] py-4 lg:py-10 rounded-2xl border shadow-md w-full px-3 lg:px-14"
                variants={fadeInUp}
              >
                <div className="flex items-center">
                  <div className="border border-gray-400 rounded-full px-3 py-1 text-sm md:text-base font-semibold">
                    Our Commitment to Happiness
                  </div>
                </div>
                <div className="md:flex items-center gap-x-2 xl:gap-x-40">
                  <p className="text-base md:text-lg lg:text-xl py-4 w-full max-w-2/3">
                    At Harley's, we believe happiness is found in the simple
                    pleasures of life. Our mission is to create joyful moments
                    and cherished memories, whether it's savoring a warm cup of
                    Harley's specialty coffee or indulging in a slice of our
                    signature Medovik cake.
                  </p>
                  <Image
                    src="/photos/happiness.webp"
                    alt="Happiness"
                    objectFit="cover"
                    height={300}
                    width={700}
                    className="rounded-md shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="words"
          className="py-10 bg-[#f5d1d8]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
        >
          <div className="container mx-auto">
            <motion.div className=" px-3 lg:px-14" variants={fadeInUp}>
              <div className="flex items-center">
                <div className="border border-gray-400 rounded-full px-3 py-1 text-sm md:text-base font-semibold">
                  The Harley's Values - Our Founders Words
                </div>
              </div>
              <div className="md:flex items-center gap-x-4 xl:gap-x-20">
                <p className="text-base md:text-lg xl:text-xl py-4 w-full max-w-2/3">
                  "When I started Harley's, I wasn't just stepping into a new
                  business—I was embracing a passion for creating experiences
                  that connect people. Despite not coming from an F&B
                  background, I believed in the power of fine artisanal baking
                  to bring joy and togetherness. Harley's began as a dream to
                  introduce India to the global coffee-and-cake culture, a
                  vision that has grown into over 20 outlets across three
                  cities. For me, quality and innovation are not just goals—they
                  are commitments. Every product we create reflects the passion
                  of our team and the promise we make to our customers. As we
                  look to the future, my vision is to make Harley's a global
                  name synonymous with excellence, sustainability, and
                  unforgettable moments." <br />
                  <span className="inline-block mt-4 text-pink-800">
                    — Suresh Naik, Founder & CEO, Harley's Fine Baking
                  </span>
                </p>
                <Image
                  src="/photos/CEO_IMG.webp"
                  alt="Harley's CEO"
                  objectFit="cover"
                  height={300}
                  width={300}
                  className="rounded-md shadow-xl w-full max-w-[350px] m-auto md:m-0"
                />
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="facts"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={stagger}
          className="relative h-auto grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 xl:gap-20 px-3 xl:px-14 py-4 lg:py-20"
        >
          <Image
            src="/photos/interior2.jpg"
            alt="About Harley's Patisserie"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          <div className="bg-[#E8F7FF]/80 p-4 rounded-2xl border shadow-md relative z-10 hover:bg-[#f5d1d8]/80 hover:scale-105 transition-transform duration-300">
            <div className="mt-10 lg:mt-0 text-4xl md:text-5xl font-bold leading-[52px]">
              35 +
            </div>
            <p className="mt-2 text-gray-600 text-sm md:text-base lg:text-xl">
              Outlets & Cloud Kitchens
            </p>
          </div>
          <div className="bg-[#E8F7FF]/80 p-4 rounded-2xl border shadow-md relative z-10 hover:bg-[#f5d1d8]/80 hover:scale-105 transition-transform duration-300">
            <div className="mt-10 lg:mt-0 text-4xl md:text-5xl font-bold leading-[52px]">
              700 +
            </div>
            <p className="mt-2 text-gray-600 text-sm md:text-base lg:text-xl">
              Employees
            </p>
          </div>
          <div className="bg-[#E8F7FF]/80 p-4 rounded-2xl border shadow-md relative z-10 hover:bg-[#f5d1d8]/80 hover:scale-105 transition-transform duration-300">
            <div className="mt-10 lg:mt-0 text-4xl md:text-5xl font-bold leading-[52px]">
              7000 +
            </div>
            <p className="mt-2 text-gray-600 text-sm md:text-base lg:text-xl">
              Macarons Produced Everyday
            </p>
          </div>
          <div className="bg-[#E8F7FF]/80 p-4 rounded-2xl border shadow-md relative z-10 hover:bg-[#f5d1d8]/80 hover:scale-105 transition-transform duration-300">
            <div className="mt-10 lg:mt-0 text-4xl md:text-5xl font-bold">
              <Infinity
                size={52}
                strokeWidth={2}
                className="md:ml-3 scale-100 md:scale-150"
              />
            </div>
            <p className="mt-2 text-gray-600 text-sm md:text-base lg:text-xl">
              Passion & Dedication
            </p>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}