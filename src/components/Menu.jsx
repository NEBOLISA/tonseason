
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Menu = ({openMenu,setOpenMenu,scroll}) => {

  return (
    <div
      className={`md:hidden ${
        openMenu ? "flex translate-x-0" : " flex -translate-x-full  "
      } transition-all ease-in-out duration-1000 absolute mt-3  bottom-0   bg-black text-white h-[100vh] justify-center items-center text-xl z-10 w-full h-  top-3 left-0 right-0 flex flex-row`}
    >
      <div
        className={`${
          openMenu ? "flex translate-x-0" : " flex -translate-x-full  "
        } transition-all ease-in-out duration-1000 absolute mt-3  bottom-0   bg-black text-white justify-center items-center text-xl z-10 w-full h-  top-3 left-0 right-0  menu`}
      >
        <IoCloseSharp
          className={`${
            openMenu ? "visible opacity-100" : "invisible opacity-0 hidden"
          } transition-all cursor-pointer text-white ease-in-out duration-300 w-[40px] h-[40px] absolute top-2 right-4 menu-hambrger z-50`}
          onClick={() => setOpenMenu((prev) => !prev)}
        />
        <div className="flex justify-center items-center flex-col gap-10 pt-3">
          <Link
            onClick={() => {
              scroll("about");
              setOpenMenu(false);
            }}
            className="text-sm font-normal"
            href="/"
          >
            About Us
          </Link>
          <Link className="text-sm font-normal" href="/">
            Tokenomics
          </Link>
          <Link
            onClick={() => {
              scroll("roadmap");
              setOpenMenu(false);
            }}
            className="text-sm font-normal"
            href="/"
          >
            Roadmap
          </Link>
          <Link
            onClick={() => {scroll("contact"); setOpenMenu(false);}}
            className="text-sm font-normal"
            href="/"
          >
            Contact Us
          </Link>
          {/* <Link className="text-sm font-normal" href="/">
            Contact
          </Link> */}
          {/* <Link className="text-sm font-normal" href="/">
            Logout
          </Link>
          <Link className="text-sm font-normal" href="/">
            Cart(1)
          </Link> */}
        </div>
      </div>
    </div>
  );
};
export default Menu;
