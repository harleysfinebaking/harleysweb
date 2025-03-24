"use client";

import React, { useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OrderModal } from "./OrderModal";
import { Volume2, VolumeX } from "lucide-react";

export default function HeroSection() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

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
      <div className="md:hidden fixed bottom-12 left-0 right-0 z-50 flex justify-center">
        <button
          onClick={() => setIsOrderModalOpen(true)}
          className="bg-black hover:scale-105 text-white hover:bg-[#CBEBF2] hover:text-black text-lg px-6 py-2 rounded-md transition-colors duration-300 fixed-button"
        >
          Order Now
        </button>
      </div>
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </section>
  );
}
