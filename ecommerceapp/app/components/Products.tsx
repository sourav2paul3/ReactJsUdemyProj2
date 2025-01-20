import React from "react";
import Card from "./Card";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const Products: React.FC = async () => {
  const products = await client.fetch(groq`*[_type=="product"]`);
  console.log(products);
  const sortedItemList = products
    .slice()
    .sort(
      (
        a: { _createdAt: string | number | Date },
        b: { _createdAt: string | number | Date }
      ) => Number(new Date(a._createdAt)) - Number(new Date(b._createdAt))
    );
  return (
    <div className="bg-[#f8f8f8] w-full py-12 mt-[125px]">
      <div className="container">
        <div className="py-4">
          <h1 className="text-3xl font-bold">Best Selling Products</h1>
          <h1> Enjoy upto 50%</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-6 gap-4">
          {sortedItemList.map((product: any, index: number) => (
            <Card product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
