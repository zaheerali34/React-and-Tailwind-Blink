import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { Rounded } from "../Rounded Bg/Rounded-bg";

export const Home = () => {
  const transition = { duration: 1, type: "spring " };

  return (
    <>
      <div className="mt-[12rem] flex items-center justify-between gap-[2rem] m-[3rem] max-[990px]:flex-col">
        <div className="flex items-start flex-col gap-8  max-[990px]:ml-[50%]">
          <motion.h1 
           initial={{ opacity: 0, translateY: "30px"}}
           whileInView={{ opacity: 1, translateY: "0" }}
           transition={transition}
           viewport={{ once: true }}
          
          className=" font-bold text-4xl w-[15rem] max-[990px]:m-auto leading-[3rem]"
          >Full Stack Development <span className=" text-orange-500 -z-50">Websites</span>
          </motion.h1>

          <p>
            Improve your daily UX work and create wireframes and diagrams,
            prototypes, handoff documentation.
          </p>

          <Button />
        </div>
        <Rounded />
        <img
          src="./assets/app.svg"
          alt=""
          className="w-[30rem] shadow-xl rounded-lg z-50"
        />
      </div>

      <div className="w-[3rem] h-[3rem] rounded-md bg-blue-500 shadow-md text-center pt-[0.8rem] fixed right-[1rem] text-white z-50">
        <button>?</button>
      </div>
    </>
  );
};
