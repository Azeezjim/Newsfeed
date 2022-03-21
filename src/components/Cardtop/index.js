import React from 'react';
import { GoVerified } from 'react-icons/go';

export default function Cardtop() {
  return (
    <div>
      <div className="flex flex-row justify-center text-xs mx-2 space-x-2">
        <img src="images/person2.jpg" alt="person2" className="flex-col items-start justify-end w-5 h-5 rounded-full p-x-2 "/>  
        <p className='mt-1'>Africa Nwaboli</p> 
        <GoVerified className='text-red-500 mt-1 ml-3 te0xt-3 space-y-reverse'/>
      </div>
    </div>
  )
}


