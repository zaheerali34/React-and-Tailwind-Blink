import React from "react";
import { Cards } from "./Cards";

export const CardTable = () => {
  return (
    <>
      <div className="flex items-center gap-8 max-md:flex-wrap">
        <Cards imgs={"./assets/asset 2.svg"} idx={[0]} />
        <Cards imgs={"./assets/asset 1.svg"} idx={[1]}/>
        <Cards imgs={"./assets/asset 0.svg"} idx={[2]}/>
      </div>
    </>
  );
  
};
