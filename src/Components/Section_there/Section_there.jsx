import React from "react";
import { motion } from "framer-motion";

export const Section_there = () => {
  const transition = { duration: 1, type: "spring " };
  return (
    <>
      <section className="w-full h-[100vh] bg-gray-900 mt-[7rem] flex items-center pl-[2rem] pt-[0rem] max-md:flex-col max-md:h-[100%]">
        <div className="w-[50%] h-[60vh] bg-[url('./assets/asset-3.svg')] bg-center bg-no-repeat bg-cover pt-[30rem] mt-[10%] flex items-center justify-center flex-col text-white max-sm:w-full">
          <div className="mb-[35rem] p-[2rem] flex items-start flex-col gap-[0.5rem] max-md:w-[35rem] max-md:items-center max-md:text-center">
            <motion.h3 
            initial={{opacity: 0, translateY: "50px", transitionDuration: "0.5s"}}
            whileInView={{opacity: 1, translateY: "0px"}}
            transition={transition}
            viewport={{once:true}}
            
            className=" font-semibold text-blue-500">Use & Customization</motion.h3>
            <motion.h1 
            initial={{opacity: 0, translateY: "70px", transitionDuration: "0.9s"}}
            whileInView={{opacity: 1, translateY: "0px"}}
            transition={transition}
            viewport={{once:true}}
            
            className="text-[2rem] font-bold w-[80%] max-md:text-[1rem]">Getting better way to Saas uses</motion.h1>
            <motion.p 
            initial={{opacity: 0, translateY: "90px", transitionDuration: "1.1s"}}
            whileInView={{opacity: 1, translateY: "0px"}}
            transition={transition}
            viewport={{once:true}}
            
            className=" text-gray-200 max-md:text-[0.7rem] w-[50%]">
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium
              doloremque laudantium totam.
            </motion.p>

            <motion.div 
             initial={{opacity: 0, translateY: "100px", transitionDuration: "1.3s"}}
             whileInView={{opacity: 1, translateY: "0px"}}
             transition={transition}
             viewport={{once:true}}
            
            className="flex items-center gap-4 mt-[1.5rem]">
              <div className="w-[3rem] h-[3rem] bg-blue-500 rounded-[50%] p-[0.7rem]">
                <img src="./assets/flash.png" alt="" />
              </div>
             <div>
             <h4 className="font-semibold">Become faster</h4>
              <button className="text-blue-500 font-semibold hover:tracking-[0.1rem] transition-all">
                Learn More
              </button>
             </div>
            </motion.div>
          </div>
        </div>

        <div className="w-[50%] h-[60vh] bg-[url('./assets/asset-4.svg')] bg-center bg-no-repeat bg-cover mt-[20%] max-sm:w-full">
           <div className="mt-[-2rem]">
           <motion.img 
           initial={{opacity: 0, translateX: "90px", transitionDuration: "0.7s"}}
           whileInView={{opacity: 1, translateX: "30px"}}
           transition={transition}
           viewport={{once:true}}
           
           src="./assets/asset 5.svg" alt="" className="w-[80%] "/>
           </div>
        </div>
      </section>
    </>
  );
};
