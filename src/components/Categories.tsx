'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import DecoratedTitle from '@/components/DecoratedTitle'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'

interface CategoryItem {
  name: string;
  imagePath: string;
  price: string;
  skuId?: string;
}

interface CategorySectionProps {
  title: string;
  items: CategoryItem[];
  columns: string;
  backgroundColor: string;
  cardBackgroundColor: string;
}

interface Product {
  id: string;
  name: string;
  skuId: string;
  category: string;
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

const CategorySection = ({ title, items, columns, backgroundColor, cardBackgroundColor }: CategorySectionProps) => {
  const isContainAndBlur = title === "Exotic Coffee" || title === "Bakery & Confectionery";

  return (
    <div className={`py-12 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <FadeInElement>
          <DecoratedTitle title={title} headingLevel="h2" className="mb-8" />
        </FadeInElement>
        <div className={`grid ${columns} gap-6`}>
          {items.map((item, index) => (
            <FadeInElement key={index} delay={index * 0.1}>
              {/* <Link href={`/products?category=${encodeURIComponent(item.name)}`}> */}
                <div className={`${cardBackgroundColor} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300`}>
                  <div className={`relative ${isContainAndBlur ? "aspect-[22/9]" : "aspect-[4/3]"} overflow-hidden`}>
                    {isContainAndBlur && (
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={item.imagePath}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                          className="scale-110 blur-lg"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    <div className={`absolute inset-0 ${isContainAndBlur ? 'z-10' : ''} flex items-center justify-center`}>
                      <Image
                        src={item.imagePath}
                        alt={item.name}
                        layout="fill"
                        objectFit={isContainAndBlur ? "cover" : "cover"}
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold text-gray-600">{item.name}</h3>
                  </div>
                </div>
              
            </FadeInElement>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Categories() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'))
      const productsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Product[]
      setProducts(productsData)
    }

    fetchProducts()
  }, [])

  const categories = [
    {
      title: "Artisan Desserts",
      items: [
        { name: "Medoviks", imagePath: "/photos/belgianmedovik.JPG", price: "$15.00" },
        { name: "Macarons", imagePath: "/photos/categories/macarons.jpg", price: "$15.00" },
        { name: "Cheesecakes", imagePath: "/photos/categories/blueberry-cheesecake.jpg", price: "$15.00" },
        { name: "Tres Leches", imagePath: "/photos/categories/tresleches.jpg", price: "$15.00" }
      ],
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      cardBackgroundColor: "bg-white/30"
    },
    {
      title: "Exotic Coffee",
      items: [
        { name: "Classic Hot Coffee", imagePath: "/photos/categories/italian-cappuccino.jpg", price: "$15.00" },
        { name: "Signature Cold Coffee", imagePath: "/photos/categories/icedcoffee.jpg", price: "$15.00" }
      ],
      columns: "grid-cols-1 sm:grid-cols-2",
      cardBackgroundColor: "bg-white/30"
    },
    {
      title: "Special Occasions",
      items: [
        { name: "Celebration Cakes", imagePath: "/photos/categories/celebration-russianmedovik.jpg", price: "$15.00" },
        { name: "Assortments", imagePath: "/photos/categories/assortedmedovik.jpg", price: "$15.00" },
        { name: "Combinations", imagePath: "/photos/combination.jpg", price: "$15.00" },
        { name: "Customized Cakes", imagePath: "/photos/categories/customcake.jpg", price: "$15.00" }
      ],
      columns: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
      cardBackgroundColor: "bg-white/30"
    },
    {
      title: "Bakery & Confectionery",
      items: [
        { name: "Cookies", imagePath: "/photos/categories/cookies.jpg", price: "$15.00" },
        { name: "Burgers & Sandwiches", imagePath: "/photos/categories/croissantburger.jpg", price: "$15.00" }
      ],
      columns: "grid-cols-1 sm:grid-cols-2",
      cardBackgroundColor: "bg-white/30"
    }
  ];

  // Add skuId to category items if a matching product is found
  const categoriesWithLinks = categories.map(category => ({
    ...category,
    items: category.items.map(item => {
      const matchingProduct = products.find(p => p.name.toLowerCase() === item.name.toLowerCase())
      return matchingProduct ? { ...item, skuId: matchingProduct.skuId } : item
    })
  }))

  return (
    <section id="menu" className="bg-[#CBEBF2]">
      {categoriesWithLinks.map((category, index) => (
        <FadeInElement key={index} delay={index * 0.2}>
          <CategorySection
            title={category.title}
            items={category.items}
            columns={category.columns}
            backgroundColor={index % 2 === 0 ? "bg-[#CBEBF2]" : "bg-[#F5D1D8]"}
            cardBackgroundColor={category.cardBackgroundColor}
          />
        </FadeInElement>
      ))}
    </section>
  )
}

