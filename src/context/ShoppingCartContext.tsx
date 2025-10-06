"use client";
import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

type ShoppingCartContextProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id?: number | null;
  quantity?: number | null;
};

type ShoppingCartContextType = {
  totalItems: CartItem[];
  setTotalItems: Dispatch<SetStateAction<CartItem[]>>;
  handleIncraseProductQty: (id: number) => void;
};
const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)!;
};

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [totalItems, setTotalItems] = useState<CartItem[]>([]);

  const handleIncraseProductQty = (id: number) => {
    setTotalItems((currentItem) => {
      const isNotProductExist =
        currentItem.find((item) => item.id == id) == null;

      if (isNotProductExist) {
        return [...currentItem, { id, quantity: 1 }];
      } else {
        return currentItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              quantity: item.quantity! + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{ totalItems, setTotalItems, handleIncraseProductQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
