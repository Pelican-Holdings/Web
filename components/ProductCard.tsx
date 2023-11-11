// src/components/ProductCard.tsx
import React from "react";
import { Product } from "@/types";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border p-4 md:mb-4 shadow-lg overflow-hidden group transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="mb-2 h-1/2 md:h-1/4 mx-auto max-w-full"
        />
      </div>

      <h2 className="text-xl text-center font-semibold">{product.name}</h2>
      {/* <p className="text-gray-600">${product.price.toFixed(2)}</p> */}
      {/* <p className="text-sm text-gray-500">{product.description}</p> */}
    </div>
  );
};

export default ProductCard;
