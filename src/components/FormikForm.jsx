import React from 'react';
import { Formik,Form } from 'formik';
import { CustomInput } from './CustomInput';
import { basicSchema } from '../schemas';

// const submitForm = ()=>{
//   console.log("submitted")
// }
export const BasicExample = ({next}) => (
  <div className='pb-10'>
    <Formik
    validationSchema={basicSchema}

      initialValues={{ firstName: '', 
        lastName:"",
        age:"",
        dateOfBirth:"",
        location:"",
        // address:"",
        email:"",
        phoneNumber:"",
        language:"",
        artistName : "",
        musicGenre:"",
        spotifyPage:"",
        instagramPage:"",
     }}
     onSubmit={(values,actions)=>{
      next(values)
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
         label={"Age"}
         name={"age"}
         type={"number"}
         placeholder={"Enter your Age"}
         />

        <CustomInput
         label={"Date of Birth"}
         name={"dateOfBirth"}
         type={"date"}
         placeholder={"Select your DOB"}
         styles={"bg-gray-500"}
         />

        <CustomInput
         label={"Location"}
         name={"location"}
         type={"text"}
         placeholder={"Enter your Location"}
         />

        {/* <CustomInput
         label={"Address"}
         name={"address"}
         type={"text"}
         placeholder={"Enter your Address"}
         /> */}

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
         label={"Language"}
         name={"language"}
         type={"text"}
         placeholder={"Enter your Language"}
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
);