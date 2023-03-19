import React from "react";
// importing link form react-router-dom
import {Link} from "react-router-dom";
// importing profile image
import profile from '../assets/profile.png';
// improting css for user component 
import styles from "../styles/User.module.css";
// improting Toster which use to give some toser like popup or noticfication 
import {  Toaster } from "react-hot-toast";
// importing formik
import { useFormik } from "formik";
// importing userNameValidate from validate.js file for toaster and user name valdidation 
import { userNameValidate } from "../helper/validate";
// importing usestate
import { useState } from "react";
// improting convertToBase64 to convert image 
import convertToBase64 from "../helper/convert";

const Register = () => {
    // insitialing state
    const [file,setfile]= useState();
    // insitialing formik 
    const formik = useFormik({
        initialValues : {
            username : "",
            email:"",
            password : "",
            conform_password : ""
        },
        validate : userNameValidate,
        validateOnBlur : false ,
        validateOnChange : false,
        onSubmit : async value => {
            console.log(value);
        }
    })

    // formik does not support file type for that we use 
    const onUpload = async e =>{
        const base64 = await convertToBase64();
        setfile(base64);
    }

    return(
        <div className="container mx- auto">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex iterms-center justify-center h-screen">
              <div className={styles.glass}>  
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">Register</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Happy to join you.
                    </span>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-5">
                            <label htmlFor="profile">
                                <img src={profile} className={styles.profile_img} alt="profile-icon"></img>
                            </label>
                            <input type="file" id="profile" name="profile"></input>
                        </div>
                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('username')} type="text" className={styles.textbox} placeholder="username"/>
                            <input {...formik.getFieldProps('email')} type="email" className={styles.textbox} placeholder="Email"/>
                            <input {...formik.getFieldProps('password')} type="password" className={styles.textbox} placeholder="password"/>
                            <input {...formik.getFieldProps('conform_password')} type="password" className={styles.textbox} placeholder="comform password"/>
                            <button type="submit" className={styles.btn}>Register</button>
                        </div>
                        <div className="text-center py-4">
                            <span className="text-gray-500">Already register?<Link className="text-red-500" to="/">Login now</Link></span>
                        </div>
                    </form>
                </div>
              </div>  
            </div>
        </div>
    )
}

export default Register;