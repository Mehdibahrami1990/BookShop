/* eslint-disable @typescript-eslint/no-empty-object-type */
import Container from "@/components/Container";
import { ProductItemProps } from "@/types/type";
import React from "react";

interface ProductsProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{}>;
}

const Product = async ({ params }: ProductsProps) => {
  const { id } = await params;
  const result = await fetch(`http://localhost:3001/products/${id}`);
  const data = (await result.json()) as ProductItemProps;
  console.log(data);
  return (
    <Container>
      <div className="grid grid-cols-12 mt-8 shadow-md">
        <div className="col-span-3">
          <img src={data.image} alt="" />
        </div>
        <div className="col-span-9 p-4">
          <h2 className="font-bold text-2xl">{data.title}</h2>
          <p className="text-gray-400">{data.describtion}</p>
          <p className="font-bold">
            price : <span>{data.price}$</span>
          </p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer">
              +
            </button>
            <span className="mx-4">3</span>
            <button className="px-4 py-2 bg-sky-500 text-white rounded-2xl cursor-pointer">
              {" "}
              -
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
