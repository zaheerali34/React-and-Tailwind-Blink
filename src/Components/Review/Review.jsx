import React from "react";

export const Review_Card = ({imgs}) => {
  return (
    <div>
      <div className="w-[3.5rem] h-[3.5rem] bg-center bg-no-repeat bg-cover flex items-center">
        {imgs}
        <h1 className="pl-[1rem] text-[2rem] font-bold">100%</h1>
      </div>
      <h4 className="p-[0.5rem]">Satisfaction</h4>
    </div>
  );
};
