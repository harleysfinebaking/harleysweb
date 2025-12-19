"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FadeInElement } from "@/components/Locations";
import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Outlet from "@/components/Outlets";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function OutletsPage() {
  const [city, setCity] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);

  const locations = [
    { name: "Hyderabad", image: "/photos/jubilee.jpeg" },
    { name: "Bengaluru", image: "/photos/bengaluru2.jpg" },
    { name: "Mumbai", image: "/photos/mumbai.jpg" },
    { name: "Vijayawada", image: "/photos/Vijayawada.jpg" },
    { name: "Pune", image: "/photos/Balewadi-Pune.jpg" },
  ];

  const hydOutlets = [
    {
      name: "Harley's Ivory Lounge - Nanakramguda",
      locationUrl: "https://maps.app.goo.gl/NfiVYXDCV8y9ATZ59",
      address:
        "Survey No:55/E, Nanakramguda Rd, below Medics Healthcare, Hyderabad, Telangana - 500032",
    },
    {
      name: "Harley's Fine Baking - Manikonda",
      locationUrl: "https://maps.app.goo.gl/AkuGUD6dAqEwK9e88",
      address: "398, OU Colony, Shaikpet, Hyderabad, Telangana - 500008",
    },
    {
      name: "Harley's Fine Baking - Madhapur",
      locationUrl: "https://maps.app.goo.gl/2rJERfXnG99j7YMeA",
      address:
        "100 Feet Rd, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana - 500081",
    },
    {
      name: "Harley's Fine Baking - Kompally",
      locationUrl: "https://maps.app.goo.gl/5tNRi96VGXixtiVF6",
      address:
        "SPG Grand Building HT Lane Road, Petbasheerabad, Kompally, Hyderabad, Telangana - 500067",
    },
    {
      name: "Harley's Fine Baking - Airport (Domestic & International)",
      locationUrl: "https://maps.app.goo.gl/RGKsQz8hmww1E8jn9",
      address:
        "Rajiv Gandhi International Airport, Shamshabad, Hyderabad, Telangana - 500409",
    },
    {
      name: "Harley's Fine Baking - TSPA PBEL City",
      locationUrl: "https://maps.app.goo.gl/99gPKXirEcqV6x8Q8",
      address:
        "1st Floor, ASR Complex, Plot No. 9, PBEL City Rd, Snehita Hills, Phase-I, Bandlaguda Jagir, Hyderabad, Telangana - 500091",
    },
    {
      name: "Harley's Fine Baking - Hitec City",
      locationUrl: "https://maps.app.goo.gl/mW7hXyiSfkHAiywK7",
      address:
        "Medicover, H.No.1-90/7/B/28,30 & 59, Plot No.5 To 11, Sy.No.78, Pragathi Nagar, Madhapur, Hyderabad, Telangana - 500081",
    },
    {
      name: "Harleys Fine Baking - Sarath City Capital Mall, Gachibowli",
      locationUrl: "https://maps.app.goo.gl/DrQVVhHwk2xdyYjJ8",
      address:
        "Sharath City Capital Mall, Food Court 4th Floor Gachibowli-Miyapur Road, Whitefields, Hitech City, Kondapur, Hyderabad, Telangana - 500084",
    },
    {
      name: "Harley's Fine Baking - Wells Fargo, Gachibowli",
      locationUrl: "https://maps.app.goo.gl/5SLTDVCEV9AX61Lh6",
      address:
        " Madhura Nagar Colony, Gachibowli, Hyderabad, Telangana - 500032",
    },
    {
      name: "Harley's Fine Baking Odeon Mall",
      locationUrl: "https://maps.app.goo.gl/Sk7ebRAyjVdMfaez6",
      address:
        " 1-8-557, Chikkadpally, New Nallakunta, Hyderabad, Hyderabad, Telangana 500020",
    },
    {
      name: "Harley's Fine Baking - Secunderabad",
      locationUrl: "https://maps.app.goo.gl/119a791i8GzszpPT6",
      address:
        " 9, Sarojini Devi Rd, Regimental Bazaar, Shivaji Nagar, Hyderabad, Secunderabad, Telangana 500003",
    },
  ];

  const blrOutlets = [
    {
      name: "Harley's Ivory Lounge - JP Nagar",
      locationUrl: "https://maps.app.goo.gl/4W4u83AqvHpEDr8t9",
      address:
        "Shop No. 1316, D 9th Cross, 9th Main Road, opp. to Tirumalagiri Venkateshwara Temple, above Central Bank, Marenahalli, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka - 560078",
    },
    {
      name: "Harley's Ivory Lounge - Kalyan Nagar",
      locationUrl: "https://maps.app.goo.gl/CLYqyJZfkU3F57eL8",
      address:
        "BR Plaza, 30, CMR Main Rd, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043",
    },
  ];

  const mumOutlets = [
    {
      name: "Harley's Ivory Lounge - Kala Ghoda BSE",
      locationUrl: "https://maps.app.goo.gl/iTwWqeMrXZmuPXjd6",
      address:
        "Ambalal Doshi Marg, Kala Ghoda, Fort, Mumbai, Maharashtra - 400001",
    },
    {
      name: "Harley's Ivory Lounge - Phoenix Palladium",
      locationUrl: "https://maps.app.goo.gl/uGETrUHtyxtfetNt5",
      address:
        "462, Senapati Bapat Marg, Lower Parel, 3rd Floor, Phoenix Palladium, Mumbai, Maharashtra 400013",
    },
  ];

  const vijOutlets = [
    {
      name: "Harley's Ivory Lounge - Vijayawada",
      locationUrl: "https://maps.app.goo.gl/QJ2pu7zwzCyKyWtH7",
      address:
        "MG Rd, Bhagyanagar Colony, Padmaja Nagar, Kanuru, Vijayawada, Andhra Pradesh 520007",
    },
  ];

  const puneOutlets = [
    {
      name: "Harley's Ivory Lounge - Balewadi",
      locationUrl: "https://maps.app.goo.gl/P7WxQYN6zayv98ts6",
      address:
        "Business Point, Sai Chowk Rd, Laxman Nagar, Baner, Pune, Maharashtra 411045",
    },
    {
      name: "Harley's Fine Baking - Phoenix Mall Millennium",
      locationUrl: "https://maps.app.goo.gl/JvHyXcorExMuweTm8",
      address:
        "G-61A, Ground Floor, Phoenix Mall of the Millennium, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057",
    },
  ];

  // Refs for custom navigation buttons
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  // Fixed navigation useEffect with proper null checks
  useEffect(() => {
    if (
      !swiperInstance ||
      !prevRef.current ||
      !nextRef.current ||
      !swiperInstance.navigation
    )
      return;

    try {
      // Destroy existing navigation if it exists
      if (swiperInstance.navigation && swiperInstance.navigation.destroy) {
        swiperInstance.navigation.destroy();
        swiperInstance.navigation.init = false;
      }

      // Set navigation params safely
      swiperInstance.params.navigation = {
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      };

      // Safe initialization
      if (!swiperInstance.navigation.init) {
        swiperInstance.navigation.init();
      }

      // Safe update
      if (swiperInstance.navigation.update) {
        swiperInstance.navigation.update();
      }

      // Force swiper update
      swiperInstance.update();

    } catch (error) {
      console.warn("Swiper navigation setup error:", error);
    }

    // Cleanup
    return () => {
      try {
        if (swiperInstance?.navigation?.destroy) {
          swiperInstance.navigation.destroy();
        }
      } catch (error) {
        // Silent cleanup fail
      }
    };
  }, [swiperInstance]);

  useEffect(() => {
    const loc = sessionStorage.getItem("location");
    if (loc) setCity(loc);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (city) {
      const element = document.getElementById(city.toLowerCase());
      if (element) {
        const yOffset = -90;
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [city]);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      const yOffset = -90;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  const handlePrevClick = useCallback(() => {
    swiperInstance?.slidePrev();
  }, [swiperInstance]);

  const handleNextClick = useCallback(() => {
    swiperInstance?.slideNext();
  }, [swiperInstance]);

  return (
    <div className="min-h-screen font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />
      <motion.main
        className="pt-40 md:pt-52"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.section variants={fadeInUp} className="mb-12 relative">
          <div className="container mx-auto px-4">
            <div className="relative group">
              {/* Swiper */}
              <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerView={1}
                spaceBetween={20}
                loop
                speed={800}
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
                onSwiper={setSwiperInstance}
              >
                {locations.map((location, index) => (
                  <SwiperSlide key={index}>
                    <div
                      onClick={() => scrollToSection(location.name)}
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

              {/* Custom Navigation Arrows - Direct Click Handlers */}
              <button
                ref={prevRef}
                onClick={handlePrevClick}
                className="absolute top-1/2 left-0 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 opacity-75 hover:opacity-100 group-hover:opacity-100 border-2 border-white/50"
                aria-label="Previous slide"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="text-gray-800"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>

              <button
                ref={nextRef}
                onClick={handleNextClick}
                className="absolute top-1/2 right-0 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 opacity-75 hover:opacity-100 group-hover:opacity-100 border-2 border-white/50"
                aria-label="Next slide"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className="text-gray-800"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        </motion.section>

        {/* Outlets Sections */}
        <Outlet id="Hyderabad" outlets={hydOutlets} />
        <Outlet id="Bengaluru" outlets={blrOutlets} />
        <Outlet id="Mumbai" outlets={mumOutlets} />
        <Outlet id="Vijayawada" outlets={vijOutlets} />
        <Outlet id="Pune" outlets={puneOutlets} />
      </motion.main>
      <Footer />
    </div>
  );
}
