"use client";
import { useParams } from "next/navigation";
import { ProductsDetails } from "../../components";
import { Navbar } from "../../components";
import React from "react";
import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

const page = async () => {
  const { slug: any } = useParams();
  const products = await client.fetch(groq`*[_type=="product"]`);
  return (
    <>
      <Navbar />
      <ProductsDetails />
    </>
  );
};

export default page;
