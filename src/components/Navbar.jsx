import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
    const location = useLocation()
  return (
    <div style={{background:'linear-gradient(90deg, #382d50, #3a2d50 57%, #7a2e44)'}} className={`${location.pathname==='/register'?"hidden":null} flex items-center justify-between sm:px-2 md:px-16 px-20 py-6 `}>
        <img src="/sitelogo.svg" alt="" />
        {/* <div className='text-white space-x-5'>
          <Link>Services</Link>
          <Link>Ambassador</Link>
        </div> */}
        <LanguageSwitcher/>
    </div>
  )
}
