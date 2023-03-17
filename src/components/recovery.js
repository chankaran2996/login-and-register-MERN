import React from "react";
// importing link form react-router-dom
import {Link} from "react-router-dom";
// improting css for user component 
import styles from "../styles/User.module.css";
// improting Toster which use to give some toser like popup or noticfication 
import {  Toaster } from "react-hot-toast";


const Recovery = () => {

    return(
        <div className="container mx- auto">
        <Toaster position="top-right" reverseOrder={false} />
        <div className="flex iterms-center justify-center h-screen">
          <div className={styles.glass}>  
            <div className="title flex flex-col items-center">
                <h4 className="text-5xl font-bold">Recovery</h4>
                <span className="py-4 text-xl w-2/3 text-center text-gray-500">
                    Enter the OTP to recover the password.
                </span>
                <form className="py-20" >
                    <div className="textbox flex flex-col items-center gap-6">
                        <div className="input text-center">
                            <span className="py-4 text-sm text-left text-gray-500">
                                Enter 6 digit OTP sent to you email address
                            </span>
                            <input type="text" className={styles.textbox} placeholder="OTP"/>
                            <button type="submit" className={styles.btn}>Recover</button>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <span className="text-gray-500">Can't get OTP?<button className="text-red-500">Resend</button></span>
                    </div>
                </form>
            </div>
          </div>  
        </div>
    </div>
    )
}

export default Recovery;