"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { ProductItemProps } from "@/types/type";
import { formatNumber } from "@/utils/NumberSeperate";
import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const { totalItems } = useShoppingCartContext();
  const [data, setData] = useState<ProductItemProps[]>([]);
  useEffect(() => {
    (async () =>
      axios(`http://localhost:3001/products`).then((result) => {
        const { data } = result;
        setData(data);
      }))();
  }, []);
  return (
    <Container>
      <h1 className="my-4">Shopping Cart</h1>
      <div className=" ">
        {totalItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <div className="border shadow-md p-4">
        <h3>
          Total price :{" "}
          <span>
            {formatNumber(
              totalItems.reduce((total, item) => {
                const selectedProduct = data.find(
                  (p) => p.id == item.id.toString()
                );
                return total + (selectedProduct?.price || 0) * item.quantity;
              }, 0)
            )}
            $
          </span>
        </h3>
        <h3>
          Your profit from this purchase : <span>75$</span>
        </h3>
        <h3>
          Final price : <span>75$</span>
        </h3>
        <div className="flex gap-2">
          <input
            className="border p-1"
            type="text"
            placeholder="Enter the discount code..."
          />
          <button className="bg-sky-600 text-white px-4 py-1 rounded ">
            Submit
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
