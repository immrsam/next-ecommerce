"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavIcons = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image
        src="/profile.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => setIsProfileOpen((prev) => !prev)}
      />
      {isProfileOpen && (
        <div className="bg-gray-800 text-blue-300 p-5 rounded-lg absolute top-16 flex flex-col gap-2 ">
          <Link href="">Profile</Link>
          <Link href="">Logout</Link>
        </div>
      )}
      <Image src="/notification.png" alt="" width={24} height={24} className="cursor-pointer" />
      <Image
        src="/cart.png"
        alt=""
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => setIsCartOpen((prev) => !prev)}
      />
      {isCartOpen && (
        <div className="border-solid border-zinc-950 rounded-lg p5 absolute flex flex-col top-16">
          <Link href="">MyCart</Link>
          <Link href="">Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default NavIcons;
