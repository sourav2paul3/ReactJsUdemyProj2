import React from "react";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type Product = {
  price: number;
  name: string;
  description: string;
  _id: string;
  images: Array<{ url: string }>;
  slug: { current: string };
};

function Card({ product }: { product: Product }) {
  return (
    <Link href={`/Product/${product.slug.current}`}>
      <div
        key={product._id}
        className="bg-white pt-10 drop-shadow-md rounded-lg overflow-hidden"
      >
        <Image
          src={urlForImage(product.images && product.images[0]).url()}
          alt={product.slug.current}
          width={220}
          height={100}
          className="object-cover h-40 mx-auto"
        />
        <div className="text-center py-10">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <h1 className="text-xl text-gray-500 font-bold">${product.price}</h1>
        </div>
      </div>
    </Link>
  );
}

export default Card;
