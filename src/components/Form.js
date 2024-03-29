import './CareerForm.css';
import TextField from '@mui/material/TextField';
// import Header from '../components/header';
import Button from '@mui/material/Button';
// import { API_URL } from '../FormContext/Url';
import { Toaster } from "react-hot-toast";
// importing userNameValidate from validate.js file for toaster and user name valdidation
import { formValidation } from '../helper/formvalditdation';
// importing formik
import { useFormik } from "formik";
// iporting aios for fetch
import axios from "axios";

const CareerForm = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            contactNumber: "",
            resume: "",
            portfolio: "",
            github: "",
            location: "",
            passOut: "",
        },
        validate: formValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (value) => {
            console.log(value);
            axios
                .post(`https://6571be76d61ba6fcc0136c13.mockapi.io/user`, value)
                .then((response) => {
                    alert(" 😊 Registered successfully 😊")
                });
        },
    });

    return (
        <>
            {/* <Header /> */}
            <div className='careerForm-container'>
                {/* Adding Toaster in this coponent  */}
                <Toaster position="top-right" reverseOrder={false} />
                <h5>Fill the Form</h5>
                <form className='careerForm-form' onSubmit={formik.handleSubmit}>
                    <label>Name</label>
                    <TextField  
                        {...formik.getFieldProps("name")}
                        type="text"
                        variant="outlined"
                        placeholder="username" />

                    <label>Email</label>
                    <TextField  
                        {...formik.getFieldProps("email")}
                        variant="outlined" 
                        type='text' 
                        placeholder='Email'/>

                    <label>Contact Number</label>
                    <TextField  
                        {...formik.getFieldProps("contactNumber")}  
                        variant="outlined" 
                        type='text'
                        placeholder='Contact Number' />

                    <label>Updated Resume Link <bold>Drive</bold></label>
                    <TextField  
                        {...formik.getFieldProps("resume")}  
                        variant="outlined" 
                        type='text'
                        placeholder='Updated Resume Link in Drive' />

                    <label>Updated Portfolio Link</label>
                    <TextField  
                        {...formik.getFieldProps("portfolio")}  
                        variant="outlined" 
                        type='text'
                        placeholder='Updated Portfolio Link'/>

                    <label>Updated Github Link</label>
                    <TextField  
                        {...formik.getFieldProps("github")}  
                        variant="outlined" 
                        type='text'
                        placeholder='Updated Github Link'  />

                    <label>Current Location </label>
                    <TextField  
                        {...formik.getFieldProps("location")}  
                        variant="outlined" 
                        type='text'
                        placeholder='Your Current Location' />

                    <label>Year of passing </label>
                    <TextField  
                        {...formik.getFieldProps("name")}  
                        variant="outlined" 
                        type='text'
                        placeholder='Your Year of passing'/>

                    <Button type='submit' variant="contained" >
                        Submit
                    </Button>
                </form>
            </div>
        </>
    );
};

export default CareerForm;