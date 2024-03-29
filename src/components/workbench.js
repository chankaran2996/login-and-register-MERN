import { React, useState } from "react";
// importing link form react-router-dom
import { Link } from "react-router-dom";
// importing profile image
import profile from "../assets/profile.png";
// improting css for user component
import styles from "../styles/User.module.css";
// improting Toster which use to give some toser like popup or noticfication
import { Toaster } from "react-hot-toast";
// importing formik
import { Formik, Form, Field } from "formik";
// importing userNameValidate from validate.js file for toaster and user name valdidation
import { userNameValidate } from "../helper/validate";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToken, useEmail } from "../contextApi/userDetails.js";
import QuestionBox from "./QuestionBox";

// creating user componet
const Workbench = () => {
  const { token } = useToken();
  const { email } = useEmail();

  const [question, setQuestion] = useState("");
  const [explanation, setExplanation] = useState([]);
  // insitialng formik
  const navigate = useNavigate();
  const showExplanation = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token, // Replace 'token' with your actual token
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_api}/db/mysql/qustion`,
        {
          email: email,
          qustiontitle: "Get the list of names below 18 age",
        },
        config
      )
      .then((response) => {
        console.log(response.data);

        var array = response.data.viewQustion.explanation.split("-");

        setExplanation(array);
      });
  };
  const handleClick = () => {
    console.log(email);
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token, // Replace 'token' with your actual token
      },
    };
    axios
      .post(
        `${process.env.REACT_APP_api}/db/mysql/qustion`,
        {
          email: email,
          qustiontitle: "Get the list of names below 18 age",
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        setQuestion(response.data.viewQustion.qustiontitle);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center h-full py-11">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-r-lg "
          onClick={handleClick}
        >
          Click here to view the question
        </button>
      </div>
      <div>
        <QuestionBox question={question}></QuestionBox>
      </div>

      <div className="flex items-center justify-center h-full py-11">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded-r-lg"
          onClick={showExplanation}
        >
          Click here to see the explanation
        </button>
      </div>
      <div>
        {explanation.map((val) => {
          return <QuestionBox question={val}></QuestionBox>;
        })}
      </div>

      <div className="flex items-center justify-center h-full py-11">
        <Formik
          initialValues={{ solution: "" }}
          onSubmit={async (value) => {
            console.log(value);

            const config = {
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token, // Replace 'token' with your actual token
              },
            };
            axios
              .post(
                `${process.env.REACT_APP_api}/db/mysql/validate`,
                {
                  email: email,
                  qustiontitle: "Get the list of names below 18 age",
                  solution: value.solution,
                },
                config
              )
              .then((response) => {
                console.log(response.data);
              });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                type="text"
                name="solution"
                placeholder="solution"
                className="block text-gray-700 font-bold mb-2 w-full"
                size="50"
              />
              <div className="py-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Workbench;
