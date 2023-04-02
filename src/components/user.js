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
// importing passwordValidate from validate.js file for toaster and password valdidation
import { passwordValidate } from "../helper/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken, useEmail } from "../contextApi/userDetails.js";

const User = () => {
  const navigate = useNavigate();
  const { updateToken } = useToken();
  const { updateEmail } = useEmail();
  // insitialng formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: passwordValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value) => {
      console.log(value);
      axios
        .post(`${process.env.REACT_APP_api}/api/login`, value)
        .then((response) => {
          console.log(response.data);
          updateToken(response.data.token);
          updateEmail(response.data.email);
        });
      navigate("/workbench");
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
                  {...formik.getFieldProps("email")}
                  type="email"
                  className={styles.textbox}
                  placeholder="email"
                />
                <div className="textbox flex flex-col items-center gap-6">
                  <input
                    {...formik.getFieldProps("password")}
                    type="password"
                    className={styles.textbox}
                    placeholder="password"
                  />
                  <button type="submit" className={styles.btn}>
                    Sign in
                  </button>
                </div>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  Not a member?
                  <Link className="text-red-500" to="/register">
                    Register now
                  </Link>
                </span>
              </div>
              <div className="text-center py-4">
                <span className="text-gray-500">
                  Forget password?
                  <Link className="text-red-500" to="/recovery">
                    Recover now
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
