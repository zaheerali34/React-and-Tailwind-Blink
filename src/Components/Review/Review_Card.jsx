import React from "react";
import { Review_Card } from "../Review/Review"
import { Section_Customer } from "../Section_Customer/Section_Customer";

export const Review = () => {
  return (
    <>
      <section className="flex items-center flex-col gap-[2rem] pt-[7rem]">
        <h3 className="text-blue-500 w-[5rem] border-2 border-blue-500 rounded-2xl text-center      font-semibold">
          Pricing
        </h3>
        <h1 className=" text-[2rem] font-bold w-[40%] text-center">
          6000+ Ratings Across Software Review
        </h1>
        <p className="w-[60%] text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          omnis reprehenderit deleniti maxime dolorum mollitia.
        </p>

        <div className="flex items-center justify-center gap-[7rem]">
            <Review_Card imgs={"./assets/asset 2.svg"}/>
            <Review_Card imgs={"./assets/asset 7.png"}/>
            <Review_Card imgs={"./assets/asset-15.svg"}/>
        </div>
      </section>
      <Section_Customer />
    </>
  );
};
