import React, { useRef } from "react";

export const Header = () => {
  return (
    <>
      <header className="w-full h-20 bg-white shadow-md flex items-center justify-between p-12 fixed top-0 left-0 right-0 z-[99] max-md:w-[100vw]">
        <div className="w-[7rem] cursor-pointer ">
          <img src="./assets/asset 0.svg" alt="" className=" max-sm:w-[4rem]" />
        </div>

        <nav className="max-md:absolute max-md:top-[5rem] max-md:right-[-100%]">
          <ul className="flex items-center gap-4 cursor-pointer max-md:flex-col max-md:w-[20rem] max-md:h-[15rem] max-md:bg-white max-md:shadow-xl max-md:rounded-md max-md:pt-[1.5rem]">
            <li className="text-black font-semibold hover:text-blue-500 transition">
              Home
            </li>
            <li className="text-black font-semibold hover:text-blue-500 tran">
              About
            </li>
            <li className="text-black font-semibold hover:text-blue-500 tran">
              Services
            </li>
            <li className="text-black font-semibold hover:text-blue-500 tran">
              Blog
            </li>
            <li className="text-black font-semibold hover:text-blue-500 tran">
              Contact
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-6 max-sm:gap-2">
          <button className=" font-semibold hover:text-blue-500 hover:transition max-sm:text-[10px]">
            Sing In
          </button>
          <button className="font-semibold bg-blue-500 w-[6.5rem] h-[2.5rem] rounded-3xl text-white hover:bg-orange-500 hover:transition max-sm:w-[4rem] max-sm:h-[2rem] max-sm:text-[13px]">
            Sing Up
          </button>

          <div>
            <img src="./assets/menu.png" alt="" className=" min-[769px]:hidden" />
          </div>
        </div>
      </header>
    </>
  );
};
