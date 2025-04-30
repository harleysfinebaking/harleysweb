"use client";

import React, { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { OrderModal } from "./OrderModal";
import { Volume2, VolumeX, X } from "lucide-react";

export default function HeroSection() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoEl.play().catch(() => {});
        } else {
          videoEl.pause();
        }
      },
      {
        threshold: 0.7, // 70% of video must be visible
      }
    );
    observer.observe(videoEl);
    return () => {
      observer.unobserve(videoEl);
    };
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
    setIsMuted(!isMuted)
  };

  return (
    <section className="relative overflow-hidden">
      <video
        ref={videoRef}
        playsInline
        loop
        autoPlay
        muted
        preload="none"
        poster="/photos/harleys_GWR_Photo.webp"
        className="w-full h-[50vh] md:h-[65vh] lg:h-screen object-cover"
      >
        <source src={"https://harleysfinebaking.github.io/video-assets/GWR_VIDEO_NEW.mp4"} type="video/mp4" />
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
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </section>
  );
}
