import React from "react";
import { motion } from "framer-motion";

export const Review = () => {
  const transition = { duration: 1, type: "spring " };

  return (
    <div className="flex items-center justify-center gap-[7rem] max-sm:flex-col">
      <motion.div 
      initial={{opacity: 0, translateY: "20px"}}
      whileInView={{opacity: 1, translateY: "0px"}}
      viewport={{once: true}}
      transition={transition}

      >
        <div className="w-[3.5rem] h-[3.5rem] bg-[url('./assets/asset-13.svg')] bg-center bg-no-repeat bg-cover flex items-center">
          <h1 className="pl-[1rem] text-[2rem] font-bold">100%</h1>
        </div>
        <h4 className="pl-[1rem] text-gray-500">Satisfaction</h4>
      </motion.div>

      <motion.div 
       initial={{opacity: 0, translateY: "30px"}}
       whileInView={{opacity: 1, translateY: "0px"}}
       viewport={{once: true}}
       transition={transition}
       
      >
        <div className="w-[3.5rem] h-[3.5rem] bg-[url('./assets/asset-14.svg')] bg-center bg-no-repeat bg-cover flex items-center">
          <h1 className="pl-[1rem] text-[2rem] font-bold">120k</h1>
        </div>
        <h4 className="pl-[1rem] text-gray-500">Happy Use</h4>
      </motion.div>

      <motion.div
      initial={{opacity: 0, translateY: "40px"}}
      whileInView={{opacity: 1, translateY: "0px"}}
      viewport={{once: true}}
      transition={transition}
      
      >
        <div className="w-[3.5rem] h-[3.5rem] bg-[url('./assets/asset-15.svg')] bg-center bg-no-repeat bg-cover flex items-center">
          <h1 className="pl-[1rem] text-[2rem] font-bold">125k</h1>
        </div>
        <h4 className="pl-[1rem] text-gray-500">Download</h4>
      </motion.div>
    </div>
  );
};
