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
      designation: "Recruiter",
      positions: 1,
      experience: "5 to 8 Yrs Experience in Recruitment",
      location: "Hyderabad",
      contact: 9247523771,
    },
    {
      id: "2",
      designation: "Purchase Manager - Food & Beverage",
      positions: 1,
      experience: "5 to 10 Yrs Experience in Food & Beverage Purchase Management",
      location: "Hyderabad",
      contact: 9247523771,
    },
    {
      id: "3",
      designation: "Warehouse Lead",
      positions: 2,
      experience: "3 to 6 Yrs Experience in Warehouse Management",
      location: "Hyderabad, NCR",
      contact: 9247523771,
    },
    {
      id: "4",
      designation: "Maintenance Lead",
      positions: 1,
      experience: "5 to 8 Yrs Experience in Maintenance Management",
      location: "Bangalore",
      contact: 9247523771,
    },
    {
      id: "5",
      designation: "Inventory Executive",
      positions: 3,
      experience: "3 to 6 Yrs Experience in Inventory Management",
      location: "Bangalore, Mumbai & NCR",
      contact: 9247523771,
    },
    {
      id: "6",
      designation: "Ivory /  Store Manager",
      positions: 3,
      experience: "5 to 10 Yrs Experience in Store Management",
      location: "Hyderabad, Bangalore & Mumbai",
      contact: 9247523771,
    },
    {
      id: "7",
      designation: "Shift Manager",
      positions: 5,
      experience: "3 to 6 Yrs Experience in Management",
      location: "Hyderabad, Bangalore, Pune, NCR & Mumbai",
      contact: 9247523771,
    },
    {
      id: "8",
      designation: "F & B Service - Team Leader",
      positions: 50,
      experience: "1 to 3 Yrs Experience in Food & Beverage Service",
      location: "Hyderabad, Mumbai, Bangalore, Pune & NCR",
      contact: 9247523771,
    },
    {
      id: "9",
      designation: "QC Executives",
      positions: 3,
      experience: "2 to 5 Yrs Experience in Quality Control",
      location: "Hyderabad, Bangalore & Mumbai",
      contact: 9247523771,
    },
    {
      id: "10",
      designation: "Production Lead",
      positions: 2,
      experience: "5 to 7 Yrs Experience in Production Management",
      location: "Hyderabad & Mumbai",
      contact: 9247523771,
    },
    {
      id: "11",
      designation: "Production Executives",
      positions: 2,
      experience: "2 to 5 Yrs Experience in Production Management",
      location: "Hyderabad & Mumbai",
      contact: 9247523771,
    },
    {
      id: "12",
      designation: "Continental & Pastry - Commis I & III",
      positions: 10,
      experience: "0 - 5 Experience in Continental & Pastry Preparation & Kitchen Operations",
      location: "Hyderabad, Bangalore, Pune, Mumbai & Delhi",
      contact: 9247523771,
    },
    {
      id: "13",
      designation: "DCDP - Continental",
      positions: 3,
      experience: "3 to 5 Yrs Experience in Continental Preparation & Kitchen Operations",
      location: "Hyderabad, Bangalore & Vijayawada",
      contact: 9247523771,
    },
    {
      id: "14",
      designation: "CDP - Continental & Pastry",
      positions: 5,
      experience: "4 to 6 Yrs Experience in Continental & Pastry Preparation & Kitchen Operations",
      location: "Hyderabad, Mumbai, Bangalore, Pune & Vijayawada",
      contact: 9247523771,
    },
    {
      id: "15",
      designation: "Application Analyst - Posist (CRM Sales)",
      positions: 2,
      experience: "3+ Yrs Experience in Application Analysis & CRM Sales",
      location: "Hyderabad",
      contact: 9247523771,
    },
    {
      id: "16",
      designation: "Odoo Python Developer",
      positions: 2,
      experience: "3+ Yrs Experience in Odoo Python Development",
      location: "Hyderabad",
      contact: 9247523771,
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
