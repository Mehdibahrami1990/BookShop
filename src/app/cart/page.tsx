import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import React from "react";

const Cart = () => {
  return (
    <Container>
      <h1 className="my-4">Shopping Cart</h1>
      <div className=" ">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="border shadow-md p-4">
        <h3>
          Total price : <span>75$</span>
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
