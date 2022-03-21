import React from 'react';
import { FaRegComment } from 'react-icons/fa'
import {GiSelfLove } from 'react-icons/gi'
import { TiPointOfInterest } from 'react-icons/ti';
import { CgPentagonUp } from 'react-icons/cg'

function Cardfooter() {
  return (
    <div className="card  flex justify-between py-2 px-3 border-2 border-gray-300 rounded-t-lg drop-shadow-md w-96">
      <GiSelfLove />
      <FaRegComment />
      <TiPointOfInterest />
      <CgPentagonUp />
    </div>
  )
}

export default Cardfooter
