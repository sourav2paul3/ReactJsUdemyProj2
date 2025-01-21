import React, { useContext } from "react";
import { AiOutlineLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { cartContext } from "../Context/CartContext";
import { showCartype } from "../components/Types/ShowCartType";
import { CartItems } from "./Types/CartItems";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { TiDeleteOutline } from "react-icons/ti";

const Cart: React.FC = () => {
  const context = useContext(cartContext);

  if (!context) {
    throw new Error("cartContext must be used within a CartProvider");
  }
  const {
    showCard,
    setShowCard,
    cartItems,
    setCartItems,
    totalQuantity,
    setTotalQuantity,
    totalPrice,
    setTotalPrice,
    toggleCartItemQuantity,
  }: showCartype = context;

  function handleCartClose() {
    setShowCard(!showCard);
  }
  const deleteProd = (id: string, price: number, quantity: number) => {
    setCartItems(
      cartItems.filter((item) => {
        return item.product._id !== id;
      })
    );
    setTotalQuantity(totalQuantity - quantity);
    setTotalPrice(totalPrice - price * quantity);
  };

  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button className="cart-heading " onClick={handleCartClose}>
          <AiOutlineLeft />
          <span className="heading"> Your Cart</span>
          <span className="cart-num-items "> {totalQuantity}</span>
        </button>
        <div className="product-container">
          {cartItems.map((item: CartItems, index: number) => (
            <div key={index} className="product">
              <Image
                src={urlForImage(item.product.images[0]).url()}
                alt={item.product.name}
                height={200}
                width={200}
                className="object-cover"
              />
              <div className="item-desc">
                <div className="flex top">
                  <h5>{item.product.name}</h5>
                  <h4>${item.product.price * item.quantity}</h4>
                </div>
                <div className="flex bottom">
                  <div className="quantity-desc">
                    <span
                      className="minus"
                      onClick={() =>
                        toggleCartItemQuantity(item.product._id, "minus")
                      }
                    >
                      <AiOutlineMinus />
                    </span>
                    <span className="num">{item.quantity}</span>
                    <span
                      className="plus"
                      onClick={() =>
                        toggleCartItemQuantity(item.product._id, "plus")
                      }
                    >
                      <AiOutlinePlus />
                    </span>
                  </div>
                  <button
                    type="button"
                    className="remove-item"
                    onClick={() =>
                      deleteProd(
                        item.product._id,
                        item.product.price,
                        item.quantity
                      )
                    }
                  >
                    <TiDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>Subtotal</h3>
              <h3>${totalPrice}</h3>
            </div>
            <div className="btn-container">
              <button type="button" className="checkout-btn">
                Pay with Stripe
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
