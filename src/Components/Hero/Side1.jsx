import React from 'react'
import { IoLibraryOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const PlaylistData =[
{
  Id:1,
  title:"Create your first playlist",
  description:"It's easy, we'll help you",
  button:"Create playlist"
},
{
  id:2,
  title:"Let's find some podcasts to follow",
  description:"We'll keep you updated on new episodes",
  button:"Browse podcasts"
}

]
const Side1 = () => {
  return (
    <div className='bg-gray-900 w-[26%] rounded-xl py-[30px] h-[80vh] px-[20px]'>
      <div className=''>
        <div className='flex items-start text-white justify-between px-[20px] h-[90px]'>
        <span className='flex items-center gap-5'><IoLibraryOutline />
        <p>your Library</p></span>
        <span><FaPlus /></span>
        </div>

        <div className='
        flex flex-col gap-[30px] h-[308px] overflow-y-auto scrollbar-thin scrollbar-red-500 scrollbar-track-gray-900 pb-[30px] scrollbar'>

          {
            PlaylistData.map((item)=>{
              return(
                <div className='bg-gray-800 flex flex-col gap-4 justify-center items-start p-[20px] rounded-2xl' key={item.id}>
            <h1 className='text-white text-xl font-bold' >{item.title}</h1>
            <p className='text-white text-lg font-semibold'>{item.description}</p>
            <button className='bg-white py-[10px] px-[30px] 
            rounded-3xl hover:scale-[1.1] transition-transform duration-300'>{item.button}</button>
          </div>
              )
            })
          }
         
          
        </div>
        <div className=' flex flex-col gap-2 items-start justify-center  px-[20px] py-[0px]'>
          <ul className='flex space-x-4 text-gray-400'>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Safety & Privacy Center</a></li>
            <li><a href="#">Privacy policy</a></li>
          </ul>
          <ul className='flex space-x-4 text-gray-400'>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">About Ads</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
          <span className='text-white cursor-pointer'>Cookies</span>
          <div>
            <button className=' hover:scale-[1.1] transition-transform duration-300
            flex items-center gap-2 text-white border-1 border-white py-[5px] px-[20px] rounded-3xl cursor-pointer'>
            <HiOutlineGlobeAlt />
              English
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Side1
