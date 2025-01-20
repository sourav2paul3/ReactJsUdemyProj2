"use client";
import { Product } from "../components/Types/Product";
import { createContext, useState, useMemo } from "react";
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

  const addProd = (product: Product, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product._id === product._id
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  };

  const contextValue = useMemo(
    () => ({
      showCard,
      quantity,
      cartItems,
      setShowCard,
      setCartItems,
      increaseQty,
      dncreaseQty,
      addProd,
    }),
    [showCard, quantity, cartItems]
  );

  return (
    <cartContext.Provider value={contextValue}>
      <div>{children}</div>
    </cartContext.Provider>
  );
};
