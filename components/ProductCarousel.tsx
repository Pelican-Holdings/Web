import { products } from "@/constants";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const ProductCarousel = () => {
  return (
    <div className="w-full mx-8 my-4 overflow-hidden">
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        pauseOnClick={true}
        delay={0}
        play={true}
        direction="left"
      >
        {products.map((product, id) => (
          <div
            className="bg-white flex items-center justify-center px-2 overflow-hidden group transition-transform duration-300 ease-in-out transform hover:scale-105"
            key={id}
          >
            <div className="max-w-xs overflow-hidden">
              <img src={product.image} alt={product.name} />
            </div>
            
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ProductCarousel;
