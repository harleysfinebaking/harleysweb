'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { uploadImage } from '@/lib/uploadimage'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

const categorySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  group: z.string().min(1, 'Group is required'),
})

type CategoryFormData = z.infer<typeof categorySchema>

const groups = ["Artisan Desserts", "Exotic Coffee", "Special Occasions", "Bakery & Confectionery"]

export default function AddCategoryForm({ onSuccess }: { onSuccess: () => void }) {
  const { control, register, handleSubmit, formState: { errors }, reset } = useForm<CategoryFormData>({
    resolver: zodResolver(categorySchema)
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [image, setImage] = useState<File | null>(null)
  const { toast } = useToast()

  const onSubmit = async (data: CategoryFormData) => {
    setIsSubmitting(true)
    try {
      let imageUrl = ''
      if (image) {
        imageUrl = await uploadImage(image)
      }
      await addDoc(collection(db, 'categories'), {
        ...data,
        imageUrl
      })
      toast({
        title: "Success",
        description: "Category added successfully",
        variant: "success",
      })
      reset()
      setImage(null)
      onSuccess()
    } catch (error) {
      console.error('Error adding category: ', error)
      toast({
        title: "Error",
        description: "Failed to add category",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Category Name</Label>
        <Input id="name" {...register('name')} />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="group">Group</Label>
        <Controller
          name="group"
          control={control}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select a group" />
              </SelectTrigger>
              <SelectContent>
                {groups.map((group) => (
                  <SelectItem key={group} value={group}>{group}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.group && <p className="text-red-500 text-sm">{errors.group.message}</p>}
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
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Adding...' : 'Add Category'}
      </Button>
    </form>
  )
}
