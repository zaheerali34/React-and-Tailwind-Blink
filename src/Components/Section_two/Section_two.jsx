import React from "react";
import { motion } from "framer-motion";

export const Section_two = () => {
    const transition = { duration: 1, type: "spring " };

    return (
    <>
      <section className="flex items-center justify-between m-[2rem] mt-[7rem] gap-[40px] max-md:flex-col">
        <motion.img 
        initial={{opacity: 0, translateX: "-50px", transitionDuration: "0.5s"}}
        whileInView={{opacity: 1, translateX: "15px"}}
        transition={transition}
        viewport={{once: true}}
        
        src="./assets/asset 2.svg" alt="" className="w-[50%] max-md:w-[100%]" />

        <div className="flex items-start flex-col gap-[0.7rem] max-md:text-center max-md:items-center">
          <motion.h3 
          initial={{opacity: 0, translateY: "20px"}}
          whileInView={{opacity: 1, translateY: "-10px", transitionDuration: "0.5s"}}
          transition={transition}
          viewport={{once: true}}

          className="text-blue-500 font-semibold">Management & Analysis</motion.h3>
          <motion.h1 
           initial={{opacity: 0, translateY: "30px"}}
           whileInView={{opacity: 1, translateY: "-10px", transitionDuration: "0.8s"}}
           transition={transition}
           viewport={{once: true}}

          className="font-bold text-[2rem] w-[80%]">
            Solutions for every Single problems
          </motion.h1>
          <motion.p 
           initial={{opacity: 0, translateY: "50px"}}
           whileInView={{opacity: 1, translateY: "-10px", transitionDuration: "1.1s"}}
           transition={transition}
           viewport={{once: true}}
          
          className="w-[100%] text-gray-600">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium
          </motion.p>

          <div className="flex item-center justify-between max-md:flex-col">
            <motion.div 
            initial={{opacity: 0, translateY: "70px"}}
            whileInView={{opacity: 1, translateY: "-10px", transitionDuration: "1.3s"}}
            transition={transition}
            viewport={{once: true}}
            
            className="flex items-center gap-4 pt-[2rem]">
              <div className="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-blue-500 p-[1rem] flex items-center justify-center shadow-md shadow-slate-300 hover:bg-orange-500 transition">
                <img src="./assets/dashboard.png" alt="" />
              </div>

              <div className="flex items-start flex-col gap-5 w-[50%]">
                <h3 className=" text-gray-700 font-semibold text-[0.9rem]">
                  Multiple Managers
                </h3>
                <p className="text-gray-600 w-[150%] text-[0.8rem]">
                  Quis autem vel eum reprehenderit
                </p>
              </div>
            </motion.div>

            <motion.div 
            initial={{opacity: 0, translateY: "90px"}}
            whileInView={{opacity: 1, translateY: "-10px", transitionDuration: "1.5s"}}
            transition={transition}
            viewport={{once: true}}
            
            className="flex items-center gap-4 pt-[2rem]">
              <div className="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-blue-500 p-[1rem] flex items-center justify-center shadow-md shadow-slate-300 hover:bg-orange-500 transition">
                <img src="./assets/settings.png" alt="" />
              </div>

              <div className="flex items-start flex-col gap-5 w-[50%] ">
                <h3 className=" text-gray-700 font-semibold  text-[0.9rem]">
                  Multiple Managers
                </h3>
                <p className="text-gray-600 w-[150%] text-[0.8rem]">
                  Quis autem vel eum reprehenderit
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
