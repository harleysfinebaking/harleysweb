import React, { useEffect } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function OrderModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  useEffect(() => {
    if (isOpen) {
      const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleEscapeKey);

      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      };
    }
  }, [isOpen, onClose]);

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" onClick={handleOutsideClick}>
      <div className="bg-white p-12 rounded-lg relative">
        <Button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 h-auto w-auto bg-black/40 hover:bg-gray-800 text-white rounded-full"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </Button>
        <h2 className="text-xl font-bold mb-6 pr-4">Choose your delivery partner</h2>
        <div className="flex justify-around items-center">
          <a href="https://www.swiggy.com/city/hyderabad/harleys-fine-baking-hitech-city-nanakramguda-rest376101" target="_blank" rel="noopener noreferrer" className="w-24 h-24 flex items-center justify-center">
            <Image src="/photos/swiggy2.webp" alt="Swiggy" width={100} height={100} className='rounded-md object-contain w-24 h-24' />
          </a>
          <a href="https://www.zomato.com/hyderabad/harleys-fine-baking-3-gachibowli/order" target="_blank" rel="noopener noreferrer" className="w-24 h-24 flex items-center justify-center">
            <Image src="/photos/zomato2.webp" alt="Zomato" width={100} height={100} className='rounded-md object-contain w-24 h-24' />
          </a>
        </div>
      </div>
    </div>
  );
}