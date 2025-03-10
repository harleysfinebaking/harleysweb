'use client'

import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { uploadImage } from '@/lib/uploadimage'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const groups = ["Artisan Desserts", "Exotic Coffee", "Special Occasions", "Bakery & Confectionery"];

export default function CategoryForm() {
  const [name, setName] = useState('')
  const [group, setGroup] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      let imageUrl = ''
      if (image) {
        imageUrl = await uploadImage(image)
      }
      await addDoc(collection(db, 'categories'), { name, group, imageUrl })
      setName('')
      setGroup('')
      setImage(null)
      alert('Category added successfully!')
    } catch (error) {
      console.error('Error adding category: ', error)
      alert('Error adding category')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Category Name</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="group">Group</Label>
        <Select value={group} onValueChange={setGroup} required>
          <SelectTrigger>
            <SelectValue placeholder="Select a group" />
          </SelectTrigger>
          <SelectContent>
            {groups.map((g) => (
              <SelectItem key={g} value={g}>{g}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor="image">Category Image</Label>
        <Input
          id="image"
          type="file"
          onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
          accept="image/*"
        />
      </div>
      <Button type="submit">Add Category</Button>
    </form>
  )
}
