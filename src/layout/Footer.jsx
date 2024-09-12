import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export const Footer = () => {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <div className={`bg-[#212121] py-4 ${location.pathname==='/new-artist' || location.pathname==='/emd-artist' ? 'hidden': ''}`}>
    <div className='flex justify-between flex-wrap px-32 md:px-20 sm:px-5 gap-5 md:gap-3 py-10 sm:py-1 md:py-5 text-white'>
        <div onClick={()=>navigate('/')} className=' md:w-full sm:m-auto pb-7'>
            <img src="sitelogo.svg" alt="" />
        </div>

        <div className='flex flex-col gap-3 sm:flex-1'>
            <h1 className='font-bold text-lg'>Resources</h1>
            <Link className='text-gray-400'>About</Link>
            <Link className='text-gray-400'>Join Us</Link>
            <Link className='text-gray-400'>Terms & Conditions</Link>
        </div>

        <div className='flex flex-col gap-3 sm:flex-1'>
            <h1 className='font-bold text-lg'>Services</h1>
            <Link to={'/'} className='text-gray-400'>About</Link>
            <Link to={'/services'} className='text-gray-400'>Services</Link>
            <Link className='text-gray-400'>Pricing</Link>
        </div>

        <div className='flex flex-col gap-3 sm:flex-1'>
            <h1 className='font-bold text-lg'>Community</h1>
            <Link className='text-gray-400'>Facebook</Link>
            <Link className='text-gray-400'>Twitter</Link>
            <Link to={'https://www.2019.emergencemusicdistribution.com/services'} className='text-gray-400'>Instagram</Link>
            <Link className='text-gray-400'>Tiktok</Link>
            <Link className='text-gray-400'>Youtube</Link>
        </div>

        <div className='flex flex-col gap-3 sm:items-center'>
            <h1 className='font-bold text-lg'>Newsletter</h1>
            <form className='flex flex-col gap-2' action="">
                <label htmlFor="" className='text-gray-400'>Email Address *</label>
                <input style={{background:'rgba(218, 223, 229, .1)'}} className='p-4 rounded-lg' placeholder='Enter your email address' type="text" name="" id="" />
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className='h-5 w-5' name="" id="" />
                    <p className='text-gray-400'>I would like to recieve emails from <span className='text-white font-bold'>Emergence</span></p>
                </div>
                <button className='text-white uppercase font-semibold w-fit bg-gradient-to-r from-[#6c54ad] to-[#f04762] hover:text-blue-500 rounded-md py-3.5 px-5 sm:m-auto' type='submit'>subscribe</button>
            </form>
        </div>

    </div>

        <p className='text-center text-gray-400 pt-5 sm:px-2 sm:mb-14'>© Copyright Emergence Music Distribution Inc. 2020-2024. All Rights Reserved.</p>
    </div>
  )
}
