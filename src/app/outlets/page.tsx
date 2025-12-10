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
  const [city, setCity] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const locations = [
    { name: "Hyderabad", image: "/photos/jubilee.jpeg" },
    { name: "Bengaluru", image: "/photos/bengaluru2.jpg" },
    { name: "Mumbai", image: "/photos/mumbai.jpg" },
    { name: "Pune", image: "public/photos/Balewadi-Pune.webp" },
    { name: "Vijayawada", image: "public/photos/Vijayawada.webp" },
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
      name: "Harley's Fine Baking - Odeon Mall",
      locationUrl: "https://maps.app.goo.gl/m44CZ6oiyYodpKEQ7",
      address:
        "1-8-557, Chikkadpally, New Nallakunta, Hyderabad, Telangana 500020, Hyderabad, Telangana 500020",
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
    {
      name: "Harley's Fine Baking - Bengaluru Airport",
      locationUrl: "https://maps.app.goo.gl/F1ow2bWeNGGZgDGy9",
      address:
        "The Quad by BLR, Terminal 1, Kempegowda International Airport Road, A - Block, Gangamuthanahalli, Karnataka 560300, Bangalore, Karnataka 560300",
    },
    {
      name: "Harley's Fine Baking - Phoenix Mall Of Asia",
      locationUrl: "https://maps.app.goo.gl/ZSEexafSur3EktgH7",
      address:
        "Unit No S-28 and S-28A, 2nd Floor, Byatarayanapura, Yelahanka, Hobli, , Yelahanka Taluk, Bellary Rd, Bengaluru, Karnataka 560092, Bengaluru, Karnataka 560092",
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

const puneOutlets = [
    {
      name: "Harley’s Ivory Lounge – Balewadi",
      locationUrl: "https://maps.app.goo.gl/P7WxQYN6zayv98ts6",
      address:
        "Business Point, Sai Chowk Rd, Laxman Nagar, Baner, Pune, Maharashtra 411045, Pune, Maharashtra 411045",
    },
    {
      name: "Harley's Fine Baking - Phoenix Marketcity Pune",
      locationUrl: "https://maps.app.goo.gl/TvcjJ1gkd6FyN7o39",
      address:
        "Ground Floor, Phoenix Marketcity, 207, Pune Nagar Rd, Clover Park, Viman, Nagar, Pune, Maharashtra 411014, Pune, Maharashtra 411014",
    },
    {
      name: "Harley's Fine Baking - Phoenix Mall Millennium",
      locationUrl: "https://maps.app.goo.gl/Y4M12MJ6ziFKzYne8",
      address:
        "G-61A, Ground Floor, Phoenix Mall of the Millennium, Shankar Kalat Nagar, , Wakad, Pimpri-Chinchwad, Maharashtra, Pimpri-Chinchwad, Maharashtra 411057",
    },
  ];

const vijayawadaOutlets = [
    {
      name: "Harley's Ivory Lounge - Vijayawada",
      locationUrl: "https://maps.app.goo.gl/GBuQgoMBTQNothwV6",
      address:
        "MG Rd, Bhagyanagar Colony, Padmaja Nagar, Kanuru, Vijayawada, Andhra Pradesh 520007",
    },
  ];

  useEffect(() => {
    const loc = sessionStorage.getItem("location");
    setCity(loc);
  }, [city]);

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
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-y-4 gap-x-4 px-4">
            {locations.map((location, index) => (
              <div
                key={`${index + 1}`}
                className="cursor-pointer"
                onClick={() => scrollToSection(location?.name)}
              >
                <FadeInElement delay={index * 0.1}>
                  <div className="bg-[#CBEBF2] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={location.image}
                        alt={`${location.name} Location`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
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
            ))}
          </div>
          <Outlet id="Hyderabad" outlets={hydOutlets} />
          <Outlet id="Bengaluru" outlets={blrOutlets} />
          <Outlet id="Mumbai" outlets={mumOutlets} />
          <Outlet id="Pune" outlets={puneOutlets} />
          <Outlet id="Vijayawada" outlets={vijayawadaOutlets} />
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
}
