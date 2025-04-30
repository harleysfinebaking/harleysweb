import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Cookies Policy",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function CookiePolicy() {
  return (
    <div className="min-h-screen font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled />
      <main className="max-w-5xl mx-auto p-6 pt-28">
        <h1 className="text-2xl font-bold mb-4">Cookies Policy</h1>
        <p className="text-gray-700 mb-4">Last updated: 30-04-2025</p>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>
          <p>
            This Cookies Policy explains how we use cookies on our website. By using our website, you agree to the use of cookies as described in this policy.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">2. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device to help us understand how you use our website, enhance your experience, and improve our content and services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">3. How We Use Cookies</h2>
          <p>
            We use cookies for analytics purposes through Google Analytics. These cookies collect anonymized information about how visitors use our website, such as pages visited, time spent on site, and general interaction patterns. This helps us improve website performance and content relevance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-lg font-semibold mb-2">4. Managing Cookies</h2>
          <p>
            You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality and user experience of our website.
          </p>
        </section>
        <Link href="/home" className="text-blue-500 underline">
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
