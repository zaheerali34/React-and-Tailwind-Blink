import React from "react";
import { Pricing_Cards } from "./Pricing_Cards";
import { Review_Card } from "../Review/Review_Card";
import { motion } from "framer-motion";

export const Section_Pricing = () => {
  const transition = { duration: 1, type: "spring " };

  const style = {
    color: "red",
    borderColor: "red",
  };
  return (
    <>
      <section className="w-full h-[100vh] bg-gray-200 max-md:h-[100%] max-md:p-[1rem]">
        <div className="flex items-center justify-center flex-col gap-[0.5rem] pt-[2rem]">
          <motion.h3 
           initial={{ opacity: 0, width: "0", fontSize: "0" }}
           whileInView={{
             opacity: 1,
             width: "7rem",
             fontSize: "1rem",
             transitionDuration: "0.1s",
           }}
           transition={transition}
           viewport={{ once: true }}
          
          className="text-blue-500 w-[5rem] border-2 border-blue-500 rounded-2xl text-center font-semibold">
            Pricing
          </motion.h3>
          <motion.h2 
          initial={{opacity: 0, translateY: "50px"}}
          whileInView={{opacity: 1, translateY: "0"}}
          viewport={{once:true}}
          transition={transition}
          className="font-bold text-[1.2rem]">Pricing & Plans</motion.h2>
          <motion.p 
            initial={{opacity: 0, translateY: "35px"}}
            whileInView={{opacity: 1, translateY: "0"}}
            viewport={{once:true}}
            transition={transition}

          className=" text-gray-600 w-[50%] text-center max-md:w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut fuga
            beatae doloremque velit illo iure!
          </motion.p>
        </div>

        <div className="flex items-center justify-center gap-[1rem] pt-[2rem] max-md:flex-wrap">
          <motion.div
          initial={{opacity: 0, translateY: "100px"}}
          whileInView={{opacity: 1, translateY: "0"}}
          viewport={{once:true}}
          transition={transition}
          ><Pricing_Cards tilte={"Stater"} pricing={"0"} /></motion.div>

          <motion.div 
           initial={{opacity: 0, translateY: "80px"}}
           whileInView={{opacity: 1, translateY: "0"}}
           viewport={{once:true}}
           transition={transition}
          >
          <Pricing_Cards tilte={"Exclusive"} pricing={"99"} style={style} />
          </motion.div>

          <motion.div
          initial={{opacity: 0, translateY: "50px"}}
          whileInView={{opacity: 1, translateY: "0"}}
          viewport={{once:true}}
          transition={transition}
          >
          <Pricing_Cards tilte={"Premiun"} pricing={"150"} />
          </motion.div>
        </div>
      </section>

      <Review_Card />
    </>
  );
};
