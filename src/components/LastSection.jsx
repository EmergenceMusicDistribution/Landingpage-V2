import React from 'react'

export const LastSection = () => {
  return (
    <div className='bg-slate-900 text-white md:px-7 pb-10'>
        <h1 className='text-4xl font-bold sm:px-4 capitalize py-6 text-center'>distribute and sell your music video</h1> 
        <p className='w-1/2 md:w-full sm:px-2 text-center m-auto text-lg text-gray-400 sm:w-full '>With our exclusive video channel partnerships. Access and take advantage of our unique network to increase your revenue as an Emergence artist. Get your videos seen and heard universally.</p>
        <img className='w-[260px] m-auto mt-7' src="images/vevo.png" alt="" />

        <div className='flex sm:flex-col md:flex-col items-center gap-6 sm:px-5 px-20 md:px-0 sm:pt-10 md:pt-10'>
        <div className='w-2/3 md:w-full sm:w-full space-y-2'>
            <img className='w-[260px] m-auto'  src="images/emerge.svg" alt="" />
            <h1 className='text-3xl capitalize font-bold text-center'>emerge with us</h1>
            <p className=' text-center capitalize text-lg text-gray-400 md:w-full sm:w-full'>
            distribute your music on the most popular digital music streaming platforms 
            around the universe. emergence music distribution 
            continuously adds new dsp's to our forever-growing distribution channels.</p>
        </div>

        <div className='w-2/3 md:w-full sm:w-full space-y-2'>
            <img className='w-[260px] m-auto'  src="images/develop.svg" alt="" />
            <h1 className='text-3xl font-bold capitalize text-center'>how to develop your music career</h1>
            <p className='text-center capitalize text-lg text-gray-400 md:w-full sm:w-full'>
            emergence music distribution offers you a variety of services, 
            to transition successfully to a professional digital music career. 
            tips on how to position yourself on social media and which specific promotional tools to use.
             to assist you in the process of improving your brand awareness as an artist,
              regardless of your musical genre. don’t fall behind the pack, be ahead of the curve 
            with emergence music distribution and emerge your digital musical future now.</p>
        </div>

        </div>
    </div>
  )
}
