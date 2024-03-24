import React from "react";
import { Button } from "../Button/Button";

export const Pricing_Cards = ({ tilte, pricing, style}) => {
  return (
    <>
      <div className="w-[17rem] h-[27rem] bg-white rounded-md flex items-center justify-center flex-col text-center gap-[1rem] shadow-sm max-sm:w-[100%]">
        <h3
          style={style}
          className="text-blue-500 w-[7rem] border-2 border-blue-500 rounded-3xl p-2 text-center font-semibold"
        >
          {tilte}
        </h3>
        <p className="text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing.
        </p>
        <h1 className="text-[2.5rem] font-bold">
          <sup className=" text-gray-400 font-semibold text-[1.7rem]">$</sup>
          {pricing}{" "}
          <span className="text-[1rem] font-semibold text-gray-400">/mo</span>
        </h1>
        <Button/>

        <p className=" leading-[2rem] w-[50%] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </p>
      </div>
    </>
  );
};
