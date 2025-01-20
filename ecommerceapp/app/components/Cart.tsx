import React, { useContext } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { cartContext } from "../Context/CartContext";
import { showCartype } from "../components/Types/ShowCartType";

const Cart = () => {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("cartContext must be used within a CartProvider");
  }
  const { showCard, setShowCard }: showCartype = context;
  function handleCartClose() {
    setShowCard(!showCard);
  }
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading " onClick={handleCartClose}>
          <AiOutlineLeft />
          <span className="heading"> Your Cart</span>
          <span className="cart-num-items "> 0</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;
