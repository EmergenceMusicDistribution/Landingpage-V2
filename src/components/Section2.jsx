import React from 'react'

export const Section2 = () => {
  return (
    <div style={{background:'linear-gradient(90deg, #231517, #121213 49%, #1e1925)'}} className='bg-[#1e1f26] sm:px-3 text-white space-y-8 py-8'>

     <h1 className='text-4xl text-center capitalize font-bold'> <span className=' uppercase text-teal-400'>INFINITE</span> Digital Music Streaming Platforms Worldwide</h1>   
    
    <div className='w-1/2 sm:w-full md:w-2/3 m-auto'>
    <p className='text-center text-lg text-gray-300'>
    Distribute your music on the most popular digital music streaming platforms around the universe. 
    Emergence Music Distribution continuously adds new DSP's to our forever-growing distribution channels.
    </p>
    </div>

    <div className='flex items-center w-1/2 sm:w-full md:w-full m-auto sm:px-0 md:px-5 justify-center flex-wrap gap-5'>
        <img className='w-32' src="/images/apple.png" alt="" />
        <img className='w-32' src="/images/spotify.png" alt="" />
        <img className='w-32' src="/images/tiktok.png" alt="" />
        <img className='w-32' src="/images/youtube.png" alt="" />
        <img className='w-32' src="/images/boomplay.png" alt="" />
        <img className='w-32' src="/images/amazon.svg" alt="" />
        <img className='w-32' src="/images/anghami.svg" alt="" />
        <img className='w-32' src="/images/beatport.svg" alt="" />
        <img className='w-32' src="/images/resso.svg" alt="" />
        <img className='w-32' src="/images/digital.svg" alt="" />
    </div>

    </div>
  )
}
