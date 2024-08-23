import React from 'react';
import { Formik,Form } from 'formik';
import { CustomInput } from './CustomInput';
import { basicSchema } from '../schemas';

export const BasicExample = () => (
    
  <div>
    <Formik
    validationSchema={basicSchema}

      initialValues={{ firstName: '', 
        lastName:"",
        age:"",
        dateOfBirth:"",
        location:"",
        address:"",
        email:"",
        phoneNumber:"",
        language:"",
        artistName : "",
        musicGenre:"",
        spotifyPage:"",
        instagramPage:"",
     }}

    >
      {({handleSubmit}) => (
        <Form className='space-y-3' onSubmit={handleSubmit}>
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

        {/* <CustomInput
         label={"Date of Birth"}
         name={"dateOfBirth"}
         type={"date"}
         placeholder={"Select your DOB"}
         />

        <CustomInput
         label={"Location"}
         name={"location"}
         type={"text"}
         placeholder={"Enter your Location"}
         />

        <CustomInput
         label={"Address"}
         name={"address"}
         type={"text"}
         placeholder={"Enter your Address"}
         />

        <CustomInput
         label={"Email"}
         name={"email"}
         type={"email"}
         placeholder={"Enter your Email"}
         />

        <CustomInput
         label={"Age"}
         name={"age"}
         type={"number"}
         placeholder={"Enter your Age"}
         />

        <CustomInput
         label={"Age"}
         name={"age"}
         type={"number"}
         placeholder={"Enter your Age"}
         />

<CustomInput
         label={"Age"}
         name={"age"}
         type={"number"}
         placeholder={"Enter your Age"}
         /> */}

          <button className='bg-gray-600 hover:bg-gray-700 text-white font-semibold p-4 rounded-full mt-5 w-full uppercase' type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);