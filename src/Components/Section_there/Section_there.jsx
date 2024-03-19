import React from "react";

export const Section_there = () => {
  return (
    <>
      <section className="w-full h-[100vh] bg-gray-900 mt-[7rem] flex items-center pl-[2rem] pt-[0rem]">
        <div className="w-[50%] h-[60vh] bg-[url('./assets/asset-3.svg')] bg-center bg-no-repeat bg-cover pt-[30rem] mt-[10%] flex items-center justify-center flex-col text-white">
          <div className="mb-[35rem] p-[2rem] flex items-start flex-col gap-[0.5rem]">
            <h3 className=" font-semibold text-blue-500">Use & Customization</h3>
            <h1 className="text-[2rem] font-bold w-[80%]">Getting better way to Saas uses</h1>
            <p className=" text-gray-200">
              Sed ut perspiciatis unde omnis natus error voluptatem accusantium
              doloremque laudantium totam.
            </p>

            <div className="flex items-center gap-4 mt-[1.5rem]">
              <div className="w-[3rem] h-[3rem] bg-blue-500 rounded-[50%]"></div>
             <div>
             <h4 className="font-semibold">Become faster</h4>
              <button className="text-blue-500 font-semibold hover:tracking-[0.1rem] transition-all">
                Learn More
              </button>
             </div>
            </div>
          </div>
        </div>

        <div className="w-[50%] h-[60vh] bg-[url('./assets/asset-4.svg')] bg-center bg-no-repeat bg-cover mt-[20%]">
           <div className="mt-[-2rem]">
           <img src="./assets/asset 5.svg" alt="" className="w-[80%] "/>
           </div>
        </div>
      </section>
    </>
  );
};
