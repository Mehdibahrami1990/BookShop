"use client";
import Container from "@/components/Container";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [newProduct, setNewProduct] = useState({
    title: "",
    price: "",
    image: "",
    description: "",
  });
  const handleChangeProduct = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };
  const handleCreateNewProduct = () => {
    console.log(newProduct);
    axios({
      method: "POST",
      url: "http://localhost:3001/products",
      data: {
        id: Math.floor(Math.random() * 1000).toString(),
        image: newProduct.image,
        title: newProduct.title,
        describtion: newProduct.description,
        price: newProduct.price,
      },
    }).then((result) => {
      console.log(result);
      if (result.status === 201) {
        router.push("/store");
        router.refresh();
      } else {
        alert("Something went wrong!");
      }
    });

    // if (res.ok) {
    //   router.push("/blogs");
    //   router.refresh();
    // } else {
    //   alert("Something went wrong!");
    // }
  };
  return (
    <div className=" p-4">
      <Container>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 00  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title"
              onChange={handleChangeProduct}
            />
          </div>
          <div>
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Price"
              onChange={handleChangeProduct}
            />
          </div>
          <div>
            <label
              htmlFor="picture"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Picture
            </label>
            <input
              type="text"
              id="image"
              name="image"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Picture"
              onChange={handleChangeProduct}
            />
          </div>
        </div>

        <label className="block mb-2 text-sm font-medium">
          Your Description
        </label>
        <textarea
          id="description"
          name="description"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your description here..."
          onChange={handleChangeProduct}
        ></textarea>

        <button
          type="submit"
          className="mt-8 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer"
          onClick={handleCreateNewProduct}
        >
          Craete new Product
        </button>
      </Container>
    </div>
  );
};

export default Dashboard;
