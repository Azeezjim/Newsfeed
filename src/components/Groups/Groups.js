import React from 'react'

export default function Groups() {
  return (
    <div>
      <div className="border border-gray-300 w-44 h-48 rounded-lg shadow-md  ">
        <div className="flex items-center justify-between flex-row">
          <h1 className="text-xs font-semibold m-2"> Groups you may like !</h1>
          <h1 className="text-xs font-semibold m-2 text-blue-800"> Refresh</h1>
        </div>
        <div className="flex justify-around mx-3">
          <button className="px-1 py-0.5 font-semibold  bg-red-600 text-xs text-white rounded">POPULER</button>
          <button className="px-1 py-0.5 font-semibold  bg-white text-xs rounded border border-gray-300">NEWEST</button>
          <button className="px-1 py-0.5 font-semibold  bg-white text-xs rounded border border-gray-300">SEE ALL</button>
      </div>
    </div>
  </div>
  )
}
