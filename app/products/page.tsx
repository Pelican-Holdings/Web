"use client";

import HeroExternalPage from "@/components/HeroExternalPage";
import ProductCard from "@/components/ProductCard";
import { products, otherProducts } from "@/constants";
import React from "react";
import { Fade } from "react-awesome-reveal";

const page = () => {
  return (
    <div className="mb-8">
      <HeroExternalPage
        imageUrl="https://res.cloudinary.com/midefulness/image/upload/v1699721775/Pelican%20Holdings/27322_k70y4t.jpg"
        content="Our Products"
      />
      {/* <div className="overflow-hidden bg-feature-product-bg bg-center bg-no-repeat"> */}
      <div className="padding-container mt-8">
        <div>
          <Fade>
            <h1 className="text-2xl md:text-4xl py-4 font-semibold mb-6 text-main">
              Import and Export Products
            </h1>
          </Fade>
          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Fade>
            <h1 className="text-2xl md:text-4xl py-4 font-semibold mb-6 text-main">
              Import and Export Product
            </h1>
          </Fade>
          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default page;
