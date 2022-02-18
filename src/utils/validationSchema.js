import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const validationSchema = yup.object({
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    firstName: yup
        .string('Enter your First Name')
        .required('First Name is required'),
    lastName: yup
        .string('Enter your Last Name')
        .required('Last Name is required'),
    mobile: yup.string()
        .required("Phone number is Required")
        .matches(
            phoneRegExp,
            "Phone number is not valid"
        ),
    // dob: yup.date().nullable()
    dob: yup.string()
        .required("DOB is Required")
});