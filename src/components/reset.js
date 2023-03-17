import React from "react";
// importing link form react-router-dom
import {Link} from "react-router-dom";
// improting css for user component 
import styles from "../styles/User.module.css";
// improting Toster which use to give some toser like popup or noticfication 
import {  Toaster } from "react-hot-toast";
// importing formik
import { useFormik } from "formik";
// importing passwordValidate from validate.js file for toaster and password valdidation 
import { conformPasswordValidate } from "../helper/validate";

const Reset = () => {
    // insitialng formik 
    const formik = useFormik({
        initialValues : {
            password : "",
            conform_password : ""
        },
        validate : conformPasswordValidate,
        validateOnBlur : false ,
        validateOnChange : false,
        onSubmit : async value => {
            console.log(value);
        }
    })
    return(
        <div className="container mx- auto">
            <Toaster position="top-right" reverseOrder={false} />
            <div className="flex iterms-center justify-center h-screen">
              <div className={styles.glass}>  
                <div className="title flex flex-col items-center">
                    <h4 className="text-5xl font-bold">Reset</h4>
                    <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                        Enter new password.
                    </span>
                    <form className="py-20" onSubmit={formik.handleSubmit}>
                        <div className="textbox flex flex-col items-center gap-6">
                            <input {...formik.getFieldProps('password')} type="password" className={styles.textbox} placeholder="New password"/>
                            <input {...formik.getFieldProps('conform_password')} type="password" className={styles.textbox} placeholder="Repet password"/>
                            <button type="submit" className={styles.btn}>Reset</button>
                        </div>
                    </form>
                </div>
              </div>  
            </div>
        </div>
    )
}

export default Reset;