import Link from "next/link";
import Menu from "./Menu";

const NavBar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-12 xl:px-32 2xl:px-64 relative">
      {/** mobile */}
      <div className="h-full flex items-center justify-between">
        <Link href="/" className="">
          <div className="text-2xl tracking-wide">SJB</div>
        </Link>
        <Menu />
      </div>
    </div>
  );
};

export default NavBar;
