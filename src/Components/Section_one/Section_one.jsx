import React from "react";
import { motion } from "framer-motion";
import { CardTable } from "./CardTable";
import { Section_two } from "../Section_two/Section_two";

export const Section_one = () => {
  const transition = { duration: 1.2, type: "spring " };
  return (
    <>
      <section className="w-full h-[115vh] bg-slate-100 mt-[7rem] flex items-center flex-col max-md:h-[100%]">
        <div className="flex items-center flex-col gap-[1.5rem] pt-[3rem]">
          <motion.div
            initial={{ opacity: 0, width: "0", fontSize: "0" }}
            whileInView={{
              opacity: 1,
              width: "15rem",
              fontSize: "1rem",
              transitionDuration: "0.1s",
            }}
            transition={transition}
            viewport={{ once: true }}
            className="text-blue-400 font-semibold w-[14rem] h-[2.5rem] border-2 border-blue-400 text-center pt-[0.3rem] rounded-3xl cursor-pointer max-md:w-full"
          >
            Service We Provide
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, translateY: "40px" }}
            whileInView={{ opacity: 1, translateY: "0 " }}
            transition={transition}
            viewport={{ once: true }}
            className="font-bold text-3xl w-[35%] text-center max-md:w-[80%]"
          >
            Mix & Match Our Tools Plan That Fits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, translateY: "60px" }}
            whileInView={{ opacity: 1, translateY: "0 " }}
            transition={transition}
            viewport={{ once: true }}
            className="w-[60%] text-center text-gray-500 max-md:w-full"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            nemo aliquid blanditiis consequatur suscipit repudiandae!
          </motion.p>
        </div>

        <CardTable />
      </section>

      <Section_two />
    </>
  );
};
