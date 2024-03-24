import React from "react";
import { Section_Customer } from "../Section_Customer/Section_Customer";
import { Review } from "./Review";

export const Review_Card = () => {
  return (
    <>
      <section className="flex items-center flex-col gap-[2rem] pt-[7rem]">
        <h3 className="text-blue-500 w-[5rem] border-2 border-blue-500 rounded-2xl text-center      font-semibold">
          Review
        </h3>
        <h1 className=" text-[2rem] font-bold w-[40%] text-center max-md:w-full">
          6000+ Ratings Across Software Review
        </h1>
        <p className="w-[60%] text-center text-gray-500 max-md:w-full max-md:p-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          omnis reprehenderit deleniti maxime dolorum mollitia.
        </p>  

        <Review />
      </section>

      <Section_Customer />
    </>
  );
};
