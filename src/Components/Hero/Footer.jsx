import React from 'react'
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <div className='container'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
       
       <div className='flex flex-col gap-2'>
        <h1 className='text-white text-xl font-bold'>Company</h1>
        <ul className='text-gray-400 tex-xl font-semibold space-y-3'>
            <li>About</li>
            <li>Jobs</li>
            <li>For the Record</li>
        </ul>
       </div>

       <div className='flex flex-col gap-2'>
        <h1 className='text-white text-2xl font-bold'>Communities</h1>
        <ul className='text-gray-400 tex-xl font-semibold space-y-3'>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
        </ul>
       </div>

       <div className='flex flex-col gap-2'>
        <h1 className='text-white text-2xl font-bold'>Useful links</h1>
        <ul className='text-gray-400 tex-xl font-semibold space-y-3'>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
        </ul>
       </div>
       <div className='flex flex-col gap-2'>
        <h1 className='text-white text-2xl font-bold'>Spotify Plan</h1>
        <ul className='text-gray-400 tex-xl font-semibold space-y-3'>
            <li>Premium Individual</li>
            <li>Premium Duo</li>
            <li>Premium Family</li>
            <li>Premium Student</li>
            <li>Spotify Free</li>
        </ul>
       </div>
       <div className='text-white text-2xl font-bold flex gap-5'>
       <div className='bg-gray-800 p-2 rounded-full h-[50px] w-[50px] flex justify-center items-center cursor-pointer
       hover:scale-[1.2] transition-transform duration-300
       '><FaInstagram className='' /></div>
       <div className='bg-gray-800 p-2 rounded-full h-[50px] w-[50px] flex justify-center items-center
       cursor-pointer hover:scale-[1.2] transition-transform duration-300
       '><FaTwitter /></div>
       <div className='bg-gray-800 p-2 rounded-full h-[50px] w-[50px] flex justify-center items-center
       cursor-pointer hover:scale-[1.2] transition-transform duration-300
       '><FaFacebook /></div>
       </div>
      </div>
      <div className='border-t-2 border-gray-500 text-gray-400 pt-[40px] mt-[40px]'>
      &copy; 2022 Spotify AB
      </div>
      </div>
    </div>
  )
}

export default Footer
