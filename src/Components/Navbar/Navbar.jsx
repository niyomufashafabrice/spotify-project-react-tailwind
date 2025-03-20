import React from 'react'
import logo from '../Images/logo.png'
import { LiaHomeSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { GrInstallOption } from "react-icons/gr";
import { PiBrowserDuotone } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className='bg-black  justify-start flex h-[10vh]'>
      <div className="container  flex text-white justify-start items-center w-[100%]">
        
      <div className="logo flex w-[10%] px-2 gap-4 pl-5">
            <img src={logo} alt="" className='h-[50px] w-[50px]' />
            <LiaHomeSolid className='h-[50px] w-[50px]' />
        </div>
        
        <div className="search flex flex-row relative w-[40%] 
        justify-center items-center
        ">
            <input type="text" placeholder='What do you want to play?'
            className='py-[16px] w-[100%] order-2 px-[80px]
            rounded-4xl bg-gray-900 font-bold text-[16px]'
            />
          <CiSearch className='left-3 h-[40px] w-[10%] order-1 absolute'/>
       
          <PiBrowserDuotone className='right-3 h-[40px] w-[10%] order-3 absolute z-10 border-l-2 border-gray-500 text-gray-500'/>
        
        </div>
        <div className="menLink flex justify-center items-center w-[40%] text-gray-500">
          <ul className='flex space-x-4 border-r-3 border-white justify-center items-center  w-[55%] font-bold text-[16px]'>
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
          </ul>
          <ul className='flex space-x-4  w-[45%] justify-center items-center font-bold text-[16px]'>
            <li className='flex items-center gap-1 '>
                <GrInstallOption />
                Install App</li>
            <li>Sign up</li>
          </ul>
        </div>
        <div className="loginbtn w-[10%]">
            <button className='bg-white text-black text-[16px] py-[5px]
             px-[50px] font-semibold rounded-4xl hover:scale-[1.1] transition-transform duration-300'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
