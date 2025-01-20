import { CartItems } from "./CartItems";
import { Product } from "./Product";

export type showCartype = {
  showCard: boolean;
  quantity: number;
  cartItems: Array<CartItems>;
  totalQuantity: number;
  totalPrice: number;

  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
  setCartItems: React.Dispatch<React.SetStateAction<CartItems[]>>;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  setTotalQuantity: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;

  increaseQty: () => void;
  dncreaseQty: () => void;
  addProd: (product: Product, quantity: number) => void;
};
