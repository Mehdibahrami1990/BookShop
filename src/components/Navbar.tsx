"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";

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
                {item.title}
              </Link>
            ))}
          </div>
          <div>
            <span className="px-2 py-1 bg-red-500 text-white rounded-full mr-3">
              {cartTotalQuantity}
            </span>
            <Link href="/cart">Shopping Cart</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
