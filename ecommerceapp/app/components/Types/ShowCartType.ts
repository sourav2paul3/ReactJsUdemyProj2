import { CartItems } from "./CartItems";
import { Product } from "./Product";

export type showCartype = {
  showCard: boolean;
  quantity: number;
  cartItems: Array<CartItems>;

  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
  increaseQty: () => void;
  dncreaseQty: () => void;
  addProd: (product: Product, quantity: number) => void;
};
