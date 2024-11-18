import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#CBEBF2] pt-12 pb-4 font-['Trebuchet_MS',_sans-serif]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="mb-8 md:mb-0">
            <Image src="/logo.png" alt="Harley's Fine Baking" width={120} height={120} className="w-24 h-auto" />
            <div className='text-xs leading-relaxed py-2'>
            {/* <p>Harley's Corporate, Survey No:55/E,</p>
              <p>Nanakramguda Rd, Hyderabad, Telangana 500032.</p> */}
              </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-4">
            <nav className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <Link href="#about" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                About
              </Link>
              <Link href="#menu" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                Menu
              </Link>
              <Link href="#locations" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                Locations
              </Link>
              <Link href="/coming-soon" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                Foundation
              </Link>
              <Link href="/coming-soon" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                Blog
              </Link>
            </nav>
            
            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/harleysfinebaking" target="_blank" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://www.facebook.com/harleysfinebaking" target="_blank" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/company/harleys"  target="_blank" className="text-[#4A4A4A] hover:text-[#d45770] transition-colors">
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
        <div className="my-4 pt-4 border-t border-[#4A4A4A]/10 text-center">
          <Image 
            src="/photos/happiness.png" 
            alt="Harley's is Happiness" 
            width={70} 
            height={40} 
            className=" bg-[#f5d1d8] p-4 mx-auto h-auto w-auto"
          />
        </div>
        <div className="mt-1  text-center text-sm text-[#4A4A4A]">
          <p>&copy; {new Date().getFullYear()} Harley's Fine Baking. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}