import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#CBEBF2] py-12 font-['Trebuchet_MS',_sans-serif]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <Image src="/logo.png" alt="Harley's Fine Baking" width={120} height={120} className="w-24 h-auto" />
            <div className='text-xs leading-relaxed py-2'>
            {/* <p>Harley’s Corporate, Survey No:55/E,</p>
              <p>Nanakramguda Rd, Hyderabad, Telangana 500032.</p> */}
              </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {['About', 'Menu', 'Contact', 'Locations','Privacy Policy', 'Terms of Service'].map((link) => (
                <Link key={link} href="#" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                  {link}
                </Link>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              <Link href="#" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="flex flex-col items-center md:items-end text-sm text-[#4A4A4A]">
              
              <Link href="mailto:care@harleys.in" className="hover:text-[#d45770] transition-colors">
                care@harleys.com
              </Link>
              <Link href="tel:8083098888" className="hover:text-[#d45770] transition-colors">
                +91 80830 98888
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-[#4A4A4A]/10 text-center text-xs text-[#4A4A4A]">
          <p>Crafted with ❤️, just like our Baking. </p>
        </div>
        <div className=" mt-1 text-center text-sm text-[#4A4A4A]">
          <p>&copy; {new Date().getFullYear()} Harley's Fine Baking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}