"use client";

import Image from "next/image";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-4 xl:gap-6">
      <Image src="/profile.png" alt="" width={24} height={24} className="cursor-pointer" />
      <Image src="/notification.png" alt="" width={24} height={24} className="cursor-pointer" />
      <Image src="/cart.png" alt="" width={24} height={24} className="cursor-pointer" />
    </div>
  );
};

export default NavIcons;
