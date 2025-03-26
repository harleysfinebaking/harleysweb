'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { OrderModal } from './OrderModal'
import { motion, AnimatePresence } from 'framer-motion'
import { Marquee } from './Marquee'

const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function Header({ isScrolled }: { isScrolled: boolean }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMarquee, setShowMarquee] = useState(true);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowMarquee(!isScrolled);
  }, [isScrolled]);

  const scrollToSection = (sectionId: string) => {
    router.push("/home");
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        const yOffset = -80;
        const y =
          section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  const menuItems = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Menu", action: () => scrollToSection("menu") },
    { label: "Locations", href: "/outlets" },
    { label: "Foundation", href: "/foundation" },
    { label: "Blog", href: "/coming-soon" },
    { label: "Order Now", action: () => setIsOrderModalOpen(true) },
  ];

  const marqueeTexts = [
    // "Guinness World Record Attempt: Largest Medovik Cake on 6th December 2024 at Maaya Luxury Convention, Hyderabad.",
    "HARLEY'S",
    // "Grand Opening: Harley's Ivory Lounge in Kala Ghoda, Mumbai on 24th November 2024.",
    // "Fine Baking",
    // "New Outlet: Second Ivory Lounge in Basavanagudi, Bangalore opened on 9th November 2024.",
    // "HARLEY'S",
    "Harley's – Celebrate Every Moment!",
    "Fine Baking",
    "We Did It! - Broke the “Guinness World Record!” : The legendary Russian Medovik Cake now stands immortalized in history, proudly representing Harley’s excellence and innovation.",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <Marquee texts={marqueeTexts} showMarquee={showMarquee} />
      <div
        className={`transition-all duration-300 ${
          isScrolled ? "bg-[#CBEBF2]/90" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-2 md:py-4">
          <div className="flex justify-between items-center md:hidden z-10">
            <Link href="/home" className="text-2xl font-bold text-[#4A4A4A]">
              <Image
                src={isScrolled ? "/textlogo/smalllogo.png" : "/logo.png"}
                alt="Harley's Logo"
                width={isScrolled ? 100 : 200}
                height={isScrolled ? 50 : 200}
                className={isScrolled ? "w-20 h-auto py-4" : "w-20 h-auto"}
              />
            </Link>
            <Button
              className={`
          md:hidden z-50 w-12 h-12 
          bg-pink-100/10 hover:bg-blue-100/30 
          flex items-center justify-center 
          fixed right-4 
          transition-all duration-300 ease-in-out
          ${isScrolled ? "top-4" : "top-16"}
        `}
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <motion.div
                animate={isMenuOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 180 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </Button>
          </div>

          <nav
            className={`hidden md:flex justify-between items-center relative ${
              isScrolled ? "h-16" : "h-32"
            } transition-all duration-300`}
          >
            <div
              className={`flex space-x-6 items-center absolute left-0 transition-all duration-300 ${
                isScrolled ? "top-1/2 -translate-y-1/2" : ""
              }`}
            >
              <Link
                href="/about"
                className={`hover:text-[#d45770] transition-colors text-lg ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
              >
                About
              </Link>
              <a
                href="#menu"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("menu");
                }}
                className={`hover:text-[#d45770] transition-colors text-lg ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
              >
                Menu
              </a>
              <a
                href="#order"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOrderModalOpen(true);
                }}
                className={`hover:text-[#d45770] transition-colors text-lg ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
              >
                Order Now
              </a>
            </div>
            <div className="flex-grow flex justify-center items-center">
              <div
                className={`relative inline-block transition-all duration-300 ${
                  isScrolled ? "w-32 h-12" : "w-[200px] h-[130px]"
                }`}
              >
                {!isScrolled && (
                  <div
                    className="absolute bg-[#CBEBF2]/30 backdrop-blur-md shadow-lg"
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  ></div>
                )}
                <Link
                  href="/home"
                  className="relative z-10 inline-flex items-center justify-center w-full h-full"
                >
                  <Image
                    src={isScrolled ? "/textlogo/smalllogo.png" : "/logo.png"}
                    alt="Harley's Logo"
                    width={isScrolled ? 100 : 120}
                    height={isScrolled ? 50 : 120}
                    className="w-auto h-auto max-h-full"
                  />
                </Link>
              </div>
            </div>
            <div
              className={`flex space-x-6 items-center absolute right-0 transition-all duration-300 ${
                isScrolled ? "top-1/2 -translate-y-1/2" : ""
              }`}
            >
              <Link
                href="/outlets"
                className={`hover:text-[#d45770] transition-colors text-lg ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
                onClick={() => sessionStorage.clear()}
              >
                Locations
              </Link>
              <Link
                href="/foundation"
                className={`hover:text-[#d45770] transition-colors text-lg ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
              >
                Foundation
              </Link>
              <Link
                href="/coming-soon"
                className={`hover:text-[#d45770] transition-colors text-lg ${
                  isScrolled ? "text-gray-800" : "text-black"
                }`}
              >
                Blog
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden fixed top-0 right-0 w-1/2 h-full bg-white/30 backdrop-blur-md"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
          >
            <nav className="flex flex-col items-end space-y-8 py-20 px-8 h-full mt-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.label}
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-[#d45770] transition-colors text-2xl"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        item.action();
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-700 hover:text-[#d45770] transition-colors text-2xl"
                    >
                      {item.label}
                    </button>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </header>
  );
}