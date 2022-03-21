import React from 'react';
import { GoVerified } from 'react-icons/go';
import { BiDotsHorizontalRounded } from 'react-icons/bi'

export default function Cardtop() {
  return (
    <div className="card  flex justify-between item-center pt-2 px-2 py-3 border-t-2 border-l-2 border-r-2 border-gray-300  rounded-t-lg drop-shadow-md w-96 h-10">
      <div className="flex flex-row justify-start text-xs mx-2 space-x-2">
        <img src="images/person2.jpg" alt="person2" className="flex-col items-start justify-end w-5 h-5 rounded-full p-x-2 "/>  
        <p className='mt-1 text-xs font-medium'>Afam Nwaboli</p> 
        <GoVerified className='text-red-500 mt-2 ml-3 te0xt-3 space-y-reverse'/>
        <p className="mt-1 text-gray-500 text-xs">@afadman</p>
      </div>
        <div className="flex">
          <p className="mt-1 text-gray-500 text-xs">Nov 26</p>
          <BiDotsHorizontalRounded className="mt-1"/>
        </div>

    </div>
  )
}


