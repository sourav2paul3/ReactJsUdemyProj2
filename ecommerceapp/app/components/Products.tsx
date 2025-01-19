import React from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
const Products = async () => {
  const products = await client.fetch(groq`*[_type=="product"]`);
  return (
    <div className="bg-[#f8f8f8] w-full py-12 mt-[125px]">
      <div className="container">
        <div className="py-4">
          <h1 className="text-3xl font-bold">Best Selling Products</h1>
          <h1> Enjoy upto 50%</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6">
          {products.map((product: any, index: number) => (
            <div
              key={index}
              className="bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={urlForImage(product.images && product.images[0]).url()}
                alt={product.slug}
                width={220}
                height={100}
                className="object-cover h-32 mx-auto"
              />
              <div className="text-center py-10">
                <h1 className="text-2xl font-bold">{product.name}</h1>
                <h1 className="text-xl text-gray-500 font-bold">
                  ${product.price}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
