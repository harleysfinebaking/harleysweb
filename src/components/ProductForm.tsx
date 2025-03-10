'use client'

import { useState, useEffect } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { uploadImage } from '@/lib/uploadimage'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ProductForm() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [skuId, setSkuId] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [categories, setCategories] = useState<{id: string, name: string, group: string}[]>([])

  useEffect(() => {
    const fetchCategories = async () => {
      const querySnapshot = await getDocs(collection(db, 'categories'))
      const categoriesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data() as { name: string, group: string }
      }))
      setCategories(categoriesData)
    }
    fetchCategories()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      let imageUrl = ''
      if (image) {
        imageUrl = await uploadImage(image)
      }
      const selectedCategory = categories.find(cat => cat.id === category);
      await addDoc(collection(db, 'products'), {
        name,
        price: parseFloat(price),
        skuId,
        description,
        group: selectedCategory ? selectedCategory.group : '',
        category,
        imageUrl
      })
      setName('')
      setPrice('')
      setSkuId('')
      setDescription('')
      setCategory('')
      setImage(null)
      alert('Product added successfully!')
    } catch (error) {
      console.error('Error adding product: ', error)
      alert('Error adding product')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          step="0.01"
        />
      </div>
      <div>
        <Label htmlFor="skuId">SKU ID</Label>
        <Input
          id="skuId"
          value={skuId}
          onChange={(e) => setSkuId(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="category">Category</Label>
        <Select value={category} onValueChange={setCategory} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat.id} value={cat.id}>{cat.name} ({cat.group})</SelectItem>
            ))}
          </SelectContent>
        </Select>
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
      <Button type="submit">Add Product</Button>
    </form>
  )
}
