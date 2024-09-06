import React from 'react'

export const ServiceCard = ({...props}) => {
  return (
    <div style={{background:'hsla(0, 0%, 100%, .08)'}} className='transition-transform duration-500 ease-in-out transform hover:scale-105 rounded-lg text-white space-y-2 py-7 px-6 shadow'>
        <div className='flex justify-center py-2'>
        <img className='w-1/4 m-auto' src={props.image} alt="icon" />
        </div>
        <h1 className='text-lg font-bold'>{props.title}</h1>
        <p className='text-[#b9b6b6]'>
        {props.description}
        </p>
        <div className='flex justify-center pt-3'>
        {props.purchase?<button className='bg-gradient-to-r from-[#6c54ad] to-[#f04762] hover:text-blue-500 border px-5 py-2.5 rounded-full uppercase shadow-lg font-semibold'>purchase</button>:null}
        </div>
    </div>
  )
}
