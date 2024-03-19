import React from 'react'

export const Footer = () => {
  return (
    <>
      <footer className='flex items-center justify-center gap-[5rem] m-[3rem]'>
        <div className='flex items-start flex-col'>
          <div className=''>
            <img src="./assets/asset 0.svg" alt="" className='w-[5rem]' />
            <p className='pt-[1rem] text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis laudantium</p>
          </div>

          <div className='pt-[3rem] text-gray-500'>
            <h2>@ 2024 Blink</h2>
            <h2>Web Development and Design</h2>
          </div>
        </div>

        <div>
          <h2 className=' font-bold'>Solutions</h2>
          <ul className='flex items-start flex-col gap-[0.5rem] pt-[1rem] text-gray-500'>
            <li>Marketing</li>
            <li>Analyics</li>
            <li>Commerce</li>
            <li>Insights</li>
          </ul>
        </div>

        <div>
          <h2 className=' font-bold'>Support</h2>
          <ul className='flex items-start flex-col gap-[0.5rem] pt-[1rem] text-gray-500'>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>APl Status</li>
          </ul>
        </div>

        <div>
          <h2 className=' font-bold'>Subscript</h2>
          <p className='text-gray-500 pt-[1rem] text-[]'>Subscribe to our newsletter for the latest updata</p>

         <div className='pt-[1.5rem]'>
          <input type="text" placeholder='Email address' className='w-[100%] h-[3rem] border-[2px] rounded-md pl-[10px] outline-none' />
         </div>
        </div>
      </footer>
    </>
  )
}
