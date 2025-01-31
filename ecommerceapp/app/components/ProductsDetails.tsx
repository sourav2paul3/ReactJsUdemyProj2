"use client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { cartContext } from "../Context/CartContext";
import { Product } from "./Types/Product";

const ProductsDetails: React.FC<{ product: Product }> = ({ product }) => {
  const [index, setIndex] = useState<number>(0);
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("cartContext must be used within a CartProvider");
  }
  const { quantity, setQuantity, increaseQty, dncreaseQty, addProd } = context;
  useEffect(() => {
    setQuantity(1);
  }, [setQuantity]);
  return (
    <div className="product-details-section">
      <div className="product-details-container">
        {/*Left*/}
        <div>
          {/*Top*/}
          <div className="h-450 flex items-center mb-25px">
            <Image
              src={urlForImage(product.images[index]).url()}
              alt={product.name}
              height={350}
              width={450}
              className="object-cover mx-auto"
            />
          </div>
          {/*Bottom*/}
          <div className="small-images-container">
            {product.images.map((image: { url: string }, i: number) => (
              <Image
                key={i}
                src={urlForImage(product.images[i]).url()}
                alt={`Product image ${i + 1}`}
                height={100}
                width={220}
                className="object-cover h-32 mx-auto border rounded-xl hover:cursor-pointer"
                onClick={() => {
                  setIndex(i);
                }}
              />
            ))}
          </div>
        </div>
        {/*Right*/}
        <div className="flex flex-col gap-8 md:pt-32 pt-0">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold">{product.name}</div>
            <div className="text-xl font-medium">${product.price}</div>
          </div>
          <div className="flex gap-2 items-center">
            <h3>Quantity</h3>
            <p className="quantity-desc flex items-center border-black">
              <span className="minus" onClick={dncreaseQty}>
                <AiOutlineMinus />
              </span>
              <span className="num">{quantity}</span>
              <span className="plus" onClick={increaseQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <button
            className="btn add-to-cart "
            onClick={() => addProd(product, quantity)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
