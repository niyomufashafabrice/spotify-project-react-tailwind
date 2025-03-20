import React from 'react'
import image1 from '../Images/artite/Drake.jfif';
import image2 from '../Images/artite/kendrick.jpg';
import image3 from '../Images/artite/cb.jfif';
import image4 from '../Images/artite/rema.jfif';
import image5 from '../Images/artite/Aske.jfif';
import image6 from '../Images/artite/buna.jfif';
import { IoPlaySharp } from "react-icons/io5";

import img1 from '../Images/T-songs/song1.jfif';
import img2 from '../Images/T-songs/song2.jfif';
import img3 from '../Images/T-songs/song3.jfif';
import img4 from '../Images/T-songs/song4.jfif';
import img5 from '../Images/T-songs/song5.jfif';
import img6 from '../Images/T-songs/song6.jfif';

import imagee1 from '../Images/Album/GNX.jfif';
import imagee2 from '../Images/Album/morayo.jfif';
import imagee3 from '../Images/Album/Deluxe.jfif';
import imagee4 from '../Images/Album/One-of-wun.jfif';
import imagee5 from '../Images/Album/work-of-art.jfif';
import imagee6 from '../Images/Album/ganza.jfif';
import Footer from './Footer';


const artists = [
  {
    id:1,
    img:image1,
    name:"Drake",
    type:"Artist"

  },
  {
    id:2,
    img:image2,
    name:"Kendrick Lamar",
    type:"Artist"
  },
  {
    id:3,
    img:image3,
    name:"Chris Brown",
    type:"Artist"
  },
  {
    id:4,
    img:image4,
    name:"Rema",
    type:"Artist"
  },
  {
    id:5,
    img:image5,
    name:"Asake",
    type:"Artist"
  },
  {
    id:6,
    img:image6,
    name:"BurnaBoy",
    type:"Artist"
  },
  
];

const Songs = [
  {
    id:1,
    img:img1,
    song:"Save Your Tears",
    Artist:"The Weeknd"
  },
  {
    id:2,
    img:img2,
    song:"Umbrella",
    Artist:"Jay Z"
  },
  {
    id:3,
    img:img3,
    song:"Diamonds",
    Artist:"Rihanna "
  },
  {
    id:4,
    img:img4,
    song:"Hello",
    Artist:"Beyonce"
  },
  {
    id:5,
    img:img5,
    song:"John",
    Artist:"Lil Wayne"
  },
  {
    id:6,
    img:img6,
    song:"Ibiza",
    Artist:"Tyga"
  },
  
]

const albums = [
  {
    id:1,
    imagee:imagee1,
    name:"GNX",
    artists:"Kenddirck Ramal"
  },
  {
    id:2,
    imagee:imagee2,
    name:"Morayo",
    artists:"Wizkid"
  },
  {
    id:3,
    imagee:imagee3,
    name:"11:11(Deluxe)",
    artists:"Chris Brown"
  },
  {
    id:4,
    imagee:imagee4,
    name:"One fo Wun",
    artists:"Gunna"
  },
  {
    id:5,
    imagee:imagee5,
    name:"Work of Art",
    artists:"Asake"
  },
  {
    id:6,
    imagee:imagee6,
    name:"Ganza",
    artists:"Kivumbi King"
  }
]
const Side2 = () => {
  return (
    <div className='bg-gray-900 w-[74%] rounded-xl py-[90px] h-[80vh] px-[30px] flex flex-col gap-[30px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-red-900'>
     <div className='Popular-artist'>
     <div>
        <span className='text-white text-2xl font-bold'>Popular artists</span>
      </div>
      <div className='artists flex gap-[0px]'>
        {
          artists.map((item)=>{
          return(
            <div className=' group
            flex flex-col items-start hover:bg-gradient-to-b
             from-gray-900 to-gray-800 p-[10px] relative rounded-2xl
              transition-transform duration-300 cursor-pointer' key={item.id}>
             <img src={item.img} alt="" className='h-[138px] w-[138px] object-cover rounded-full' />
             <h1 className='text-white text-base font-bold'>{item.name}</h1>
             <p className='text-gray-400'>{item.type}</p>
             <span className='absolute top-[45%] left-[65%] translate-x-[-50%] translate-y-[-50%] text-black items-center justify-center
               bg-[#3BE477] h-[50px] w-[50px] rounded-full cursor-pointer hidden group-hover:flex hover:scale-[1.2]
               transition-transform duration-300  
               '><IoPlaySharp className='text-2xl' /></span>
            </div>
          )
        })}
         {/* <div className=' group
         flex flex-col items-start hover:bg-gradient-to-b
          from-gray-900 to-gray-800 p-[20px] relative rounded-2xl
           transition-transform duration-300 cursor-pointer'>
          <img src={image1} alt="" className='h-[180px] w-[180px] object-cover rounded-full' />
          <h1 className='text-white text-lg font-bold'>Drake</h1>
          <p className='text-gray-400'>Artist</p>
          <span className='absolute top-[45%] left-[65%] translate-x-[-50%] translate-y-[-50%] text-black items-center justify-center
            bg-[#3BE477] h-[50px] w-[50px] rounded-full cursor-pointer hidden group-hover:flex hover:scale-[1.2]
            transition-transform duration-300  
            '><IoPlaySharp className='text-2xl' /></span>
         </div> */}

         
      </div>
     </div>

     <div className="Trending-Song">

     <div>
        <span className='text-white text-2xl font-bold'>Trending songs</span>
      </div>
      <div className='artists flex gap-[0px]'>
        {
          Songs.map((data)=>{
            return(
              <div 
        className='group
            flex flex-col items-start hover:bg-gradient-to-b
             from-gray-900 to-gray-800 p-[10px] relative rounded-2xl
              transition-transform duration-300 cursor-pointer' key={data.id}
        >
        <img src={data.img} alt="" className='h-[130px] w-[138px] object-cover' />
        <h1 className='text-white text-base font-bold'>{data.song}</h1>
        <p className='text-gray-400'>{data.Artist}</p>
             <span className='absolute top-[45%] left-[65%] translate-x-[-50%] translate-y-[-50%] text-black items-center justify-center
               bg-[#3BE477] h-[50px] w-[50px] rounded-full cursor-pointer hidden group-hover:flex hover:scale-[1.2]
               transition-transform duration-300  
               '><IoPlaySharp className='text-2xl' /></span>
        
        </div>
            )
          })
        }

      </div>
     </div>

     <div className="Popular-albums">
     <div>
        <span className='text-white text-2xl font-bold'>Popular albums and singles</span>
      </div>

      <div className='artists flex gap-[0px]'>
        {
          albums.map((data)=>{
            return(
              <div 
        className='group
            flex flex-col items-start hover:bg-gradient-to-b
             from-gray-900 to-gray-800 p-[10px] relative rounded-2xl
              transition-transform duration-300 cursor-pointer' key={data.id}
        >
        <img src={data.imagee} alt="" className='h-[130px] w-[138px] object-cover' />
        <h1 className='text-white text-base font-bold'>{data.name}</h1>
        <p className='text-gray-400'>{data.artists}</p>
             <span className='absolute top-[45%] left-[65%] translate-x-[-50%] translate-y-[-50%] text-black items-center justify-center
               bg-[#3BE477] h-[50px] w-[50px] rounded-full cursor-pointer hidden group-hover:flex hover:scale-[1.2]
               transition-transform duration-300  
               '><IoPlaySharp className='text-2xl' /></span>
        
        </div>
            )
          })
        }

      </div>
     </div>
     {/*footer*/}
     <Footer />
    </div>
  )
}

export default Side2
