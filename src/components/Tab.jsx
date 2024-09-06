import React from 'react'
import { FaDollarSign, FaHome, FaSuitcase } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'
import { NavLink, useLocation } from 'react-router-dom' 


export const Tab = () => {
  const location = useLocation()
  return (
    <div className={`tabs ${location.pathname==='/new-artist' || location.pathname==='/emd-artist'? 'sm:hidden md:hidden':'block'} bg-slate-700 hidden sm:flex md:flex w-full justify-between items-center  fixed bottom-0 text-white`}>
       
        <NavLink to={'/'} className='flex flex-col items-center hover:text-white flex-1 py-1.5 md:py-3'>
            <FaHome size={24}/>
        <span className='text-sm'>Home</span>
        </NavLink>
      
        <NavLink to={'services'} className='flex flex-col items-center hover:text-white flex-1 py-1.5 md:py-3'>
        <FaDollarSign size={24}/>
        <span className='text-sm'>Services</span>
        </NavLink>

        <NavLink to={'ambassador-clubs'} className='flex flex-col items-center hover:text-white flex-1 py-1.5 md:py-3'>
        <FaSuitcase size={24}/>
        <span className='text-sm'>Ambassador</span>
        </NavLink>
    </div>
  )
}
