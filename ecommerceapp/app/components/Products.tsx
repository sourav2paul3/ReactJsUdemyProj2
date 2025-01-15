import React from "react";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
const Products = async () => {
  const products = await client.fetch(groq`*[_type=="product"]`);
  return (
    <div className="bg-[#f8f8f8] w-full py-12 mt-[100px]">
      <div className="container">
        <div>
          <h1 className="text-3xl font-bold">Best Selling Products</h1>
          <h1 className="py-4"> Enjoy upto 50%</h1>
        </div>
        <div className="mt-[6px] ">
          {products.map((product: any, index: number) => (
            <div
              key={index}
              className="bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden"
            >
              <Image
                src={urlForImage(product.images && product.images[0]).url()}
                alt="Product Image"
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
