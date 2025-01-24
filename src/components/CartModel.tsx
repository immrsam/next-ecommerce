"use client";

import Image from "next/image";

const CartModel = () => {
  const cartItems = true;

  return (
    <div className="absolute p-4 rounded-md shadow-md bg-white top-12 left-0 text-sm flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <div className="">
          <Image
            src="https://images.pexels.com/photos/30345418/pexels-photo-30345418/free-photo-of-minimalist-workspace-with-blue-headphones-and-keyboard.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            alt="/product.png"
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
          <div className="">
            {/* TOP */}
            {/* BOTTOM */}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartModel;
