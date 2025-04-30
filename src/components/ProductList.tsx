'use client'

import { useState, useEffect } from 'react'
import { collection, getDocs, doc, deleteDoc, updateDoc, DocumentData } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"

interface Product extends DocumentData {
  id: string;
  name: string;
  price: number;
  skuId: string;
  description: string;
  category: string;
  group?: string;
}

interface Category extends DocumentData {
  id: string;
  name: string;
  group: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editName, setEditName] = useState('')
  const [editPrice, setEditPrice] = useState('')
  const [editSkuId, setEditSkuId] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editCategory, setEditCategory] = useState('')
  const { toast } = useToast()

  useEffect(() => {
    fetchProducts()
    fetchCategories()
  }, [])

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, 'products'))
    const productsData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Product[]
    setProducts(productsData)
  }

  const fetchCategories = async () => {
    // const querySnapshot = await getDocs(collection(db, 'categories'))
    // const categoriesData = querySnapshot.docs.map(doc => ({
    //   id: doc.id,
    //   ...doc.data()
    // })) as Category[]
    // setCategories(categoriesData)
  }

  const handleEdit = (product: Product) => {
    setEditingId(product.id)
    setEditName(product.name)
    setEditPrice(product.price.toString())
    setEditSkuId(product.skuId)
    setEditDescription(product.description)
    setEditCategory(product.category)
  }

  const handleSave = async () => {
    if (editingId) {
      try {
        const selectedCategory = categories.find(cat => cat.id === editCategory);
        await updateDoc(doc(db, 'products', editingId), {
          name: editName,
          price: parseFloat(editPrice),
          skuId: editSkuId,
          description: editDescription,
          group: selectedCategory ? selectedCategory.group : '',
          category: editCategory
        })
        setEditingId(null)
        fetchProducts()
        toast({
          title: "Success",
          description: "Product updated successfully",
          variant: "success",
        })
      } catch (error) {
        console.error('Error updating product: ', error)
        toast({
          title: "Error",
          description: "Failed to update product",
          variant: "destructive",
        })
      }
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, 'products', id))
      fetchProducts()
      toast({
        title: "Success",
        description: "Product deleted successfully",
        variant: "success",
      })
    } catch (error) {
      console.error('Error deleting product: ', error)
      toast({
        title: "Error",
        description: "Failed to delete product",
        variant: "destructive",
      })
    }
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>SKU ID</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Category & Group</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              {editingId === product.id ? (
                <Input value={editName} onChange={(e) => setEditName(e.target.value)} />
              ) : (
                product.name
              )}
            </TableCell>
            <TableCell>
              {editingId === product.id ? (
                <Input type="number" value={editPrice} onChange={(e) => setEditPrice(e.target.value)} step="0.01" />
              ) : (
                product.price
              )}
            </TableCell>
            <TableCell>
              {editingId === product.id ? (
                <Input value={editSkuId} onChange={(e) => setEditSkuId(e.target.value)} />
              ) : (
                product.skuId
              )}
            </TableCell>
            <TableCell>
              {editingId === product.id ? (
                <Textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)} />
              ) : (
                product.description
              )}
            </TableCell>
            <TableCell>
              {editingId === product.id ? (
                <Select value={editCategory} onValueChange={setEditCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat.id} value={cat.id}>{cat.name} ({cat.group})</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              ) : (
                <>
                  {categories.find(cat => cat.id === product.category)?.name} 
                  ({categories.find(cat => cat.id === product.category)?.group})
                </>
              )}
            </TableCell>
            <TableCell>
              {editingId === product.id ? (
                <Button onClick={handleSave}>Save</Button>
              ) : (
                <>
                  <Button className='mr-2' onClick={() => handleEdit(product)}>Edit</Button>
                  <Button variant="destructive" onClick={() => handleDelete(product.id)}>Delete</Button>
                </>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

