import React from "react";
import { motion } from "framer-motion";

export const Cards = ({ imgs, idx }) => {
  const transition = { duration: 1, type: "spring " };
  let Text_tilte = [
    ["Mobile auto layout"],
    ["2500+ Free icons"],
    ["Easy to use components"],
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "0" }}
        whileInView={{ opacity: 1, translateY: "15px" }}
        transition={transition}
        viewport={{ once: true }}
        className="w-[18rem] h-[22rem] bg-white rounded-2xl shadow-xl mt-[3rem] flex items-start flex-col gap-[2rem] justify-center pt-[0.5rem] pl-[2rem] max-md:w-[100%] max-md:m-[2rem]"
      >
        <img
          src={imgs}
          alt=""
          className="w-[4rem] h-[4rem] rounded-2xl bg-blue-500 p-[1rem] shadow-2xl shadow-slate-600"
        />

        <h2 className="font-semibold text-[1.5rem]">{Text_tilte[idx]}</h2>
        <p className="text-gray-600 text-[1rem]">
          We have auto mobile layout that help you faster UI and wireframe
          design.
        </p>

        <button className="text-blue-500 font-semibold hover:tracking-[0.1rem] transition-all">
          Learn More
        </button>
      </motion.div>
    </>
  );
};
