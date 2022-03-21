import React from 'react'

export default function Profiles() {
  return (
      <div className=''>
        <ul className="flex flex-row space-x-4 m-3 p-3 ">
          <li> <img src="images/person1.webp" alt="person1" className="rounded-full border-1 border-red-600 w-11 h-11 " /> </li>
          <li> <img src="images/person2.jpg" alt="person2" className="rounded-full border-1 border-red-600 w-11 h-11 "/>  </li>
          <li> <img src="images/person3.jpg" alt="person3" className="rounded-full border-1 border-red-600 w-11 h-11 " />  </li>
          <li> <img src="images/person4.webp" alt="person4"className="rounded-full border-1 border-red-600 w-11 h-11 " />  </li>
          <li> <img src="images/Person5.jpg" alt="person5"className="rounded-full border-1 border-red-600 w-11 h-11 " />   </li>
          <li> <img src="images/person6.jpg" alt="person6" className="rounded-full border-1 border-red-600 w-11 h-11 " />  </li>
        </ul>
    </div>
  )
}


