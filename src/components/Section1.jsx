import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export const Section1 = () => {
    const {t} = useTranslation()
    const navigate = useNavigate()
  return (
    <>
    <div style={{background:'linear-gradient(90deg, #382d50, #3a2d50 57%, #7a2e44)'}} className="flex sm:flex-col items-center md:flex-col px-16 sm:px-2 text-white sm:gap-4 md:gap-4 bg-slate-950">

    <div className='space-y-7'>
    <h1 className='text-5xl sm:text-5xl font-bold sm:text-center leading-tight sm:leading-none'>
    {t('Welcome')}
    </h1>
 
    <div className='space-x-4 sm:space-x-0 sm:flex flex-col items-center gap-5'>
    <button onClick={()=>navigate('/register')} className='bg-gradient-to-r from-[#6c54ad] to-[#f04762] sm:w-fit hover:bg-blue-700 shadow-lg px-10 py-4 font-bold rounded-full uppercase text-xl'>{t('newArtist')}</button>
    <button className='bg-teal-600 sm:w-fit hover:bg-teal-700 shadow-lg px-10 py-4 font-bold rounded-full uppercase text-xl'>EMD Artist</button>
    </div> 

<div className='space-y-5 sm:text-center md:pb-10'>
    <div>
        <h1 className='uppercase text-pink-500 font-bold text-3xl'>{t('newArtist')}</h1>
        <p className='text-xl'>PLEASE REQUEST A MUSIC EVALUATION.</p>
    </div>

    <div className='space-y-1'>
        <h1 className='uppercase text-white font-bold text-3xl'>EMD Artist</h1>
        <p className='text-xl'>IF YOU HAVE A NEW RELEASE COMING SOON, PLEASE CONTACT US AT</p>
        <div className=' overflow-hidden break-all'>
        <a className='text-blue-500 hover:text-blue-600 uppercase text-xl' href="mailto:SUPPORT@EMERGENCEMUSICDISTRIBUTION.COM">support@emergencemusicdistribution.com</a>
        </div>
    </div>

</div>
  
</div>

{/* <div className=''> */}
    <img  className='w-1/2 md:w-full sm:w-full' src="images/bg.png" alt="" />
{/* </div> */}
    </div>
    </>
  )
}
