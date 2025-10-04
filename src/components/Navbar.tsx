"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

const Navbar = () => {
  const pathName = usePathname();
  const navLinks = [
    {
      href: "/",
      title: "Home",
    },
    {
      href: "/store",
      title: "Store",
    },
  ];

  return (
    <nav className="shadow p-4">
      <Container>
        <div>
          {navLinks.map((item) => (
            <Link
              className={`mr-4 ${pathName === item.href ? "text-sky-500" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
