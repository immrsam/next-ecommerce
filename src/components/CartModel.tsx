"use client";

import Link from "next/link";

const CartModel = () => {
  return (
    <div className="absolute p-4 rounded-md  top-12 left-0 text-sm shadow-md">
      <Link href="">MyCart</Link>
      <Link href="">Checkout</Link>
    </div>
  );
};

export default CartModel;
