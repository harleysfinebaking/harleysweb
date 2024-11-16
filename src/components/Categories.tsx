'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface CategoryItem {
  name: string;
  imagePath: string;
}

interface CategorySectionProps {
  title: string;
  items: CategoryItem[];
  columns: string;
  backgroundColor: string;
}

const FadeInElement = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  )
}

const CategorySection = ({ title, items, columns, backgroundColor }: CategorySectionProps) => (
  <div className={`py-16 ${backgroundColor}`}>
    <div className="container mx-auto px-4">
      <FadeInElement>
        <h2 className="text-4xl font-thin mb-12 text-pink-950 text-center">{title}</h2>
      </FadeInElement>
      <div className={`grid ${columns} gap-8`}>
        {items.map((item, index) => (
          <FadeInElement key={index} delay={index * 0.1}>
            <div className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <Image
                src={item.imagePath}
                alt={item.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-xl font-semibold text-white text-center transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">{item.name}</h3>
              </div>
              <Button className="absolute top-4 right-4 bg-[#f5d1d8] hover:bg-[#CBEBF2] text-pink-800 px-4 py-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Explore
              </Button>
            </div>
          </FadeInElement>
        ))}
      </div>
    </div>
  </div>
)

export default function Categories() {
  const categories = [
    {
      title: "Artisan Desserts",
      items: [
        { name: "Medoviks", imagePath: "/photos/danishmedovik.jpg" },
        { name: "Macarons", imagePath: "/photos/macaroons.jpg" },
        { name: "Cheesecakes", imagePath: "/photos/cheesecakes.jpg" },
        { name: "Tres Leches", imagePath: "/photos/croissant.jpg" }
      ],
      columns: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    },
    {
      title: "Exotic Coffee",
      items: [
        { name: "Classic Hot", imagePath: "/photos/koffeekuchen.png" },
        { name: "Signature Cold", imagePath: "/photos/coldcoffee.jpeg" }
      ],
      columns: "grid-cols-1 md:grid-cols-2 h-64"
    },
    {
      title: "Gifting Special",
      items: [
        { name: "Celebration Cakes", imagePath: "/photos/cake.jpg" },
        { name: "Assortments", imagePath: "/photos/assorted.jpg" },
        { name: "Combinations", imagePath: "/photos/combination.jpg" },
        { name: "Customized Cake", imagePath: "/photos/customcake.jpg" }
      ],
      columns: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
    },
    {
      title: "Bakery & Confectionery",
      items: [
        { name: "Cookies", imagePath: "/photos/cookies.jpg" },
        { name: "Burgers & Sandwiches", imagePath: "/photos/croissant.jpg" }
      ],
      columns: "grid-cols-1 md:grid-cols-2 h-64"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-[#f5d1d8] to-[#CBEBF2]">
      {categories.map((category, index) => (
        <FadeInElement key={index} delay={index * 0.2}>
          <CategorySection
            title={category.title}
            items={category.items}
            columns={category.columns}
            backgroundColor={index % 2 === 0 ? "bg-[#CBEBF2]/50" : "bg-[#f5d1d8]/50"}
          />
        </FadeInElement>
      ))}
    </section>
  )
}