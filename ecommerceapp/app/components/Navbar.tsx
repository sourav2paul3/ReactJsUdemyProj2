"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import Cart from "./Cart";
import { cartContext } from "../Context/CartContext";
import { showCartype } from "../components/Types/ShowCartType";
const Navbar = () => {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("cartContext must be used within a CartProvider");
  }
  const { showCard, setShowCard }: showCartype = context;

  function handleCartOpen() {
    setShowCard(!showCard);
  }

  return (
    <>
      <div className="bg-white w-full h-[80px]">
        <div className="container w-full h-full  items-center flex justify-between">
          <Link href="/" className="logo">
            Shop
          </Link>
          <button className="cart-icon" onClick={handleCartOpen}>
            <IoCartOutline size={30} />
            <span className="cart-item-quanityt">0</span>
          </button>
        </div>
      </div>
      {showCard ? <Cart /> : ""}
    </>
  );
};

export default Navbar;
