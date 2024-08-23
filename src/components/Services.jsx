import React from 'react'
import { ServiceCard } from './ServiceCard'

export const Services = () => {
  return (
    <div className='bg-gradient-to-r from-[#35222d] to-[#3e2b47]  py-7 space-y-5 sm:px-2'>
        <h1 className='Capitalize text-4xl text-white font-bold text-center'> <span className='text-yellow-500'>Digital Artist Development Services</span></h1>
        
        <div className='w-1/3 md:w-2/3 sm:w-full m-auto text-center'>
        <p className=' text-lg text-gray-300'>We empower the artist by digitally branding
         themselves, By assisting them with all the tools
         to guide them to numerous revenue opportunities.</p>
        </div>

<div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5 px-36 md:px-10 sm:px-5'>
       <ServiceCard/>
       <ServiceCard/> 
       <ServiceCard/> 
       {/* <ServiceCard/> 
       <ServiceCard/> 
       <ServiceCard/> 
       <ServiceCard/>    
       <ServiceCard/>    */}
</div>
 

 <button className='flex shadow justify-center bg-gradient-to-r from-[#6c54ad] to-[#f04762] px-7 py-3.5 rounded-full w-fit m-auto text-white capitalize hover:text-blue-400 font-semibold'>show more</button>
        
    </div>
  )
}
