import React from 'react';
import { BiMenu } from 'react-icons/bi';
import {AiOutlineSearch} from 'react-icons/ai';
import {RiAddBoxLine} from 'react-icons/ri'
import { FiMessageSquare } from 'react-icons/fi';



export default function Topnav() {
  return (
    <div className="bg-red-700 w-full h-20 text-white">
      <div className=''>

        <div className="flex justify-start items-center ml-5 py-6 ">
          <div className="">
            <BiMenu className="text-white"/>
          </div>

          <div className="px-5 text-bold text-lg">
            <h1>Plajor <span color='#fb923c'>!</span></h1>
          </div>

          <div>
            <input type="text"
              placeholder="Search for people, Channals, groups and #hashtags"
              className="w-80 h-8 bg-red-500 px-5 rounded-full text-center text-red-200"
            />

          </div>
        </div>
        <div className=" bg-white flex items-center justify-between mr20">
            <div className="text-white">
                <RiAddBoxLine className="" />
                <FiMessageSquare />
            </div>
        </div>
      </div>

    </div>
  )
}

