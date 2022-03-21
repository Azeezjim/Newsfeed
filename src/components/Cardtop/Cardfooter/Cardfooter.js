import React from 'react';
import { FaRegComment } from 'react-icons/fa'
import {GiSelfLove } from 'react-icons/gi'
import { TiPointOfInterest } from 'react-icons/ti';
import { CgPentagonUp } from 'react-icons/cg'

function Cardfooter() {
  return (
    <div className=" justify-between item-center pt-2 px-2 py-3 border-t border-l-2 border-r-2 border-b2 border-gray-300 drop-shadow-md w-96 h-10">
      <GiSelfLove />
      <FaRegComment />
      <TiPointOfInterest />
      <CgPentagonUp />
    </div>
  )
}

export default Cardfooter
