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
      location: "Pune",
      contact: 6383372953,
    },
    {
      id: "2",
      designation: "Shift Manager",
      positions: 1,
      experience: "3+ Yrs Experience in Premium fine dining café & restaurant",
      location: "Mumbai",
      contact: 6383372953,
    },
    {
      id: "3",
      designation: "Barista",
      positions: 2,
      experience: "1+ Yrs Experience in Barista",
      location: "Pune",
      contact: 6383372953,
    },
    {
      id: "4",
      designation: "Barista",
      positions: 2,
      experience: "1+ Yrs Experience in Barista",
      location: "Mumbai",
      contact: 6383372953,
    },
    {
      id: "5",
      designation: "Senior Team Member (Captains)",
      positions: 2,
      experience: "3+ Yrs Experience in Similar role",
      location: "Pune",
      contact: 6383372953,
    },
    {
      id: "6",
      designation: "Senior Team Member (Captains)",
      positions: 3,
      experience: "3+ Yrs Experience in Similar role",
      location: "Mumbai",
      contact: 6383372953,
    },
    {
      id: "7",
      designation: "Team Members (Waiters & Waitresses)",
      positions: 2,
      experience: "1+ Yrs Experience (Freshers also can apply)",
      location: "Pune",
      contact: 6383372953,
    },
    {
      id: "8",
      designation: "Team Members (Waiters & Waitresses)",
      positions: 2,
      experience: "1+ Yrs Experience (Freshers also can apply)",
      location: "Mumbai",
      contact: 6383372953,
    },
    {
      id: "9",
      designation: "CDP/DCDP (Continental)",
      positions: 5,
      experience: "3+ Yrs Experience in Premium Café & Restaurant",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "10",
      designation: "CDP/DCDP (Pastry)",
      positions: 5,
      experience: "3+ Yrs Experience in professional Pastry kitchen",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "11",
      designation: "Senior Food Operator / Commis I / Commis II – Pastry",
      positions: 5,
      experience: "2+ Yrs Experience as Commis I/II – Pastry in Premium Restaurant",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "12",
      designation: "Junior Food Operator / Commis III – Pastry",
      positions: 4,
      experience: "0 - 1 Experience in Pastry Preparation & Kitchen Operations",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "13",
      designation: "Junior Food Operator / Commis III – Pastry",
      positions: 4,
      experience: "0 - 1 Experience in Pastry Preparation & Kitchen Operations",
      location: "Pune",
      contact: 6383372953,
    },
    {
      id: "14",
      designation: "Junior Food Operator / Commis III – Pastry",
      positions: 4,
      experience: "0 - 1 Experience in Pastry Preparation & Kitchen Operations",
      location: "Mumbai",
      contact: 6383372953,
    },
    {
      id: "15",
      designation: "Junior Food Operator / Commis III – Pastry",
      positions: 4,
      experience: "0 - 1 Experience in Pastry Preparation & Kitchen Operations",
      location: "Delhi",
      contact: 6383372953,
    },
    {
      id: "16",
      designation: "Quality Inspector - Project",
      positions: 2,
      experience: "3+ Yrs Experience in Project Quality Inspection & Control",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "17",
      designation: "Application Analyst - Posist (CRM Sales)",
      positions: 2,
      experience: "3+ Yrs Experience in Application Analysis & CRM Sales",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "18",
      designation: "Odoo Python Developer",
      positions: 2,
      experience: "3+ Yrs Experience in Odoo Python Development",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "19",
      designation: "Program Manager, Civil Interior Filout",
      positions: 1,
      experience: "8+ Yrs Experience in Civil Interior Filout Projects",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "20",
      designation: "Marketing Executive",
      positions: 2,
      experience: "2+ Yrs Experience in Digital Marketing",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "21",
      designation: "QC Lead",
      positions: 1,
      experience: "5+ Yrs Experience in Quality Control",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "22",
      designation: "Production Lead",
      positions: 1,
      experience: "5+ Yrs Experience in Production Management",
      location: "Bengaluru",
      contact: 6383372953,
    },
    {
      id: "23",
      designation: "Production Lead",
      positions: 1,
      experience: "5+ Yrs Experience in Production Management",
      location: "Mumbai",
      contact: 6383372953,
    },
    {
      id: "24",
      designation: "Warehouse Lead",
      positions: 1,
      experience: "5+ Yrs Experience in Warehouse Management",
      location: "Mumbai",
      contact: 6383372953,
    },
    {
      id: "25",
      designation: "HR Payroll Specialist",
      positions: 1,
      experience: "5+ Yrs Experience in HR Payroll Management",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "26",
      designation: "Store Helper",
      positions: 4,
      experience: "0 - 1 Yrs Experience",
      location: "Hyderabad",
      contact: 6383372953,
    },
    {
      id: "27",
      designation: "HR Executive",
      positions: 2,
      experience: "1+ Yrs Experience in HR Operations",
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
