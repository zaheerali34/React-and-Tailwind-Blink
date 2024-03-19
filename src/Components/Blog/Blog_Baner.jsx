import React from 'react'

export const Blog_Baner = () => {
  return (
    <>
        <section className='w-[90%] h-[10rem] bg-blue-500 m-auto rounded-xl mt-[5rem] p-[2rem] flex items-center justify-between'>
            <div>
                <h2 className=' text-white text-[1.7rem] font-bold'>Ready to dive in Start your free trial today.</h2>
            </div>

            <div className='pt-[3.3rem] w-[100%]'>
                <img src="./assets/asset 12.svg" alt="" />
            </div>

            <div>
                <button className='w-[8rem] h-[3.5rem] bg-white rounded-[8px] text-center font-semibold hover:bg-orange-500 hover:text-white transition'>Get Start</button>
            </div>
        </section>
    </>
  )
}
