import type { Metadata } from "next";
import { Lato, Mulish, Open_Sans, Outfit, Poppins, Inter, Alumni_Sans_Pinstripe, Quicksand, Montserrat_Alternates, Montserrat, Imperial_Script } from 'next/font/google';
import "./globals.css";

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
    template: "%s | Harley's Fine Baking"
  },
  description: "Harley’s is pioneering a unique coffee experience inspired by the European tradition of “Kaffee und Kuchen”—a ritual akin to India’s beloved “Chai Biscuit.” Harley’s is redefining India’s coffee culture with the concept of pairing—the tradition of enjoying coffee with a perfectly matched cake.",
  keywords: ["bakery", "fine baking", "Medovik", "cakes", "Kaffee und Kuchen", "artisan", "European delicacies"],
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
    description: "Indulge in elegance with Harley's signature Medovik cakes and European delicacies.",
    url: "https://www.harleys.com",
    siteName: "Harley's Fine Baking",
    images: [
      {
        url: "https://www.harleys.com/og-image.jpg",
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
    description: "Harley’s is pioneering a unique coffee experience inspired by the European tradition of “Kaffee und Kuchen”—a ritual akin to India’s beloved “Chai Biscuit.” Harley’s is redefining India’s coffee culture with the concept of pairing—the tradition of enjoying coffee with a perfectly matched cake.",
    images: ["https://www.harleys.com/twitter-image.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
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
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    // bing: "bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${imperial.variable} ${lato.variable} ${montserrat.variable} ${mulish.variable} ${openSans.variable} ${outfit.variable} ${poppins.variable} ${inter.variable} ${alumni.variable} ${quicksand.variable} ${montserratalt.variable}  font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}