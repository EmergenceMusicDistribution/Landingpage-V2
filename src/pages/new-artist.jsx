import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BasicExample } from '../components/FormikForm';

export const NewArtist = () => {
    const navigate = useNavigate()
    const sheetsKey = import.meta.env.VITE_SHEETS_KEY

const next = async(userInfo)=>{ 
       try {
         await axios.post(sheetsKey, userInfo)
         .then(response=>{
            
             window.location.href = "https://calendly.com/emergencemusicdistribution/30min?month=2024-09"
         })
       } catch (error) {
        console.log(error)   
       }
}


  return (
    <>
    <div className='grid grid-cols-12 sm:grid-cols-1 md:grid-cols-1'>

<div className='space-y-5 pt-12 px-6 sm:px-6 md:px-8 col-span-4 bg-[#1e1f26]'>
  <h1 className='text-3xl font-bold text-white'>Welcome to <Link to={'/'} className='text-pink-600'>Emergence</Link> </h1>
    <h1 className='text-lg text-white'>Please fill the form with your information!</h1>

    <BasicExample next={next}/>
       
</div>

<div className='bg-gradient-to-r from-[#35222d] to-[#3e2b47] md:hidden sm:hidden col-span-8 flex justify-center items-start' >
<img onClick={()=>navigate('/')} className='mt-80 cursor-pointer' src="/sitelogo.svg" alt="" />
</div>

    </div>
    </>
  )
}
