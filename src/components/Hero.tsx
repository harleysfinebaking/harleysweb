"use client";

import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OrderModal } from "./OrderModal";

export default function HeroSection() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden container mx-auto">
      <video
        playsInline
        loop
        autoPlay
        muted
        controls
        className="w-full h-[50vh] lg:h-screen object-cover lg:object-fill"
      >
        <source src={"/photos/GWR_VIDEO.mp4"} type="video/mp4" />
      </video>
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
