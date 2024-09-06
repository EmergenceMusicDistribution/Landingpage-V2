import React from 'react'
import { Formik,Form } from 'formik';
import { basicSchema } from '../schemas';
import { CustomInput } from '../components/CustomInput';
import { Link, useNavigate } from 'react-router-dom';

export const EmdArtist = () => {
    const navigate = useNavigate()
  return (
    <>
      <div className='grid grid-cols-12 sm:grid-cols-1 md:grid-cols-1'>
<div className='space-y-5 pt-12 px-6 sm:px-6 md:px-8 col-span-4 bg-[#1e1f26]'>
  <h1 className='text-3xl font-bold text-white'>Welcome to <Link to={'/'} className='text-pink-600'>Emergence</Link> </h1>
    <h1 className='text-lg text-white'>Please fill the form with your information!</h1>

<div className='pb-10'>
    <Formik
    validationSchema={basicSchema}

      initialValues={{ firstName: '', 
        lastName:"",
        location:"",
        email:"",
        phoneNumber:"",
        artistName : "",
        musicGenre:"",
        spotifyPage:"",
        instagramPage:"",
     }}
     onSubmit={(values,actions)=>{
      // next(values)
      console.log(actions)
     }}
    >
      {(props) => (
        <Form className='space-y-5'>
         <CustomInput
         label={"First Name"}
         name={"firstName"}
         type={"text"}
         placeholder={"Enter your first name"}
         />
        <CustomInput
         label={"Last Name"}
         name={"lastName"}
         type={"text"}
         placeholder={"Enter your last name"}
         />

        <CustomInput
         label={"Location"}
         name={"location"}
         type={"text"}
         placeholder={"Enter your Location"}
         />

        <CustomInput
         label={"Email"}
         name={"email"}
         type={"email"}
         placeholder={"Enter your Email"}
         />

        <CustomInput
         label={"Phone Number"}
         name={"phoneNumber"}
         type={"number"}
         placeholder={"Enter your Phone number"}
         />

        <CustomInput
         label={"Artist Name / Label Name / Music Group Name"}
         name={"artistName"}
         type={"text"}
         placeholder={"Enter your Artist Name"}
         /> 

        <CustomInput
         label={"Music Genre"}
         name={"musicGenre"}
         type={"text"}
         placeholder={"Enter your Music Genre"}
         /> 

        <CustomInput
         label={"Spotify Page Link"}
         name={"spotifyPage"}
         type={"text"}
         placeholder={"Enter your Spotify Page Link"}
         /> 

        <CustomInput
         label={"Instagram Page Link"}
         name={"instagramPage"}
         type={"text"}
         placeholder={"Enter your Instagram Page Link"}
         />

          <button className='bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 relative top-2 rounded-full w-full uppercase' type="submit">Submit</button>
        </Form>
      )}
    </Formik>
</div>
       
</div>

<div className='bg-gradient-to-r from-[#35222d] to-[#3e2b47] md:hidden sm:hidden col-span-8 flex justify-center items-start' >
<img onClick={()=>navigate('/')} className='mt-80 cursor-pointer' src="/sitelogo.svg" alt="" />
</div>

    </div>
   
    </>
  )
}
