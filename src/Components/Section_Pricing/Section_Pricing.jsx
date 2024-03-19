import React from "react";
import { Pricing_Cards } from "./Pricing_Cards";
import { Review } from "../Review/Review_Card";

export const Section_Pricing = () => {
    const style = {
      color: "red",
      borderColor: "red",
    } 
  return (
    <>
      <section className="w-full h-[100vh] bg-gray-200">
        <div className="flex items-center justify-center flex-col gap-[0.5rem] pt-[2rem]">
          <h3 className="text-blue-500 w-[5rem] border-2 border-blue-500 rounded-2xl text-center font-semibold">
            Pricing
          </h3>
          <h2 className="font-bold text-[1.2rem]">Pricing & Plans</h2>
          <p className=" text-gray-600 w-[50%] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
            beatae doloremque velit illo iure!
          </p>
        </div>

       <div className="flex items-center justify-center gap-[1rem] pt-[2rem]">
         <Pricing_Cards tilte={"Stater"} pricing={"0"}/>
         <Pricing_Cards tilte={"Exclusive"} pricing={"99"} style={style} />
         <Pricing_Cards tilte={"Premiun"} pricing={"150"}/>
       </div>
      </section>

      <Review />
    </>
  );
};
