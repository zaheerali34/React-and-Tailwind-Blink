import React from "react";

export const Header = () => {
  return (
    <>
      <header className="w-full h-20 bg-white shadow-md flex items-center justify-between p-12 fixed top-0 left-0 right-0 z-[99]">
        <div className="w-[7rem] cursor-pointer">
          <img src="./assets/asset 0.svg" alt="" />
        </div>

        <nav className="max-lg:absolute top-[6.2rem] w-[20rem] h-[15rem] bg-white shadow-xl fixed right-[1rem]">
          <ul className="flex items-center gap-4 cursor-pointer max-xl:flex-col pt-[1.5rem]">
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

        <button id="menu_btn" className="fixed right-[1rem] top-0 border-none bg-none w-[20px] h-[20px] z-50 cursor-pointer rotate-[90deg]" type="button">
            <span className="w-[40px] h-[2px] bg-black absolute rotate-[45deg] translate-y-[6px] translate-x-[6px] "></span>
            <span className="w-[40px] h-[2px] bg-black absolute flex-none"></span>
            <span className="w-[40px] h-[2px] bg-black absolute rotate-[45deg] translate-y-[6px] translate-x-[-6px] "></span>
        </button>
      </header>

    </>
  );
};
