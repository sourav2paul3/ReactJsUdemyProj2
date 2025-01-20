import { ProductsDetails } from "../../components";
import { Navbar } from "../../components";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const page = async ({ params }: { params: { slug: string } }) => {
  const products = await client.fetch(groq`*[_type=="product"]`);
  const currentProd = products.find(
    (prod: any) => prod.slug.current === params.slug
  );
  console.log(currentProd);
  return (
    <>
      <Navbar />
      <ProductsDetails product={currentProd} />
    </>
  );
};

export default page;
