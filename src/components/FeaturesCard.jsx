import React from 'react'

export const FeaturesCard = ({title,description,image}) => {
  return (
    <div className='text-white w-fit hover:shadow-2xl transition-transform duration-500 ease-in-out transform hover:-translate-y-3 hover:bg-[#4a0353d9] rounded-lg py-3 px-2 space-y-4 text-center'>
        <div className='flex justify-center'>
        <img src={image} alt="icon" />
        </div>
        <h1 className='text-xl font-semibold capitalize'>{title}</h1>
        <p className='text-gray-400'>
         {description}
        </p>

    </div>
  )
}
