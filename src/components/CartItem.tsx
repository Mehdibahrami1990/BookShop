import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductItemProps } from "@/types/type";
import AddToCart from "./AddToCart";
import { formatNumber } from "@/utils/NumberSeperate";
interface CartItemProps {
  id: number;
  quantity: number;
}
const CartItem = ({ id, quantity }: CartItemProps) => {
  const [data, setData] = useState({} as ProductItemProps);
  useEffect(() => {
    (async () =>
      axios(`http://localhost:3001/products/${id}`).then((result) => {
        const { data } = result;
        setData(data);
      }))();
  }, []);

  return (
    <div className="grid grid-cols-12 bg-slate-100 mb-4">
      <img
        className="col-span-3 w-40 h-40 sm:w-60 sm:h-60 md:w-50 md:h-45 overflow-hidden flex items-center justify-center"
        src={data.image}
        alt=""
      />

      <div className="col-span-9 mt-8">
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p>
          Number of products : <span>{quantity}</span>
        </p>
        <p>
          price : <span>{formatNumber(data.price)} $</span>
        </p>
        <AddToCart id={id.toString()} />
      </div>
    </div>
  );
};

export default CartItem;
