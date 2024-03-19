import React from "react";
import { Blog } from "../Blog/Blog";

export const Section_Customer = () => {
  return (
    <>
      <section className="w-full h-[100vh] bg-gray-200 mt-[7rem] pt-[4rem]">
        <div className="flex items-center justify-center flex-col gap-[1.5rem]">
          <h3 className="text-blue-500 w-[13rem] h-[2.5rem] pt-[0.3rem] border-2 border-blue-500 rounded-3xl text-center font-semibold">Coustomer Review</h3>
          <h1 className="font-bold text-3xl">Out Testimonials</h1>
          <p className="w-[50%] text-center leading-[30px] text-gray-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione culpa, voluptates laudantium a fuga perspiciatis?</p>
        </div>
      </section>

      <Blog />
    </>
  );
};
