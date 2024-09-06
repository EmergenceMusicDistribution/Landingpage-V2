import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { Tab } from '../components/Tab'
import { Footer } from '../components/Footer'

export const RootLayout = () => {
  return (
    <div className='font-sans'>
        <nav>
            <Navbar/>
        </nav>

        <main>
        <Outlet/>
        </main>

    <footer>
      <Footer/>
    </footer>
    
        <Tab/>
    </div>
  )
}
