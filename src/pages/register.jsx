import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BasicExample } from '../components/FormikForm';

export const Register = () => {
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState("")
    const [userInfo, setUserInfo] = useState({
        fullName:"",
        email : "", 
        phoneNumber:"", 
        dob:"",
        country:""
    })
    
   const handleChange = (e)=>{
  const {name, value} = e.target
  setUserInfo({...userInfo, [name]:value})
}

// const scriptURL = 'https://script.google.com/macros/s/AKfycbyrEwaRiN0rxswTYKEVi5vsUbiwJLAFKgVsQpwwe3EBLHlemuOKYBLBgu_JTeGANQ1Tlg/exec';

const info = {
    fullName:userInfo.fullName,
    email : userInfo.email, 
    phoneNumber:userInfo.phoneNumber, 
    dob:userInfo.dob,
}

   
const next = async(event)=>{
    event.preventDefault()
    if (!userInfo.fullName || !userInfo.email || !userInfo.phoneNumber ) {
     return setErrorMsg("All fields must be provided")  
    }else {
       setErrorMsg("")   
       try {
         await axios.post('https://sheet.best/api/sheets/099a9063-4ea4-4108-803e-d748614dd7a2', info)
         .then(response=>{
             console.log(response)
         })
       } catch (error) {
        console.log(error)   
       }
    }

}



  return (
    <>
    <div className='grid grid-cols-12 sm:grid-cols-1 bg-[#1e1f26] h-screen'>

<div className='space-y-5 pt-14 px-8 sm:px-9 col-span-4'>
    <h1 className='text-2xl text-white'>Please Enter your information!</h1>

    <BasicExample/>
       
</div>

<div className='bg-gradient-to-r from-[#35222d] to-[#3e2b47]  sm:hidden col-span-8 flex justify-center items-center' >
<img onClick={()=>navigate('/')} className=' cursor-pointer' src="/sitelogo.svg" alt="" />
</div>

    </div>
    </>
  )
}
