import React from "react";
import { Cards } from "./Cards";

export const CardTable = () => {
  return (
    <>
      <div className="flex items-center gap-8 max-md:flex-wrap">
        <Cards imgs={"./assets/android.png"} idx={[0]} />
        <Cards imgs={"./assets/heart.png"} idx={[1]}/>
        <Cards imgs={"./assets/point.png"} idx={[2]}/>
      </div>
    </>
  );
  
};
