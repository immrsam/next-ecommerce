"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="">
      <Image
        src="/menu.png"
        alt=""
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />
      {isOpen && (
        <div className="absolute bg-black text-white left-0 top-20 w-full h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-8 text-xl z-10">
          <Link href="/" onClick={() => setOpen((prev) => !prev)}>
            Home
          </Link>
          <Link href="/" onClick={() => setOpen((prev) => !prev)}>
            Shop
          </Link>
          <Link href="/about" onClick={() => setOpen((prev) => !prev)}>
            About
          </Link>
          <Link href="/" onClick={() => setOpen((prev) => !prev)}>
            Contact
          </Link>
          <Link href="/" onClick={() => setOpen((prev) => !prev)}>
            Logout
          </Link>
          <Link href="/" onClick={() => setOpen((prev) => !prev)}>
            Cart(1)
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
