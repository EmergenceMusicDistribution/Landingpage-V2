import * as yup from "yup"

export const basicSchema = yup.object().shape({
    firstName:yup.string().required("First Name is required"),
    lastName:yup.string().required("Last Name is required"),
    age:yup.string().required("Age is required"),
    dateOfBirth:yup.string().required("Date of Birth is required!"),
    location:yup.string().required("Location is required!"),
    // address:yup.string().required("Address is required!"),
    email:yup.string().email("Please enter valid email").required("Email is required!"),
    phoneNumber:yup.number().required("Phone number Name is required!"),
    language:yup.string().required("Language is required!"),
    artistName:yup.string().required("Artist name is required!"),
    musicGenre:yup.string().required("Music genre is required!"),
    spotifyPage:yup.string().required("Link is required!"),
    instagramPage:yup.string().required("Link is required!")
})
