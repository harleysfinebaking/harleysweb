"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import DecoratedTitle from "@/components/DecoratedTitle";
import { useRouter } from "next/navigation";

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
    { name: "Pune", image: "/photos/Balewadi-Pune.webp" },
    { name: "Vijayawada", image: "/photos/Vijayawada.webp" },
  ];

  const handleClick = (name: string) => {
    sessionStorage.setItem("location", name);
    router.push("/outlets");
  };

  return (
    <section
      id="locations"
      className="py-16 bg-gradient-to-b from-[#F5D1D8] to-[#CBEBF2]"
    >
      <div className="container mx-auto px-4">
        <FadeInElement>
          <DecoratedTitle title="Our Locations" className="mb-8" />
        </FadeInElement>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <div
              key={`${index + 1}`}
              onClick={() => handleClick(location?.name)}
              className="cursor-pointer"
            >
              <FadeInElement delay={index * 0.1}>
                <div className="bg-white/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={location.image}
                      alt={`${location.name} Location`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-600">
                      {location.name}
                    </h3>
                  </div>
                </div>
              </FadeInElement>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
