import React from 'react'
import { xmas } from '../../../../images';
import { im1 } from '../../../../images';
const AccouncementCard :React.FC= () => {
  return (
   <div className="flex p-2 bg-white border border-gray-300 rounded-md">
          <img src={xmas}    alt="Xmas" className="w-32 h-24 rounded-md" />
    <div className="flex flex-col gap-2 pl-4">
      <div className="flex justify-between">
        <span className="text-lg font-semibold text-gray-900">20% off on Xmas</span>
        <img src={im1} alt="options" className="w-6 h-6" />
      </div>
      <span className="text-sm text-gray-900 opacity-60">Draft on 25 Jan 2022</span>
      <span className="text-sm text-gray-900 opacity-60">Hurry, get the last chance for discount of courses.</span>
      <a href="https://test.com/cources" className="text-sm font-medium text-blue-500">https://test.com/cources</a>
    </div>
  </div>
  )
}

export default AccouncementCard;