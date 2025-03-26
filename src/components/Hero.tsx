"use client";

import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OrderModal } from "./OrderModal";
import {
  Facebook,
  Instagram,
  Linkedin,
  Phone,
  Plus,
  Utensils,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative overflow-hidden">
      <video
        ref={videoRef}
        playsInline
        loop
        autoPlay
        muted
        className="w-full h-[50vh] md:h-[65vh] lg:h-screen object-cover"
      >
        <source src={"/photos/GWR_VIDEO.mp4"} type="video/mp4" />
      </video>
      <button
        onClick={toggleMute}
        className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
      </button>
      <noscript>
        <h1>Harley's Fine Baking</h1>
      </noscript>
      <div className="fixed md:hidden bottom-5 right-5 flex flex-col items-end gap-y-4 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col items-end gap-2"
            >
              <div className="flex items-center space-x-2">
                <p className="text-sm bg-gray-200 px-2 rounded-md">Instagram</p>
                <Link
                  href={"https://www.instagram.com/harleysfinebaking"}
                  target="_blank"
                  className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:text-[#d45770]"
                >
                  <Instagram size={20} />
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm bg-gray-200 px-2 rounded-md">Facebook</p>
                <Link
                  href={"https://www.facebook.com/harleysfinebaking"}
                  target="_blank"
                  className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:text-[#d45770]"
                >
                  <Facebook size={20} />
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm bg-gray-200 px-2 rounded-md">LinkedIn</p>
                <Link
                  href={"https://www.linkedin.com/company/harleys"}
                  target="_blank"
                  className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:text-[#d45770]"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm bg-gray-200 px-2 rounded-md">Contact</p>
                <Link
                  href={"tel:8083098888"}
                  className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:text-[#d45770]"
                >
                  <Phone size={20} />
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <p className="text-sm bg-gray-200 px-2 rounded-md">Order Now</p>
                <button
                  onClick={() => {
                    setIsOrderModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:text-[#d45770]"
                >
                  <Utensils size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center shadow-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Plus size={20} />}
        </button>
      </div>
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </section>
  );
}
