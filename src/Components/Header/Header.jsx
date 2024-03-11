import React from "react";

export const Header = () => {
  return (
    <>
      <header className="w-full h-20 bg-white shadow-md flex items-center justify-between p-12 fixed top-0 left-0 right-0 z-[99]">
        <div className="w-[7rem] cursor-pointer">
          <img src="./assets/asset 0.svg" alt="" />
        </div>

        <nav>
          <ul className="flex items-center gap-4 cursor-pointer max-[990px]:hidden">
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

        <div className="flex items-center gap-6">
          <button className=" font-semibold hover:text-blue-500 hover:transition">
            Sing In
          </button>
          <button className="font-semibold bg-blue-500 w-[6.5rem] h-[2.5rem] rounded-3xl text-white hover:bg-orange-500 hover:transition">
            Sing Up
          </button>
        </div>
      </header>
    </>
  );
};
