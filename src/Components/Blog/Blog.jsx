import React from "react";
import { Blog_Card } from "./Blog_Card";
import { Blog_Baner } from "./Blog_Baner";

export const Blog = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col pt-[5rem]">
        <div className="flex items-center justify-center gap-[1.5rem] flex-col text-center">
          <h3 className="text-blue-500 w-[5rem] border-2 border-blue-500 rounded-2xl text-center font-semibold">
            Blog
          </h3>

          <h1 className="text-[2rem] font-bold">Our Latest News</h1>
          <p className="text-gray-500 w-[70%] leading-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            deleniti, alias laborum ut doloribus quam!
          </p>
        </div>

        <div className="flex items-center justify-center gap-[1.5rem] pt-[3rem]">
          <Blog_Card imgs={"./assets/asset 9.jpeg"} idx={[0]}/>
          <Blog_Card imgs={"./assets/asset 10.jpeg"} idx={[1]}/>
          <Blog_Card imgs={"./assets/asset 11.jpeg"} idx={[2]}/>
        </div>
      </section>

      <Blog_Baner />
    </>
  );
};
