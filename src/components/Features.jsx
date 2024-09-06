import React from 'react'
import { FeaturesCard } from './FeaturesCard'

export const Features = () => {

  const features  = [
    {
      image: "images/features/analytic.png",
      title:"analytic reports",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt molestias debitis."
    },
    {
      image: "images/features/funding.png",
      title:"artist initiative return funding 3%",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt molestias debitis."
    },
    {
      image: "images/features/digital.png",
      title:"digital artist development",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt molestias debitis."
    },
    {
      image: "images/features/marketing.png",
      title:"music marketing strategies",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt molestias debitis."
    },
    {
      image: "images/features/royalties.png",
      title:"sound collection royalties",
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, deserunt molestias debitis."
    },
  ]

  return (
    <div style={{background:'linear-gradient(90deg, #212129, #3e2b47 50%, #35222d)'}} className="flex sm:flex-col py-8 md:flex-col sm:gap-7 bg-[url('images/30.svg')] md:bg-cover bg-cover bg-no-repeat text-white ">

    <div className='space-y-9'>
    <h1 className='text-4xl capitalize text-teal-500 font-bold text-center '>
    enter the emergence music center
    </h1>

<div className='grid grid-cols-5 cursor-pointer items-center sm:grid-cols-1 md:grid-cols-2 gap-5 px-16 md:px-10 sm:px-6'>
    {
      features.map((feature, i)=>{
        return <FeaturesCard key={i} image={feature.image} title={feature.title} description={feature.description} />
      })
    }  
</div>
  
    </div>

    </div>
  )
}
