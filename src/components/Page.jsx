import React from 'react'
import { Helmet } from 'react-helmet-async'
import SEO from './SEO'

export const Page = ({title,description,Name,type,children}) => {
  return (
    <>
    <SEO
    title={title}
    description={description}
    Name={Name}
    type={type}
    />
    <main>
        <h1 className='text-4xl font-bold text-center text-yellow-500'>{title}</h1>
        {children}
    </main>
        
    </>
  )
}
