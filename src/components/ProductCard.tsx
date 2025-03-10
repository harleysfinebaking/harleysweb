import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

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

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={`/products/${product.skuID}`} passHref>
        <Card className="overflow-hidden cursor-pointer h-[300px] group relative bg-[#FEFEFA]/40 border-0 shadow-md hover:shadow-lg transition-shadow duration-300"> 
          <div className="relative h-[220px] overflow-hidden">
            <Image
              src={product.imageUrl || '/placeholder.svg'}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-20 opacity-70"></div>
            <Badge className="absolute top-2 left-2 bg-[#CBEBF2] text-gray-800">{product.category}</Badge>
          </div>
          <CardContent className="p-4 flex flex-col justify-end h-[80px]">
            <h3 className="text-lg font-semibold line-clamp-2 text-center">{product.name}</h3>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

