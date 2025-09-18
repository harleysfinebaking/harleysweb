"use client";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Careers from "@/components/careers";

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

export default function CareersPage() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const openings = [
    {
      id: "1",
      designation: "Ivory Lounge Manager",
      positions: 1,
      experience: "5+ Yrs Experience in Premium fine dining café & restaurant",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "2",
      designation: "Shift Manager",
      positions: 2,
      experience: "3+ Yrs Experience in Premium fine dining café & restaurant",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "3",
      designation: "Senior Barista",
      positions: 1,
      experience: "3+ Yrs Experience in Barista",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "4",
      designation: "Barista",
      positions: 1,
      experience: "1+ Yrs Experience in Barista",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "5",
      designation: "Junior Barista",
      positions: 1,
      experience: "0-1 Yrs Experience in Barista (Freshers also can apply)",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "6",
      designation: "Senior Team Member (Captains)",
      positions: 4,
      experience: "3+ Yrs Experience in Similar role",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "7",
      designation: "Team Members (Waiters & Waitresses)",
      positions: 4,
      experience: "1+ Yrs Experience (Freshers also can apply)",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "8",
      designation: "CDP (Continental)",
      positions: 1,
      experience: "3+ Yrs Experience in Premium Café & Restaurant",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "9",
      designation: "Commi 1 (Continental)",
      positions: 2,
      experience: "3+ Yrs Experience in Premium Café & Restaurant",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "10",
      designation: "Commi 2 (Continental)",
      positions: 1,
      experience: "2+ Yrs Experience in Premium Café & Restaurant",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "11",
      designation: "Commi 3 (Continental)",
      positions: 1,
      experience: "1+ Yrs Experience (Freshers also can apply)",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "23",
      designation: "Store Manager",
      positions: 1,
      experience: "5+ Yrs Experience in Premium fine dining café & restaurant",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "24",
      designation: "Asst Store Manager",
      positions: 2,
      experience: "3+ years experience in premium fine dining & restaurants",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "25",
      designation: "Helper",
      positions: 6,
      experience:
        "0-1 Yrs Experience in Store Helper and Freshers Also can apply",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "26",
      designation: "Dispatch Manager",
      positions: 1,
      experience: "3+ Yrs Experience in Premium Café & Restaurant",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "27",
      designation: "Asst. Dispatch Manager",
      positions: 2,
      experience: "1+ Yrs Experience and Freshers Also can apply",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "12",
      designation: "Ivory Lounge Manager",
      positions: 1,
      experience: "5+ Yrs Experience in Premium fine dining café & restaurant",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "13",
      designation: "Shift Manager",
      positions: 2,
      experience: "3+ Yrs Experience in Premium fine dining café & restaurant",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "14",
      designation: "Senior Barista",
      positions: 1,
      experience: "3+ Yrs Experience in Barista",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "15",
      designation: "Barista",
      positions: 1,
      experience: "1+ Yrs Experience in Barista",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "16",
      designation: "Junior Barista",
      positions: 1,
      experience: "0-1 Yrs Experience in Barista and Freshers Also can apply",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "17",
      designation: "Senior Team Member (Captains)",
      positions: 4,
      experience: "3+ Yrs Experience in Similar role",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "18",
      designation: "Team Members (Waiters & Waitresses)",
      positions: 4,
      experience: "1+ Yrs Experience and Freshers Also can apply",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "19",
      designation: "CDP (Continental)",
      positions: 1,
      experience: "3+ Yrs Experience in Premium Café & Restaurant",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "20",
      designation: "Commi 1 (Continental)",
      positions: 2,
      experience: "3+ Yrs Experience in Premium Café & Restaurant",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "21",
      designation: "Commi 2 (Continental)",
      positions: 1,
      experience: "2+ Yrs Experience in Premium Café & Restaurant",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "22",
      designation: "Commi 3 (Continental)",
      positions: 1,
      experience: "1+ Yrs Experience and Freshers Also can apply",
      location: "Hyderabad",
      contact: 6383372953,
    },
  ];

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
    <div className="min-h-screen font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />
      <motion.main
        className="pt-40 md:pt-52"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <motion.section variants={fadeInUp}>
          <Careers openings={openings} />
        </motion.section>
      </motion.main>
      <Footer />
    </div>
  );
}
