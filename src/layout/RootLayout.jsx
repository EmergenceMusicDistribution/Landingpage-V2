import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const RootLayout = () => {
  return (
    <div className=''>
        <nav>
            <Navbar/>
        </nav>

        <main>
        <Outlet/>
        </main>
    </div>
  )
}
