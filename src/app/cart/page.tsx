"use client";
import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import { DiscountDataProps, ProductItemProps } from "@/types/type";
import { formatNumber } from "@/utils/NumberSeperate";
import axios from "axios";
import { useEffect, useState } from "react";

const Cart = () => {
  const { totalItems } = useShoppingCartContext();
  const [data, setData] = useState<ProductItemProps[]>([]);
  const [discountCode, setDiscountCode] = useState("");
  const [finalPrice, setFinalPrice] = useState(0);
  const [disCountedPrice, setDisCountedPrice] = useState(0);
  useEffect(() => {
    (async () =>
      axios(`http://localhost:3001/products`).then((result) => {
        const { data } = result;
        setData(data);
      }))();
  }, []);
  const totalPrice = totalItems.reduce((total, item) => {
    const selectedProduct = data.find((p) => p.id == item.id.toString());
    return total + (selectedProduct?.price || 0) * item.quantity;
  }, 0);

  const handleSubmitDiscount = () => {
    axios(`http://localhost:3001/discounts?code=${discountCode}`).then(
      (result) => {
        const data = result.data as DiscountDataProps[];
        const disCountedPrice = (totalPrice * data[0].percentage) / 100;
        const finalPrice = totalPrice - disCountedPrice;
        setFinalPrice(finalPrice);
        setDisCountedPrice(disCountedPrice);
      }
    );
  };

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
          Total price : <span>{formatNumber(totalPrice)}$</span>
        </h3>
        <h3>
          Your profit from this purchase :{" "}
          <span>{formatNumber(disCountedPrice)} $</span>
        </h3>
        <h3>
          Final price : <span>{formatNumber(finalPrice)} $</span>
        </h3>
        <div className="flex gap-2">
          <input
            className="border p-1"
            type="text"
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Enter the discount code..."
          />
          <button
            onClick={handleSubmitDiscount}
            className="bg-sky-600 text-white px-4 py-1 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
