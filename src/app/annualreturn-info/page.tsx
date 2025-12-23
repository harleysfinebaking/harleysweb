"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function FoundationPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");

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

  const financialYears = [
    "2022-2023",
    "2023-2024",
    "2024-2025",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4f8] to-[#FEFEFA] font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />

      <motion.main
        className="pt-40 md:pt-40 py-12 md:py-24"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.section
          className="w-full h-[50vh] md:h-[65vh] lg:h-screen object-cover"
          variants={fadeInUp}
        >
          <div className="relative overflow-hidden rounded-lg shadow-lg w-full h-64 md:h-96 lg:h-[500px]">
            <Image
              src="/photos/harley_s-big-image.png"
              alt="Harleys Image"
              fill
              sizes="100vw"
              className="object-cover object-right object-center transition-transform duration-300 hover:scale-110"
            />
          </div>
        </motion.section>

        <motion.section
          className="py-8 md:py-20 px-4 md:px-8 lg:px-24 xl:px-48"
          variants={fadeInUp}
        >
          <div className="container mx-auto">
            <motion.div
              className="space-y-4"
              variants={stagger}
            >
              <motion.div className="space-y-4" variants={fadeInUp}>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-black">
                  Annual Returns
                </h1>
              </motion.div>

              {/* Dropdown for Financial Year Selection */}
              <motion.div className="space-y-4" variants={fadeInUp}>
                <label htmlFor="financial-year" className="block text-lg font-medium text-black">
                  Select Financial Year:
                </label>
                <select
                  id="financial-year"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="block w-full max-w-xs px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">-- Select Year --</option>
                  {financialYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </motion.div>

              {/* PDF Viewer */}
              {selectedYear && (
                <motion.div className="space-y-4" variants={fadeInUp}>
                  <h2 className="text-2xl font-semibold text-black">
                    PDF for {selectedYear}
                  </h2>
                  <iframe
                    src={`/pdfs/${selectedYear}.pdf`}
                    width="100%"
                    height="600px"
                    className="border border-gray-300 rounded-md"
                    title={`PDF for ${selectedYear}`}
                  ></iframe>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}