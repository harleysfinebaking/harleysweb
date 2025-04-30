'use client'

import { useState, useEffect } from 'react'
import { collection, getDocs, doc, deleteDoc, updateDoc, DocumentData } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { uploadImage } from '@/lib/uploadimage'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image'

const groups = ["Artisan Desserts", "Exotic Coffee", "Special Occasions", "Bakery & Confectionery"];

interface Category extends DocumentData {
  id: string;
  name: string;
  group: string;
  imageUrl?: string;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState('')
  const [editGroup, setEditGroup] = useState('')
  const [editImage, setEditImage] = useState<File | null>(null)
  const { toast } = useToast()

  useEffect(() => {
    fetchCategories()
  }, [])

  const fetchCategories = async () => {
    // const querySnapshot = await getDocs(collection(db, 'categories'))
    // const categoriesData = querySnapshot.docs.map(doc => ({
    //   id: doc.id,
    //   ...doc.data()
    // })) as Category[]
    // setCategories(categoriesData)
  }

  const handleEdit = (category: Category) => {
    setEditingId(category.id)
    setEditName(category.name)
    setEditGroup(category.group)
  }

  const handleSave = async () => {
    if (editingId) {
      try {
        const updateData: Partial<Category> = {
          name: editName,
          group: editGroup
        }
        if (editImage) {
          const imageUrl = await uploadImage(editImage)
          updateData.imageUrl = imageUrl
        }
        await updateDoc(doc(db, 'categories', editingId), updateData)
        setEditingId(null)
        setEditImage(null)
        fetchCategories()
        toast({
          title: "Success",
          description: "Category updated successfully",
          variant: "success",
        })
      } catch (error) {
        console.error('Error updating category: ', error)
        toast({
          title: "Error",
          description: "Failed to update category",
          variant: "destructive",
        })
      }
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'categories', id))
      fetchCategories()
      toast({
        title: "Success",
        description: "Category deleted successfully",
        variant: "success",
      })
    } catch (error) {
      console.error('Error deleting category: ', error)
      toast({
        title: "Error",
        description: "Failed to delete category",
        variant: "destructive",
      })
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Group</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category) => (
          <TableRow key={category.id}>
            <TableCell>
              {editingId === category.id ? (
                <Input
                  type="file"
                  onChange={(e) => setEditImage(e.target.files ? e.target.files[0] : null)}
                  accept="image/*"
                />
              ) : (
                category.imageUrl && (
                  <Image 
                    src={category.imageUrl} 
                    alt={category.name} 
                    width={50} 
                    height={50} 
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                )
              )}
            </TableCell>
            <TableCell>
              {editingId === category.id ? (
                <Input value={editName} onChange={(e) => setEditName(e.target.value)} />
              ) : (
                category.name
              )}
            </TableCell>
            <TableCell>
              {editingId === category.id ? (
                <Select value={editGroup} onValueChange={setEditGroup}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a group" />
                  </SelectTrigger>
                  <SelectContent>
                    {groups.map((g) => (
                      <SelectItem key={g} value={g}>{g}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                category.group
              )}
            </TableCell>
            <TableCell>
              {editingId === category.id ? (
                <Button onClick={handleSave}>Save</Button>
              ) : (
                <>
                  <Button  className='mr-2' onClick={() => handleEdit(category)}>Edit</Button>
                  <Button variant="destructive" onClick={() => handleDelete(category.id)}>Delete</Button>
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

