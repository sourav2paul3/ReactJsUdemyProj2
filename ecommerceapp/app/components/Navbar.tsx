import React from "react";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <div className="bg-white w-full h-[80px]">
      <div className="container w-full h-full  items-center flex justify-between">
        <Link href="/" className="logo">
          Shop
        </Link>
        <button className="cart-icon">
          <IoCartOutline size={30} />
          <span className="cart-item-quanityt">0</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
