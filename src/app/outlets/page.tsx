"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FadeInElement } from "@/components/Locations";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Outlet from "@/components/Outlets";
import Image from "next/image";

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

export default function OutletsPage() {
  const city = sessionStorage.getItem("location");
  const locations = [
    { name: "Hyderabad", image: "/photos/jubilee.jpeg" },
    { name: "Bengaluru", image: "/photos/bengaluru2.jpg" },
    { name: "Mumbai", image: "/photos/mumbai.jpg" },
  ];

  const hydOutlets = [
    {
      name: "Harley's Ivory Lounge - Nanakramguda",
      locationUrl: "https://maps.app.goo.gl/NfiVYXDCV8y9ATZ59",
      address:
        "Survey No:55/E, Nanakramguda Rd, below Medics Healthcare, Hyderabad, Telangana 500032",
    },
    {
      name: "Harley's Fine Baking - Madhapur",
      locationUrl: "https://maps.app.goo.gl/2rJERfXnG99j7YMeA",
      address:
        "5, 100 Feet Rd, VIP Hills, Silicon Valley, Madhapur, Hyderabad, Telangana 500081",
    },
    {
      name: "Harley's Fine Baking - Manikonda",
      locationUrl: "https://maps.app.goo.gl/AkuGUD6dAqEwK9e88",
      address: "398, OU Colony, Shaikpet, Hyderabad, Telangana 500008",
    },
    {
      name: "Harley's Ivory Lounge - Kompally",
      locationUrl: "https://maps.app.goo.gl/5tNRi96VGXixtiVF6",
      address:
        "SPG Grand Building HT Lane Road, Petbasheerabad, Kompally, Hyderabad, Telangana 500067",
    },
    {
      name: "Harley's Fine Baking - Airport (Domestic & International)",
      locationUrl: "https://maps.app.goo.gl/RGKsQz8hmww1E8jn9",
      address:
        "Rajiv Gandhi International Airport, Shamshabad, Hyderabad, Telangana 500409",
    },
    {
      name: "Harley's Fine Baking - TSPA PBEL City",
      locationUrl: "https://maps.app.goo.gl/99gPKXirEcqV6x8Q8",
      address:
        "1st Floor, ASR Complex, Plot No. 9, PBEL City Rd, Snehita Hills, Phase-I,, Bandlaguda Jagir, Hyderabad, Telangana 500091, Hyderabad, Telangana 500091",
    },
    {
      name: "Harley's Fine Baking - Hitec City",
      locationUrl: "https://maps.app.goo.gl/mW7hXyiSfkHAiywK7",
      address:
        "MEDICOVER, H.NO.1-90/7/B/28,30 AND 59,PLOT NO.5 TO 11,SY.NO.78, PRAGATHI NAGAR, MADHAPUR, Hyderabad, Telangana-500081",
    },
    {
      name: "Harleys Fine Baking - Gachibowli, AMB Mall",
      locationUrl: "https://maps.app.goo.gl/DrQVVhHwk2xdyYjJ8",
      address:
        "SHARATH CITY CAPITAL MALL, FOOD COURT 4th FLOOR GACHIBOWLI-MIYAPUR ROAD, WHITEFIELDS, HITECH CITY,KONDAPUR, Hyderabad, Telangana-500084",
    },
    {
      name: "Harley's Fine Baking - Well Fargo, Gachibowli",
      locationUrl: "https://maps.app.goo.gl/v27YaYzEvFjWzJpJ8",
      address:
        "C9FJ+86W, Old Police Station Rd, Ambedkar Nagar, Gachibowli, Hyderabad, Rai Durg, Telangana 500049",
    },
  ];

  const blrOutlets = [
    {
      name: "Harley's Ivory Lounge - Basavanagudi",
      locationUrl: "https://maps.app.goo.gl/2E4MVtnvo9ahrfHr6",
      address:
        "No 31/2, Ground Floor, Bull Temple Road, Basavanagudi, Bangalore North, Bengaluru, Karnataka 560004",
    },
    {
      name: "Harley's Ivory Lounge - JP Nagar",
      locationUrl: "https://maps.app.goo.gl/4W4u83AqvHpEDr8t9",
      address:
        "Shop No. 1316, D 9th Cross, 9th Main Rd, opp. to Tirumalagiri Venkateshwara Temple, above Central Bank, Marenahalli, 2nd Phase, J. P. Nagar, Bengaluru, Karnataka 560078",
    },
  ];

  const mumOutlets = [
    {
      name: "Harley's Ivory Lounge - Kala Ghoda BSE",
      locationUrl: "https://maps.app.goo.gl/iTwWqeMrXZmuPXjd6",
      address:
        "Ambalal Doshi Marg, Kala Ghoda, Fort, Mumbai, Maharashtra 400001",
    },
  ];

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

  useEffect(() => {
    if (city) {
      const element = document.getElementById(city?.toLowerCase());
      if (element) {
        const yOffset = -90;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [city]);

  const scrollToSection = (sectionId: string) => {
    setTimeout(() => {
      const section = document.getElementById(sectionId?.toLowerCase());
      if (section) {
        const yOffset = -90;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />
      <motion.main
        className="pt-40 md:pt-52"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.section variants={fadeInUp}>
          <div className="container mx-auto hidden md:grid grid-cols-1 md:grid-cols-3 gap-x-4 px-4">
            {locations.map((location, index) => (
              <div
                key={`${index + 1}`}
                className="cursor-pointer"
                onClick={() => scrollToSection(location?.name)}
              >
                <FadeInElement delay={index * 0.1}>
                  <div className="bg-[#CBEBF2] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative md:aspect-[4/3] lg:aspect-[2] overflow-hidden">
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
          <Outlet id="Hyderabad" outlets={hydOutlets} />
          <Outlet id="Bengaluru" outlets={blrOutlets} />
          <Outlet id="Mumbai" outlets={mumOutlets} />
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
}
