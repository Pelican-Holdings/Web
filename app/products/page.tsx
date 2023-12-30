"use client";

import HeroExternalPage from "@/components/HeroExternalPage";
import ProductCard from "@/components/ProductCard";
import {
  products,
  spicesProducts,
  coconutCoirProducts,
  handicraftProducts,
  handmadeProducts,
  ladiesGarmentProducts,
} from "@/constants";
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
          <Fade>
            <h1 className="text-xl md:text-2xl pb-4 mb-6 text-slate-600 font-semibold">
              Bitumen and Other Construction Products
            </h1>
          </Fade>
          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Fade>
                <ProductCard key={product.id} product={product} />
              </Fade>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Fade>
            <h1 className="text-xl md:text-2xl py-4 mb-6 text-slate-600 font-semibold">
              Spices Products
            </h1>
          </Fade>
          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spicesProducts.map((product) => (
              <Fade>
                <ProductCard key={product.id} product={product} />
              </Fade>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Fade>
            <h1 className="text-xl md:text-2xl py-4 mb-6 text-slate-600 font-semibold">
              Coconut Coir Products
            </h1>
          </Fade>
          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coconutCoirProducts.map((product) => (
              <Fade>
                <ProductCard key={product.id} product={product} />
              </Fade>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Fade>
            <h1 className="text-xl md:text-2xl py-4 mb-6 text-slate-600 font-semibold">
              Handicraft
            </h1>
          </Fade>
          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {handicraftProducts.map((product) => (
              <Fade>
                <ProductCard key={product.id} product={product} />
              </Fade>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Fade>
            <h1 className="text-xl md:text-2xl py-4 mb-6 text-slate-600 font-semibold">
              Ladies Garment Items
            </h1>
          </Fade>
          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ladiesGarmentProducts.map((product) => (
              <Fade>
                <ProductCard key={product.id} product={product} />
              </Fade>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Fade>
            <h1 className="text-xl md:text-2xl py-4 mb-6 text-slate-600 font-semibold">
              Handmade Items
            </h1>
          </Fade>
          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {handmadeProducts.map((product) => (
              <Fade>
                <ProductCard key={product.id} product={product} />
              </Fade>
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default page;
