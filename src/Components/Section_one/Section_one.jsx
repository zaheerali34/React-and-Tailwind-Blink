import React from "react";
import { Cards } from "./Cards";
import { motion } from "framer-motion";

export const Section_one = () => {
    const transition = { duration: 1.5, type: "spring " };
  return (
    <>
      <section className="w-full h-[100vh] bg-slate-100 mt-[10rem] flex items-center flex-col">
        <div className="flex items-center flex-col gap-[1.5rem] pt-[5rem]">
          <motion.div 
          initial={{ opacity: 0, translateY: "-20px"}}
          whileInView={{ opacity: 1, translateY: "0 "}}
          transition={transition}
          viewport={{ once: true }}
          
          className="text-blue-400 font-semibold w-[14rem] h-[2.5rem] border-2 border-blue-400 text-center pt-[0.3rem] rounded-3xl cursor-pointer">
            Service We Provide
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, translateY: "25px"}}
            whileInView={{ opacity: 1, translateY: "0 "}}
            transition={transition}
            viewport={{ once: true }}
          
          className="font-bold text-3xl w-[35%] text-center">
            Mix & Match Our Tools Plan That Fits
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, translateY: "30px"}}
            whileInView={{ opacity: 1, translateY: "0 "}}
            transition={transition}
            viewport={{ once: true }}

          className="w-[60%] text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nemo aliquid blanditiis consequatur suscipit repudiandae!
          </motion.p>
        </div>

        <Cards />
      </section>
    </>
  );
};
