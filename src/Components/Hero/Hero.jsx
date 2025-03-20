import React from 'react'
import Side1 from './Side1'
import Side2 from './Side2'

const Hero = () => {
  return (
    <div className='bg-black h-[vh]'>
      <div className=" flex pb-[10px] px-[10px] gap-[10px]">
        <Side1 />
        <Side2 />
      </div>
      <div className='flex flex-row justify-between items-center px-[30px] py-[0px]
      bg-gradient-to-r from-[#AB2C9A] to-[#5D8AE7] h-[6vh]
      '>
        <div>
          <h1 className='text-white text-xl font-bold'>Preview of Spotify</h1>
          <p className='text-white'>Sign up get unlimited songs and podcasts with occasional ads. No credit card needed </p>
        </div>
        <div>
          <button className='bg-white py-[10px] px-[30px] rounded-3xl 
          cursor-pointer hover:scale-[1.1] transition-transform duration-300
          '>Sign up free</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
