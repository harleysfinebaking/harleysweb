import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Facebook, Twitter } from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-[#CBEBF2]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-[#4A4A4A]">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-bold mb-4 text-[#4A4A4A]">Visit Us</h3>
            <p className="mb-4">123 Pastry Lane, Sweet Town,<br />Dessert City, 56789</p>
            <p className="mb-4">Phone: (555) 123-4567</p>
            <p className="mb-4">Email: info@harleys.com</p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#4A4A4A] hover:text-[#F5D1D8]"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="text-[#4A4A4A] hover:text-[#F5D1D8]"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-[#4A4A4A] hover:text-[#F5D1D8]"><Twitter className="h-6 w-6" /></a>
            </div>
          </div>
          {/* <div className="md:w-1/2">
            <h3 className="text-xl font-bold mb-4 text-[#4A4A4A]">Send Us a Message</h3>
            <form className="space-y-4">
              <Input type="text" placeholder="Your Name" className="w-full" />
              <Input type="email" placeholder="Your Email" className="w-full" />
              <textarea
                placeholder="Your Message"
                className="w-full h-32 px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                required
              ></textarea>
              <Button type="submit" className="bg-[#F5D1D8] text-[#4A4A4A] hover:bg-[#CBEBF2]">Send Message</Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  )
}