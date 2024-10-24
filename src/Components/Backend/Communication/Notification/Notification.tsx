import React from 'react'
import AccouncementCard from './Accouncementcard/AccouncementCard'
import { broadcast } from '../../../images';
import { dicon } from '../../../images';
import { NavLink } from 'react-router-dom';
const Notification :React.FC = () => {
  return (
  
    
  <div className="flex flex-col gap-4 p-4 font-inter">

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="text-sm text-slate-400">Assignment:</span>
          <div className="flex items-center cursor-pointer">
            <span className="text-base text-slate-700">All</span>
            <img src={dicon} alt="dropdown" className="w-6 h-6" />
          </div>
          
          <span className="text-sm text-slate-400">Sort by:</span>
          <div className="flex items-center cursor-pointer">
            <span className="text-base text-slate-700">Newest First</span>
            <img src={dicon} alt="dropdown" className="w-6 h-6" />
          </div>
        </div>
        <NavLink to="/communication/notification-send">
        <button className="flex items-center bg-white border border-gray-300 py-2 px-6 rounded-md cursor-pointer text-sm font-medium text-gray-900">
          Make a New Announcement
          <img src={broadcast} alt="broadcast" className="ml-2 w-6 h-6" />
          </button>
          </NavLink>
      </div>
       <div className="flex flex-col gap-4">
        <AccouncementCard />
         <AccouncementCard />
        
      </div>
    </div>
        )
        
}

export default Notification