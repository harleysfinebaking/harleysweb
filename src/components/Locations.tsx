"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DecoratedTitle from "@/components/DecoratedTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { useRouter } from "next/navigation";

// FadeInElement component
export const FadeInElement = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export function Locations() {
  const router = useRouter();
  const locations = [
    { name: "Hyderabad", image: "/photos/jubilee.jpeg" },
    { name: "Bengaluru", image: "/photos/bengaluru2.jpg" },
    { name: "Mumbai", image: "/photos/mumbai.jpg" },
    { name: "Vijayawada", image: "/photos/Vijayawada.webp" },
    { name: "Pune", image: "/photos/Balewadi-Pune.webp" },
  ];

  const handleClick = (name: string) => {
    sessionStorage.setItem("location", name);
    router.push("/outlets");
  };

  // Refs for custom navigation buttons
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="locations"
      className="py-16 bg-gradient-to-b from-[#F5D1D8] to-[#CBEBF2]"
    >
      <div className="container mx-auto px-4">
        <FadeInElement>
          <DecoratedTitle title="Our Locations" className="mb-8" />
        </FadeInElement>

        <div className="relative">
          {/* Swiper */}
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => {
              if (prevRef.current && nextRef.current) {
                const navParams = swiper.params.navigation as any;
                navParams.prevEl = prevRef.current;
                navParams.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
          >
            {locations.map((location, index) => (
              <SwiperSlide key={index}>
                <div
                  onClick={() => handleClick(location.name)}
                  className="cursor-pointer"
                >
                  <FadeInElement delay={index * 0.1}>
                    <div className="bg-[#CBEBF2] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={location.image}
                          alt={`${location.name} Location`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-3 text-center">
                        <h3 className="text-xl font-semibold text-gray-600">
                          {location.name}
                        </h3>
                      </div>
                    </div>
                  </FadeInElement>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div
            ref={prevRef}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth="5"
              fill="none"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </div>

          <div
            ref={nextRef}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 cursor-pointer p-2 bg-white rounded-full shadow-md hover:scale-110 transition-transform"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth="5"
              fill="none"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
