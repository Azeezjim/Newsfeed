import React from 'react'
import {FiPlus } from 'react-icons';

export default function Profiles() {
  return (
      <div className='ml-15'>
        <ul className="flex flex-row space-x-2 ml-7  ">
          <li> <img src="images/person1.webp" alt="person1" className="rounded-full border-1 border-red-600 w-11 h-11 "  /> <p className="text-xs font-medium text-gray-500">Create new story</p> </li>
          <li> <img src="images/person2.jpg" alt="person2" className="rounded-full border-1 border-red-600 w-11 h-11 "/> <p className="text-xs font-medium text-gray-500">Afamdman</p>  </li>
          <li> <img src="images/person3.jpg" alt="person3" className="rounded-full border-1 border-red-600 w-11 h-11 " /> <p className="text-xs font-medium text-gray-500">Jhon Do</p>  </li>
          <li> <img src="images/person4.webp" alt="person4"className="rounded-full border-1 border-red-600 w-11 h-11 " /> <p className="text-xs font-medium text-gray-500">Andre</p> </li>
          <li> <img src="images/Person5.jpg" alt="person5"className="rounded-full border-1 border-red-600 w-11 h-11 " />   <p className="text-xs font-medium text-gray-500">Wunmmi</p> </li>
          <li> <img src="images/person6.jpg" alt="person6" className="rounded-full border-1 border-red-600 w-11 h-11 " /> <p className="text-xs font-medium text-gray-500">Muwomie</p> </li>
          <li> <img src="images/person7.jpg" alt="person7" className="rounded-full border-1 border-red-600 w-11 h-11 " /> <p className="text-xs font-medium text-gray-500">Udoke</p> </li>
          <li> <img src="images/person8.jpg" alt="person8" className="rounded-full border-1 border-red-600 w-11 h-11 " /> <p className="text-xs font-medium text-gray-500">Adama</p> </li>
          <li> <img src="images/person 9.jpg" alt="person9" className="rounded-full border-1 border-red-600 w-11 h-11 " />  <p className="text-xs font-medium text-gray-500">James</p></li>
        </ul>
    </div>
  )
}


