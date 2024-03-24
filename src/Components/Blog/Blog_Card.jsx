import React from "react";

export const Blog_Card = ({ imgs, idx }) => {
  let tilte = [
    "Make a better Website solution for your product.",
    "The Science of Color Contrast - An Expert Desing Guide",
    "SEO Mode Simple: A Step by Step Guide for 2020",
  ];
  return (
    <div className="mt-[2rem] flex items-center justify-between">
      <div className="w-[18rem] h-[30rem] bg-white shadow-lg rounded-[15px] flex items-start justify-center flex-col gap-[1.5rem] p-[1rem] max-sm:w-full max-md:h-full max-sm:m-[1rem]">
        <img src={imgs} alt="" className="w-[100%]" />
        <h3 className="text-blue-500 font-semibold text-[15px]">
          Web Solution
        </h3>
        <h1 className="text-[1rem] font-bold">{tilte[idx]}</h1>
        <p className="text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
          deleniti, minima veniam tempore est quis!
        </p>

        <button className="text-gray-500 font-semibold hover:tracking-[1.5px] transition-all">
          Read Blog
        </button>
      </div>
    </div>
  );
};
