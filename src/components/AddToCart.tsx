"use client";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
interface AddToCartProps {
  id: string;
}
const AddToCart = ({ id }: AddToCartProps) => {
  const { totalItems, handleIncraseProductQty } = useShoppingCartContext();
console.log(totalItems)
  return (
    <div className="mt-4">
      <button
        onClick={() => handleIncraseProductQty(parseInt(id))}
        className="px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer"
      >
        +
      </button>
      <span className="mx-4">3</span>
      <button className="px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer">
        {" "}
        -
      </button>
    </div>
  );
};

export default AddToCart;
