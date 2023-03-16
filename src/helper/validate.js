// improting Toster which use to give some toser like popup or noticfication 
import { toast } from "react-hot-toast";

// validate login page username and exporting 
export const userNameValidate = async (value) => {
    const error = userNameVerify({},value);

    return error;
}

// Validate username
const userNameVerify = (error={},value) => {
    if(!value.username){
        error.username = toast.error('Username Required...!');
    }else if(value.username.includes("")){
        error.username = toast.error('Invalid Username...!')
    }
    return error;

}