import * as yup from "yup"

export const basicSchema = yup.object().shape({
    firstName:yup.string().required("First Name is required"),
    lastName:yup.string().required("Last Name is required"),
    age:yup.string().required("Age is required"),
    dateOfBirth:yup.string().required("First Name is required!"),
    location:yup.string().required("First Name is required!"),
    address:yup.string().required("Address is required!"),
    email:yup.string().email("Please enter valid email").required("Email is required!"),
    phoneNumber:yup.number().required("Phone number Name is required!"),
    language:yup.string().required("First Name is required!"),
    artistName:yup.string().required("First Name is required!"),
    musicGenre:yup.string().required("First Name is required!"),
    spotifyPage:yup.string().required("First Name is required!"),
    instagramPage:yup.string().required("First Name is required!")
})
