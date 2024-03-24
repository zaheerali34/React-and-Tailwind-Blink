import React from "react";
import { Blog_Card } from "./Blog_Card";
import { Blog_Baner } from "./Blog_Baner";
import { motion } from "framer-motion";

export const Blog = () => {
  const transition = { duration: 1, type: "spring " };

  return (
    <>
      <section className="flex items-center justify-center flex-col pt-[5rem] max-md:h-[100%]">
        <div className="flex items-center justify-center gap-[1.5rem] flex-col text-center">
          <motion.h3 
           initial={{ opacity: 0, width: "0", fontSize: "0" }}
           whileInView={{
             opacity: 1,
             width: "5rem",
             fontSize: "1rem",
             transitionDuration: "0.1s",
           }}
           transition={transition}
           viewport={{ once: true }}
          
          className="text-blue-500 w-[5rem] border-2 border-blue-500 rounded-2xl text-center font-semibold">
            Blog
          </motion.h3>

          <motion.h1 
           initial={{opacity: 0, translateY: "20px"}}
           whileInView={{opacity: 1, translateY: "0"}}
           transition={transition}
           viewport={{once: true}}
          
          className="text-[2rem] font-bold">Our Latest News</motion.h1>
          <motion.p 
          initial={{opacity: 0, translateY: "40px"}}
          whileInView={{opacity: 1, translateY: "0"}}
          transition={transition}
          viewport={{once: true}}
          
          className="text-gray-500 w-[70%] leading-8 max-md:full">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            deleniti, alias laborum ut doloribus quam!
          </motion.p>
        </div>

        <div className="flex items-center justify-center gap-[1.5rem] pt-[3rem] max-md:flex-wrap">
          <motion.div
          initial={{opacity: 0, translateX: "-10px"}}
          whileInView={{opacity: 1, translateX: "0"}}
          transition={transition}
          viewport={{once: true}}
          
          ><Blog_Card imgs={"./assets/asset 9.jpeg"} idx={[0]}/></motion.div>
         <motion.div
           initial={{opacity: 0, translateX: "-20px"}}
           whileInView={{opacity: 1, translateX: "0"}}
           transition={transition}
           viewport={{once: true}}
         
         ><Blog_Card imgs={"./assets/asset 10.jpeg"} idx={[1]}/></motion.div>
          <motion.div 
           initial={{opacity: 0, translateX: "-30px"}}
           whileInView={{opacity: 1, translateX: "0"}}
           transition={transition}
           viewport={{once: true}}
          
          ><Blog_Card imgs={"./assets/asset 11.jpeg"} idx={[2]}/></motion.div>
        </div>
      </section>

      <Blog_Baner />
    </>
  );
};
