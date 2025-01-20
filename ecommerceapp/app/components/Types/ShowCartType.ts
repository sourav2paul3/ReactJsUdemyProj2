export type showCartype = {
  showCard: boolean;
  setShowCard: React.Dispatch<React.SetStateAction<boolean>>;
  quantity: number;
  increaseQty: () => void;
  dncreaseQty: () => void;
};
