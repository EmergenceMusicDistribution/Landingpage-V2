import React from 'react'
import { ServiceCard } from '../components/ServiceCard'
import { services } from '../services'

export const Services = () => {
  return (
    <div style={{background:'linear-gradient(90deg, #231517, #121213 49%, #1e1925)'}} className=' px-28 md:px-10 sm:px-0 py-10'>

        <h1 className='uppercase sm:px-5 font-bold text-white text-lg'>Welcome to emergence music distribution services.</h1>
        <div className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 py-8 sm:px-6 md:px-6'>
        <ServiceCard purchase={true} title={'AWB | Artist With Benefits'} image={""} annualSub={'$14.99/Year'}/>
        <ServiceCard purchase={true} title={'AWB | Artist With Benefits'} image={""} annualSub={'$14.99/Year'}/>
        <ServiceCard purchase={true} title={'AWB | Artist With Benefits'} image={""} annualSub={'$14.99/Year'}/>
        </div>
        <div className='pt-5'>

        <div className='space-y-2 sm:px-4'>
        <h1 className='font-bold text-4xl sm:text-3xl text-yellow-500 text-center'>Digital Artist Development Services</h1>
    <div className='w-1/2 sm:w-full md:w-2/3 m-auto'>
    <p className='text-center text-gray-400'>
    We empower the artist by digitally branding themselves. By assisting them with all the tools
    to guide them to numerous revenue opportunities.
    </p>
    </div>
        </div>

        </div>
    <div  className='grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 py-8 sm:px-6 md:px-6'>
        {services.map((service,i)=>{
            return (
                <ServiceCard key={i} title={service.title} image={service.image} description={service.description}/>
            )
        })}
        </div>
        
            </div>
  )
}
