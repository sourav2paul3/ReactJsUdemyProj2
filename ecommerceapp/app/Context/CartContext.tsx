"use client";

import { createContext, useState } from "react";
import { showCartype } from "../components/Types/ShowCartType";
import { CartItems } from "../components/Types/CartItems";
export const cartContext = createContext<showCartype | undefined>(undefined);

export const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);
  const [cartItems, setCartItems] = useState<CartItems[]>([]);
  const increaseQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };
  const dncreaseQty = () => {
    setQuantity((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };
  return (
    <cartContext.Provider
      value={{ showCard, setShowCard, quantity, increaseQty, dncreaseQty }}
    >
      <div>{children}</div>
    </cartContext.Provider>
  );
};
