import React from 'react';
import { RiVipCrownFill } from 'react-icons/ri'

function Content() {
  return (
    <div>
      <div className="border border-gray-300 w-56 h-42 rounded-lg">
        <div className="mx-2 my-2 flex flex-row space-x-2 ">
        <RiVipCrownFill  className="bg-yellow-500 rounded-full text-white"/>
        <p className=" text-xs font-medium">Top Content Creators</p>
        </div>
        <div className="container flex flex-col space-4 item-center p-3">
          <div className="flex justify-around" >
            <li className="list-none pb-2 px-0.5  rounded-md border border-gray-200 "> <img src="images/person1.webp" alt="person1" className="rounded-md w-10 h-10" /><p className="text-sm font-normal">Abmin</p></li>
            <li className="list-none pb-2 px-0.5  rounded-md border border-gray-200 "> <img src="images/person2.jpg" alt="person2" className="rounded-md w-10 h-10"/>  </li>
            <li className="list-none pb-2 px-0.5  rounded-md border border-gray-200 "> <img src="images/person2.jpg" alt="person3" className="rounded-md w-10 h-10" />  </li>
          </div>
          <div className="flex justify-around">
            <li className="list-none pb-2 px-0.5  rounded-md border border-gray-200 "> <img src="images/person4.webp" alt="person4"className="rounded-md w-10 h-10" />  </li>
            <li className="list-none pb-2 px-0.5  rounded-md border border-gray-200 "> <img src="images/Person5.jpg" alt="person5"className="rounded-md w-10 h-10" />   </li>
            <li className="list-none pb-2 px-0.5  rounded-md border border-gray-200 "> <img src="images/person6.jpg" alt="person6" className="rounded-md w-10 h-10" />  </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
