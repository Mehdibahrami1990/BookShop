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
  handleDecraseProductQty: (id: number) => void;
  getProductQuantity: (id: number) => number;
  cartTotalQuantity: number;
  handleRemoveProduct: (id: number) => void;
};
const ShoppingCartContext = createContext<ShoppingCartContextType | null>(null);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext)!;
};

export function ShoppingCartContextProvider({
  children,
}: ShoppingCartContextProviderProps) {
  const [totalItems, setTotalItems] = useState<CartItem[]>([]);

  const cartTotalQuantity = totalItems.reduce((totalQty, item) => {
    return totalQty + item.quantity!;
  }, 0);

  const getProductQuantity = (id: number) => {
    return totalItems.find((item) => item.id == id)?.quantity || 0;
  };

  const handleIncraseProductQty = (id: number) => {
    setTotalItems((currentItems) => {
      const isNotProductExist =
        currentItems.find((item) => item.id == id) == null;

      if (isNotProductExist) {
        return [...currentItems, { id, quantity: 1 }];
      } else {
        return currentItems.map((item) => {
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
  const handleDecraseProductQty = (id: number) => {
    setTotalItems((currentItems) => {
      const isLastOne =
        currentItems.find((item) => item.id == id)?.quantity == 1;

      if (isLastOne) {
        return currentItems.filter((item) => item.id != id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              quantity: item.quantity! - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };
  const handleRemoveProduct = (id: number) => {
    setTotalItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        totalItems,
        setTotalItems,
        handleIncraseProductQty,
        getProductQuantity,
        cartTotalQuantity,
        handleDecraseProductQty,
        handleRemoveProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
