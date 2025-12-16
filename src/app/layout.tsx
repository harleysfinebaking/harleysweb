import type { Metadata } from "next";
import { Lato, Mulish, Open_Sans, Outfit, Poppins, Inter, Alumni_Sans_Pinstripe, Quicksand, Montserrat_Alternates, Montserrat, Imperial_Script } from 'next/font/google';
import Script from 'next/script';
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import { Header } from "@/components/Header";

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-lato',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
});

const mulish = Mulish({
  subsets: ['latin'],
  variable: '--font-mulish',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-poppins',
});

const alumni = Alumni_Sans_Pinstripe({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-alumni',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-quicksand',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-montserrat',
});

const montserratalt = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-montserratalt',
});

const imperial = Imperial_Script({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-imperial',
});

export const metadata: Metadata = {
  title: {
    default: "Harley's Fine Baking | Artisan Cakes & Exotic Coffee",
    template: "%s | Harley's Fine Baking",
  },

  description:
    "Harley's brings Europe's famous “Kaffee und Kuchen” to India, akin to our beloved “Chai Biscuit” tradition, we pair specialty coffee with matched cakes.",
  keywords: [
    "Harley's",
    "Harley",
    "bakery",
    "fine baking",
    "Medovik",
    "cakes",
    "Kaffee und Kuchen",
    "artisan",
    "European delicacies",
  ],
  authors: [{ name: "Harley's Fine Baking" }],
  creator: "Harley's Fine Baking",
  publisher: "Harley's Fine Baking",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Harley's Fine Baking",
    description:
      "Indulge in elegance with Harley's signature Medovik cakes and European delicacies.",
    url: "https://www.harleys.com",
    siteName: "Harley's Fine Baking",
    images: [
      {
        url: "/photos/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "Harley's Fine Baking | Artisan Cakes & Exotic Coffee",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harley's Fine Baking",
    description:
      "Harley's brings Europe's famous “Kaffee und Kuchen” to India, akin to our beloved “Chai Biscuit” tradition, we pair specialty coffee with matched cakes.",
    images: ["/photos/hero1.jpg"],
    creator: "@HarleysFineBaking",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon.png", sizes: "32x32", type: "image/png" }],
  },
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FEFEFA" },
    { media: "(prefers-color-scheme: dark)", color: "#4A4A4A" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
    yandex: "YOUR_YANDEX_VERIFICATION_CODE",
  },
  alternates: {
    canonical: "https://www.harleys.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Harley's Fine Baking",
    "image": [
      "https://www.harleys.com/photos/hero1.jpg",
      "https://www.harleys.com/photos/categories/medovik.jpg"
    ],
    "@id": "https://www.harleys.com",
    "url": "https://www.harleys.com",
    "telephone": "+918083098888",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Survey No:55/E, 1st Floor, Nanakramguda Rd, below Medics Healthcare",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500032",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4198006,
      "longitude": 78.3541973
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "09:00",
        "closes": "21:00"
      }
    ],
    "menu": "https://www.harleys.com/#menu",
    "servesCuisine": [
      "European",
      "Bakery",
      "Coffee"
    ],
    "sameAs": [
      "https://www.instagram.com/harleysfinebaking",
      "https://www.facebook.com/harleysfinebaking"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.harleys.com" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${imperial.variable} ${lato.variable} ${montserrat.variable} ${mulish.variable} ${openSans.variable} ${outfit.variable} ${poppins.variable} ${inter.variable} ${alumni.variable} ${quicksand.variable} ${montserratalt.variable}  font-sans antialiased`}
      >
        <h1 className='visually-hidden'>Harley's Fine Baking - Artisan Cakes & Exotic Coffee</h1>
        <h2 className='visually-hidden'>Harley's Fine Baking - Artisan Cakes & Exotic Coffee</h2>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}