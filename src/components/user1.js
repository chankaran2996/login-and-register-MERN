import React from "react";
// importing link form react-router-dom
import { Link } from "react-router-dom";
// importing profile image
import profile from "../assets/profile.png";
// improting css for user component
import styles from "../styles/User.module.css";
// improting Toster which use to give some toser like popup or noticfication
import { Toaster } from "react-hot-toast";
// importing formik
import { useFormik } from "formik";
// importing userNameValidate from validate.js file for toaster and user name valdidation
import { userNameValidate } from "../helper/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// creating user componet
const User = () => {
  // insitialng formik
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
    },
    validate: userNameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      console.log(value);
      navigate("/password");
      //   axios
      //     .post(`${process.env.REACT_APP_api}/api/login`, value)
      //     .then((response) => {
      //       console.log(response.data);
      //     });
    },
  });

  return (
    <div className="container mx- auto">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="flex iterms-center justify-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello!</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore More by connecting with us.
            </span>
            <form className="py-1" onSubmit={formik.handleSubmit}>
              <div className="profile flex justify-center py-5">
                <img
                  src={profile}
                  className={styles.profile_img}
                  alt="profile-icon"
                ></img>
              </div>
              <div className="textbox flex flex-col items-center gap-6">
                <input
                  {...formik.getFieldProps("name")}
                  type="text"
                  className={styles.textbox}
                  placeholder="username"
                />
                <button type="submit" className={styles.btn}>
                  Lets Go
                </button>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  Not a member?
                  <Link className="text-red-500" to="/register">
                    Register now
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
