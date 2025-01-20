import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { cartContext } from "../Context/CartContext";
import { showCartype } from "../components/Types/ShowCartType";
import { CartItems } from "./Types/CartItems";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("cartContext must be used within a CartProvider");
  }
  const { showCard, setShowCard, cartItems, setCartItems }: showCartype =
    context;

  function handleCartClose() {
    setShowCard(!showCard);
  }
  const deleteProd = (id: string) => {
    setCartItems(
      cartItems.filter((item) => {
        item.product._id !== id;
      })
    );
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading " onClick={handleCartClose}>
          <AiOutlineLeft />
          <span className="heading"> Your Cart</span>
          <span className="cart-num-items "> {cartItems.length}</span>
        </button>
        <div className="product-container">
          {cartItems.map((item: CartItems, index: number) => (
            <div key={index} className="product">
              <Image
                src={urlForImage(item.product.images[0]).url()}
                alt={item.product.name}
                height={250}
                width={250}
              />
              <div className="item-desc">
                <div className="flex toremove-itemp">
                  <h5>{item.product.name}</h5>
                  <h4>${item.product.price * item.quantity}</h4>
                </div>
                <div className="flex bottom">
                  <div className="quantity-desc">
                    <span className="minus">
                      <AiOutlineMinus />
                    </span>
                    <span className="num">{item.quantity}</span>
                    <span className="plus">
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <button
                    className="remove-item"
                    onClick={() => deleteProd(item.product._id)}
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
