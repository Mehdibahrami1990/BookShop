"use client";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
interface AddToCartProps {
  id: string;
}
const AddToCart = ({ id }: AddToCartProps) => {
  const {
    totalItems,
    handleIncraseProductQty,
    getProductQuantity,
    handleDecraseProductQty,
    handleRemoveProduct,
  } = useShoppingCartContext();
  console.log(totalItems);
  return (
    <div>
      <div className="mt-4">
        <button
          onClick={() => handleDecraseProductQty(parseInt(id))}
          className="px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer"
        >
          {" "}
          -
        </button>
        <span className="mx-4">{getProductQuantity(parseInt(id))}</span>
        <button
          onClick={() => handleIncraseProductQty(parseInt(id))}
          className="px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer"
        >
          +
        </button>
      </div>
      <button
        onClick={() => handleRemoveProduct(parseInt(id))}
        className="bg-red-500 text-white rounded-2xl px-4 py-2 mt-5 cursor-pointer"
      >
        Delete from Cart
      </button>
    </div>
  );
};

export default AddToCart;
