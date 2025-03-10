'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { collection, getDocs, CollectionReference } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import DecoratedTitle from '@/components/DecoratedTitle'
import { motion } from 'framer-motion'
import { Skeleton } from '@/components/ui/skeleton'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.4
    }
  }
}

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  skuID: string;
  category: string;
  group: string;
}

export function ProductsContent() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>([])
  const [groups, setGroups] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()
  const selectedCategory = searchParams.get('category')
  const selectedGroup = searchParams.get('group')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      const productsQuery: CollectionReference = collection(db, 'products_test')

      try {
        console.log('Fetching products from Firestore...')
        const querySnapshot = await getDocs(productsQuery)
        console.log('Query snapshot received:', querySnapshot.size, 'documents')
        
        const productsData = querySnapshot.docs.map(doc => {
          const data = doc.data()
          console.log('Document data:', data)
          return { id: doc.id, ...data } as Product
        })
        
        console.log('Processed products:', productsData)
        setProducts(productsData)

        // Extract unique categories and groups
        const uniqueCategories = Array.from(new Set(productsData.map(product => product.category)))
        const uniqueGroups = Array.from(new Set(productsData.map(product => product.group)))
        console.log('Unique categories:', uniqueCategories)
        console.log('Unique groups:', uniqueGroups)
        setCategories(uniqueCategories)
        setGroups(uniqueGroups)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const handleCategoryChange = (newCategory: string | null) => {
    if (newCategory) {
      router.push(`/products?category=${encodeURIComponent(newCategory)}`)
    } else {
      router.push('/products')
    }
  }

  const handleGroupChange = (newGroup: string | null) => {
    if (newGroup) {
      router.push(`/products?group=${encodeURIComponent(newGroup)}`)
    } else {
      router.push('/products')
    }
  }

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : selectedGroup
    ? products.filter(product => product.group === selectedGroup)
    : products

  console.log('Filtered products:', filteredProducts)

  return (
    <div className="min-h-screen bg-[#FEFEFA] font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />

      <main>
        <motion.section 
          className="py-12 bg-[#CBEBF2]"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <div className="container mx-auto px-4 pt-44">
            <motion.div variants={fadeInUp}>
              <DecoratedTitle title="Our Products" headingLevel="h1" className="mb-6" />
            </motion.div>
            <motion.div className="mb-6" variants={fadeInUp}>
              <Button
                onClick={() => {
                  handleCategoryChange(null)
                  handleGroupChange(null)
                }}
                className="mr-2 mb-2"
                variant={!selectedCategory && !selectedGroup ? 'default' : 'outline'}
              >
                All
              </Button>
              {groups.map((group) => (
                <Button
                  key={group}
                  onClick={() => handleGroupChange(group)}
                  className="mr-2 mb-2"
                  variant={selectedGroup === group ? 'default' : 'outline'}
                >
                  {group}
                </Button>
              ))}
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className="mr-2 mb-2"
                  variant={selectedCategory === category ? 'default' : 'outline'}
                >
                  {category}
                </Button>
              ))}
            </motion.div>
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              variants={fadeInUp}
            >
              {loading ? (
                Array(8).fill(0).map((_, index) => (
                  <div key={index} className="space-y-4">
                    <Skeleton className="h-48 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                ))
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center text-xl text-gray-500">
                  {selectedCategory || selectedGroup
                    ? "No products found for this category or group"
                    : "No products available"}
                </div>
              )}
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

