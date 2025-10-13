"use client";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import Cookies from "js-cookie";
const Navbar = () => {
  const pathName = usePathname();
  const { cartTotalQuantity } = useShoppingCartContext();
  const navLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
    },
    {
      href: "/dashboard",
      title: "Dashboard",
    },
    {
      href: "/login",
      title: "Login",
    },
  ];

  return (
    <nav className="shadow p-4 w-screen">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            {navLinks.map((item) => (
              <Link
                className={`mr-4 ${
                  pathName === item.href ? "text-sky-500" : ""
                }`}
                href={item.href}
                key={item.href}
              >
                {item.title === "Login" && Cookies.get("token")
                  ? item.title === "Login"
                  : item.title}
              </Link>
            ))}
          </div>
          <div>
            <span className="px-2 py-1 bg-red-500 text-white rounded-full mr-3">
              {cartTotalQuantity}
            </span>
            <Link href="/cart">Shopping Cart</Link>
            {Cookies.get("token") && (
              <button
                type="button"
                className="ml-8 py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer"
                onClick={() => {
                  Cookies.remove("token");
                  redirect("/");
                }}
              >
                LogOut
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
