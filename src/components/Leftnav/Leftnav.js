import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import {MdOutlineExplore, MdGroups} from 'react-icons/md';
import { RiLiveFill  } from 'react-icons/ri'
import { BsDisplay, BsCollectionPlayFill } from 'react-icons/bs'

function Rightnav() {
  return (
    <div>
      <div className="">
        <ul className="space-y-4 m-3 p-3 ">
          <li className='flex flex-row space-x-2 '> <AiFillHome className=' bg-red-600 b0rded-red-600 rounded-full text-white mt-2' /> <p className="text-lg font-bold ">News Feed</p></li>
          <li className='flex flex-row space-x-2 ' > <MdOutlineExplore className=' bg-red-600 b0rded-red-600 rounded-full text-white mt-2 ' /><p className="text-lg font-bold ">Explore</p></li>
          <li className='flex flex-row space-x-2 ' > <RiLiveFill className=' bg-red-600 b0rded-red-600 rounded-full text-white mt-2 '/> <p className="text-lg font-bold ">Live</p></li>
          <li className='flex flex-row space-x-2 ' > <BsDisplay className=' bg-red-600 b0rded-red-600 rounded-full text-white mt-2 '/><p className="text-lg font-bold ">Channels</p> </li>
          <li className='flex flex-row space-x-2 ' > <MdGroups className=' bg-red-600 b0rded-red-600 rounded-full text-white mt-2 '/><p className="text-lg font-bold ">Group</p> </li>
          <li className='flex flex-row space-x-2 ' ><BsCollectionPlayFill className=' bg-red-600 b0rded-red-600 rounded-full text-white mt-2 '/><p className="text-lg font-bold ">Playhub</p></li>
        </ul>
      </div>
    </div>
  )
}

export default Rightnav;
