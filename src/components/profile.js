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
import { registerValidation } from "../helper/validate";
// importing usestate
import { useState } from "react";
// improting convertToBase64 to convert image 
import convertToBase64 from "../helper/convert";

const Profile = () => {

    // insitialing state
    const [file,setfile]= useState();

    // insitialing formik 
    const formik = useFormik({
        initialValues : {
            firstname : "",
            lastname : "",
            email:"",
            mobileNO : "",
            address : ""
        },
        validate : registerValidation,
        validateOnBlur : false ,
        validateOnChange : false,
        onSubmit : async value => {
            value = await Object.assign(value,{profile:file||''})
            console.log(value);
        }
    })

    // formik does not support file type for that we use 
    const onUpload = async e =>{
        const base64 = await convertToBase64(e.target.files[0]);
        setfile(base64);
    }

    return(
        <div className="container mx- auto">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex iterms-center justify-center h-screen">
              <div className={styles.glass}>  
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">Profile</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        You can update the detials
                    </span>
                    <form className="py-1" onSubmit={formik.handleSubmit}>
                        <div className="profile flex justify-center py-5">
                            <label htmlFor="profile">
                                <img src={file||profile} className={styles.profile_img} alt="profile-icon"></img>
                            </label>
                            <input onChange={onUpload} type="file" id="profile" name="profile"></input>
                        </div>
                        <div className="textbox flex flex-col items-center gap-6">
                            <div className="name flex w3/4 gap-10">
                                <input {...formik.getFieldProps('firstname')} type="text" className={styles.textbox} placeholder="First name"/>
                                <input {...formik.getFieldProps('lastname')} type="text" className={styles.textbox} placeholder="Last name"/>
                            </div>
                            <div className="name flex w3/4 gap-10">
                                <input {...formik.getFieldProps('mobileNO')} type="number" className={styles.textbox} placeholder="Mobile number"/>
                                <input {...formik.getFieldProps('email')} type="email" className={styles.textbox} placeholder="Email"/>
                            </div>
                            <input {...formik.getFieldProps('address')} type="text" className={styles.textbox} placeholder="Address"/>
                            <button type="submit" className={styles.btn}>Update</button>
                        </div>
                        <div className="text-center py-4">
                            <span className="text-gray-500">Come back later?<Link className="text-red-500" to="/">Login out</Link></span>
                        </div>
                    </form>
                </div>
              </div>  
            </div>
        </div>
    )
}

export default Profile;