// improting Toster which use to give some toser like popup or noticfication
import { toast } from "react-hot-toast";

// validate login page username and exporting
export const userNameValidate = async (value) => {
  const error = emailVerify({}, value);

  return error;
};

//validate profile page
export const profileValidation = async (value) => {
  const errors = emailVerify({}, value);
  return errors;
};

// validate register form
export const registerValidation = async (value) => {
  const errors = userNameVerify({}, value);
  conformPasswordVerify(errors, value);
  emailVerify(errors, value);

  return errors;
};
// validate  password and exporting
export const passwordValidate = async (value) => {
  const error = passwordVerify({}, value);

  return error;
};

// validate  canform password and exporting
export const conformPasswordValidate = async (value) => {
  const error = conformPasswordVerify({}, value);

  return error;
};

// Validate password
const conformPasswordVerify = (error = {}, value) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  if (value.password !== value.conform_password) {
    error.password = toast.error(
      "Password and comform password must be same...!"
    );
  } else if (!value.password) {
    error.password = toast.error("Password Required...!");
  } else if (value.password.includes(" ")) {
    error.username = toast.error("Password should not have space ...!");
  } else if (value.password.length < 5) {
    error.username = toast.error("Password must be more than 5 character...!");
  } else if (!specialChars.test(value.password)) {
    error.username = toast.error("Password must have specialChars...!");
  }
  return error;
};

// Validate password
const passwordVerify = (error = {}, value) => {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  if (!value.password) {
    error.password = toast.error("Password Required...!");
  } else if (value.password.includes(" ")) {
    error.username = toast.error("Wrong password...!");
  } else if (value.password.length < 5) {
    error.username = toast.error("Password must be more than 5 character...!");
  } else if (!specialChars.test(value.password)) {
    error.username = toast.error("Password must have specialChars...!");
  }
  return error;
};

// Validate username
// const userNameVerify = (error={},value) => {
//     if(!value.username){
//         error.username = toast.error('Username Required...!');
//     }else if(value.username.includes(" ")){
//         error.username = toast.error('Invalid Username...!')
//     }
//     return error;

// }
const userNameVerify = (error = {}, value) => {
  if (!value.name) {
    error.name = toast.error("Username Required...!");
  } else if (value.name.includes(" ")) {
    error.name = toast.error("Invalid Username...!");
  }
  return error;
};

// validating email
const emailVerify = (error = {}, value) => {
  if (!value.email) {
    error.email = toast.error("Email Required...!");
  } else if (value.email.includes(" ")) {
    error.email = toast.error("Wrong Email...!");
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
    error.email = toast.error("Invalid email address...!");
  }

  return error;
};
