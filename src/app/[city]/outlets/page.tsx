"use client";
import DecoratedTitle from "@/components/DecoratedTitle";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FadeInElement } from "@/components/Locations";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/app/foundation/page";
import Outlet from "@/components/Outlets";

interface Props {
  params: Promise<{ city: string }>;
}

export default function OutletsPage({ params }: Props) {
  const { city } = use(params);
  const validCities = ["hyderabad", "bengaluru", "mumbai"];
  const [loading, setLoading] = useState<boolean>(false);

  const hydOutlets = [
    {
      name: "Nanakramguda",
      image: "/photos/jubilee.jpeg",
      locationUrl: "https://maps.app.goo.gl/NfiVYXDCV8y9ATZ59",
    },
    {
      name: "Madhapur",
      image: "/photos/jubilee.jpeg",
      locationUrl: "https://maps.app.goo.gl/2rJERfXnG99j7YMeA",
    },
    {
      name: "Manikonda",
      image: "/photos/jubilee.jpeg",
      locationUrl: "https://maps.app.goo.gl/AkuGUD6dAqEwK9e88",
    },
    // { name: "Abids", image: "/photos/jubilee.jpg" },
    // { name: "AMB", image: "/photos/jubilee.jpg" },
    // { name: "Appa Junction", image: "/photos/jubilee.jpg" },
    // { name: "Attapur", image: "/photos/jubilee.jpg" },
    // { name: "Bachupally", image: "/photos/jubilee.jpg" },
    // { name: "Banjara Hills", image: "/photos/jubilee.jpg" },
    // { name: "Chanda Nagar", image: "/photos/jubilee.jpg" },
    // { name: "GMR - International", image: "/photos/jubilee.jpg" },
    // { name: "GMR - Domestic", image: "/photos/jubilee.jpg" },
    // { name: "Gopanpally", image: "/photos/jubilee.jpg" },
    // { name: "Kukatpally", image: "/photos/jubilee.jpg" },
    // { name: "Medicover - Hitech City", image: "/photos/jubilee.jpg" },
    // { name: "Moosapet", image: "/photos/jubilee.jpg" },
    // { name: "Miyapur", image: "/photos/jubilee.jpg" },
    // { name: "Kompally", image: "/photos/jubilee.jpg" },
    // { name: "Wells Fargo", image: "/photos/jubilee.jpg" },
  ];

  const blrOutlets = [
    {
      name: "Basavanagudi",
      image: "/photos/bengaluru2.jpg",
      locationUrl: "https://maps.app.goo.gl/2E4MVtnvo9ahrfHr6",
    },
    {
      name: "JP Nagar",
      image: "/photos/bengaluru2.jpg",
      locationUrl: "https://maps.app.goo.gl/4W4u83AqvHpEDr8t9",
    },
    // { name: "Bellandur", image: "/photos/bengaluru2.jpg" },
    // { name: "Electronic City", image: "/photos/bengaluru2.jpg" },
    // { name: "HSR Layout", image: "/photos/bengaluru2.jpg" },
    // { name: "Kalyan Nagar", image: "/photos/bengaluru2.jpg" },
    // { name: "Koramangala", image: "/photos/bengaluru2.jpg" },
    // { name: "Mahadevpura", image: "/photos/bengaluru2.jpg" },
    // { name: "Whitefield", image: "/photos/bengaluru2.jpg" },
  ];

  const mumOutlets = [
    {
      name: "BSE",
      image: "/photos/mumbai.jpg",
      locationUrl: "https://maps.app.goo.gl/iTwWqeMrXZmuPXjd6",
    },
    // { name: "BKC", image: "/photos/mumbai.jpg" },
    // { name: "Chembur", image: "/photos/mumbai.jpg" },
    // { name: "Powai", image: "/photos/mumbai.jpg" },
    // { name: "Pheonix", image: "/photos/mumbai.jpg" },
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

  if (!validCities.includes(city.toLowerCase())) {
    notFound(); // Show a 404 if the city is not valid
  }

  useEffect(() => {
    if (city) {
      // Scroll to the section if it exists
      const element = document.getElementById(city.toLowerCase());
      if (element) {
        const yOffset = -80;
        const y =
          element.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [city]);

  return (
    <div className="min-h-screen font-['Trebuchet_MS',_sans-serif] bg-[linear-gradient(to_bottom,_#CBEBF2_0%,_#F5D1D8_30%,_#CBEBF2_80%)]">
      <Header isScrolled={isScrolled} />
      <motion.main
        className="pt-40 md:pt-52"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.section variants={fadeInUp}>
          <FadeInElement>
            <DecoratedTitle title="Our Outlets" />
          </FadeInElement>
          {loading && <p className="text-center">Loading...</p>}
          <Outlet id="Hyderabad" outlets={hydOutlets} />
          <Outlet id="Bengaluru" outlets={blrOutlets} />
          <Outlet id="Mumbai" outlets={mumOutlets} />
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
}
