'use client'

import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { uploadImage } from '@/lib/uploadimage'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const productSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  price: z.string().min(1, 'Price is required').refine((val) => !isNaN(parseFloat(val)), 'Price must be a number'),
  skuId: z.string().min(1, 'SKU ID is required'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Category is required'),
})

type ProductFormData = z.infer<typeof productSchema>

export default function AddProductForm({ onSuccess }: { onSuccess: () => void }) {
  const { control, register, handleSubmit, formState: { errors }, reset } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema)
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [image, setImage] = useState<File | null>(null)
  const [categories, setCategories] = useState<{id: string, name: string}[]>([])
  const { toast } = useToast()

  useEffect(() => {
    const fetchCategories = async () => {
      // const querySnapshot = await getDocs(collection(db, 'categories'))
      // const categoriesData = querySnapshot.docs.map(doc => ({
      //   id: doc.id,
      //   name: doc.data().name as string
      // }))
      // setCategories(categoriesData)
    }
    fetchCategories()
  }, [])

  const onSubmit = async (data: ProductFormData) => {
    setIsSubmitting(true)
    try {
      let imageUrl = ''
      if (image) {
        imageUrl = await uploadImage(image)
      }
      await addDoc(collection(db, 'products'), {
        ...data,
        price: parseFloat(data.price),
        imageUrl
      })
      toast({
        title: "Success",
        description: "Product added successfully",
        variant: "success",
      })
      reset()
      setImage(null)
      onSuccess()
    } catch (error) {
      console.error('Error adding product: ', error)
      toast({
        title: "Error",
        description: "Failed to add product",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" {...register('name')} />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" step="0.01" {...register('price')} />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
      </div>
      <div>
        <Label htmlFor="skuId">SKU ID</Label>
        <Input id="skuId" {...register('skuId')} />
        {errors.skuId && <p className="text-red-500 text-sm">{errors.skuId.message}</p>}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register('description')} />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
      </div>
      <div>
        <Label htmlFor="image">Product Image</Label>
        <Input
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          accept="image/*"
        />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Adding...' : 'Add Product'}
      </Button>
    </form>
  )
}

