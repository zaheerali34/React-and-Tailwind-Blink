import React from "react";
import { motion } from "framer-motion";

export const Section_two = () => {
    const transition = { duration: 1, type: "spring " };

    return (
    <>
      <section className="flex items-center justify-between m-[2rem] mt-[7rem] gap-[40px]">
        <motion.img 
        initial={{opacity: 0, translateX: "0"}}
        whileInView={{opacity: 1, translateX: "15px"}}
        transition={transition}
        viewport={{once: true}}
        
        src="./assets/asset 2.svg" alt="" className="w-[50%]" />

        <div className="flex items-start flex-col gap-[0.7rem] ">
          <h3 className="text-blue-500 font-semibold">Management & Analysis</h3>
          <h1 className="font-bold text-[2rem] w-[80%]">
            Solutions for every Single problems
          </h1>
          <p className="w-[100%] text-gray-600">
            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
            doloremque laudantium
          </p>

          <div className="flex item-center justify-between">
            <div className="flex items-center gap-4 pt-[2rem]">
              <div className="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-blue-500 p-[1rem] flex items-center justify-center shadow-md shadow-slate-300">
                <img src="./asset/asset 2.svg" alt="" />
              </div>

              <div className="flex items-start flex-col gap-5 w-[50%]">
                <h3 className=" text-gray-700 font-semibold text-[0.9rem]">
                  Multiple Managers
                </h3>
                <p className="text-gray-600 w-[150%] text-[0.8rem]">
                  Quis autem vel eum reprehenderit
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-[2rem]">
              <div className="w-[3.5rem] h-[3.5rem] rounded-[50%] bg-blue-500 p-[1rem] flex items-center justify-center shadow-md shadow-slate-300">
                <img src="./asset/asset 2.svg" alt="" />
              </div>

              <div className="flex items-start flex-col gap-5 w-[50%] ">
                <h3 className=" text-gray-700 font-semibold  text-[0.9rem]">
                  Multiple Managers
                </h3>
                <p className="text-gray-600 w-[150%] text-[0.8rem]">
                  Quis autem vel eum reprehenderit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
