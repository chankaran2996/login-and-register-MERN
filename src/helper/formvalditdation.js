// improting Toster which use to give some toser like popup or noticfication
import { toast } from "react-hot-toast";

// validate register form
export const formValidation = async (value) => {
    const errors = nameVerify({}, value);
    emailVerify(errors, value);
    contactNumberVerify(errors, value);
    resumeVerify(errors, value);
    portfolioVerify(errors, value);
    githubVerify(errors, value);
    locationVerify(errors, value);
    passOutVerify(errors, value);
    return errors;
};
// validating name
const nameVerify = (error = {}, value) => {
    if (!value.name) {
        error.name = toast.error("Name Required...!");
    }
    return error;
};

// validating email
const emailVerify = (error = {}, value) => {
    if (!value.email) {
        error.email = toast.error("Email Required...!");
    } else if (value.email.includes(" ")) {
        error.email = toast.error("Wrong Email...! Email should not contain space");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
        error.email = toast.error("Invalid email address...!");
    }

    return error;
};

// validating contact number 
const contactNumberVerify = (error = {}, value) => {

    if (!value.contactNumber) {
        error.contactNumber = toast.error("Number Required...!")
    } else if (!(/^[0-9]*$/.test(value.contactNumber))) {
        error.contactNumber = toast.error("Number should be in number format...!");
    } else if (value.contactNumber.length != 10) {
        error.contactNumber = toast.error("Number should contains 10 digits...!");
    }

    return error;
};

// validating drive link
const resumeVerify = (error = {}, value) => {

    if (!value.resume) {
        error.resume = toast.error("Updated Resume Link in Drive Required...!")
    } else if (value.resume.includes(" ")) {
        error.resume = toast.error("Wrong Link...!");
    }
    return error;
};

// validating portfolio link
const portfolioVerify = (error = {}, value) => {

    if (!value.portfolio) {
        error.portfolio = toast.error("Updated portfolio Link Required...!")
    } else if (value.portfolio.includes(" ")) {
        error.portfolio = toast.error("Wrong Link...!");
    }
    return error;
};

// validating github link
const githubVerify = (error = {}, value) => {

    if (!value.github) {
        error.github = toast.error("Updated Github Link Required...!")
    } else if (value.github.includes(" ")) {
        error.github = toast.error("Wrong Link...!");
    }
    return error;
};

// validating location
const locationVerify = (error = {}, value) => {
    if (!value.location) {
        error.location = toast.error("Location Required...!");
    }
    return error;
};

// validating passOut
const passOutVerify = (error = {}, value) => {
    if (!value.passOut) {
        error.passOut = toast.error("Enter year of passout Required...!");
    } else if (!(/^[0-9]*$/.test(value.passOut))) {
        error.passOut = toast.error("Year of passout should be in number format...!");
    }
    return error;
};