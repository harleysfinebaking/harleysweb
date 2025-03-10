'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import DecoratedTitle from '@/components/DecoratedTitle'
// import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  category: string;
  skuId: string;
}

interface Category {
  id: string;
  name: string;
  group: string;
  imageUrl: string;
}

export function ProductDetails({ skuId }: { skuId: string }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [category, setCategory] = useState<Category | null>(null)
  const [loading, setLoading] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const fetchProductAndCategory = async () => {
      setLoading(true)
      try {
        const productsRef = collection(db, 'products_test')
        const q = query(productsRef, where('skuId', '==', skuId))
        const querySnapshot = await getDocs(q)
        
        if (!querySnapshot.empty) {
          const productDoc = querySnapshot.docs[0]
          const productData = { id: productDoc.id, ...productDoc.data() } as Product
          setProduct(productData)

          // Fetch category
          const categoryRef = doc(db, 'categories', productData.category)
          const categoryDoc = await getDoc(categoryRef)
          if (categoryDoc.exists()) {
            setCategory({ id: categoryDoc.id, ...categoryDoc.data() } as Category)
          }
        } else {
          console.error("Product not found")
        }
      } catch (error) {
        console.error("Error fetching product or category:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductAndCategory()
  }, [skuId])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#FEFEFA] font-['Trebuchet_MS',_sans-serif]">
        <Header isScrolled={isScrolled} />
        <main className="container mx-auto px-4 py-8 ">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <div className="grid md:grid-cols-2 gap-8 ">
            <Skeleton className="h-96 w-full" />
            <div className="space-y-4">
              <Skeleton className="h-6 w-1/2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!product || !category) {
    return <div>Product or category not found</div>
  }

  return (
    <div className="min-h-screen bg-[#CBEBF2] font-['Trebuchet_MS',_sans-serif]">
      <Header isScrolled={isScrolled} />
      <main className="container mx-auto px-4 py-8 pt-56">
        <DecoratedTitle title={product.name} headingLevel="h1" className="mb-8" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative h-96">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-[120px,1fr] gap-2 items-center">
              <p className="text-gray-500 font-medium">Name:</p>
              <p className="text-2xl font-semibold text-gray-600">{product.name}</p>
            </div>
            <div className="grid grid-cols-[120px,1fr] gap-2 items-center">
              <p className="text-gray-500 font-medium">Category:</p>
              <p className="text-xl font-normal text-gray-600">{category.name}</p>
            </div>
            <div className="grid grid-cols-[120px,1fr] gap-2 items-start">
              <p className="text-gray-500 font-medium">Description:</p>
              <p className="text-gray-700">{product.description}</p>
            </div>
            <div className="grid grid-cols-[120px,1fr] gap-2 items-center">
              <p className="text-gray-500 font-medium">Price:</p>
              <p className="text-2xl font-bold">₹{product.price.toFixed(2)}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

