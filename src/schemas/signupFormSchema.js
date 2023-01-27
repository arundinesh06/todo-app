import * as yup from "yup";
const passwordRules = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}$/;
// Exactly 8 characters long, minimum 1 uppercase letter, minimum 1 lowercase letter, minimum 1 numeric digit, minimum 1 special character
export const basicSchema = yup.object().shape({
  name: yup.string().min(2).required("Name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required").min(4),
  // .matches(passwordRules, { message: "Please create a stronger password" }),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});
