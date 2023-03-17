// improting Toster which use to give some toser like popup or noticfication 
import { toast } from "react-hot-toast";

// validate login page username and exporting 
export const userNameValidate = async (value) => {
    const error = userNameVerify({},value);

    return error;
}

// validate  password and exporting 
export const passwordValidate = async (value) => {
    const error = passwordVerify({},value);

    return error;
}

// validate  canform password and exporting 
export const conformPasswordValidate = async (value) => {
    const error = conformPasswordVerify({},value);

    return error;
}

// Validate password
const conformPasswordVerify = (error={},value) => {

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(value.password!=value.conform_password){
        error.password = toast.error('Password and comform password must be same...!');
    }else if(!value.password){
        error.password = toast.error('Password Required...!');
    }else if(value.password.includes(" ")){
        error.username = toast.error('Password should not have space ...!');
    }else if(value.password.length<5){
        error.username = toast.error('Password must be more than 5 character...!')
    }else if(!specialChars.test(value.password)){
        error.username = toast.error('Password must have specialChars...!')
    }
    return error;

}

// Validate password
const passwordVerify = (error={},value) => {

    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if(!value.password){
        error.password = toast.error('Password Required...!');
    }else if(value.password.includes(" ")){
        error.username = toast.error('Wrong password...!');
    }else if(value.password.length<5){
        error.username = toast.error('Password must be more than 5 character...!')
    }else if(!specialChars.test(value.password)){
        error.username = toast.error('Password must have specialChars...!')
    }
    return error;

}

// Validate username
const userNameVerify = (error={},value) => {
    if(!value.username){
        error.username = toast.error('Username Required...!');
    }else if(value.username.includes(" ")){
        error.username = toast.error('Invalid Username...!')
    }
    return error;

}