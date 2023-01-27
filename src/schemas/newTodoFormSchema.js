import * as yup from "yup";

export const basicSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  todo: yup.string().required("Todo can't be empty").min(4),
  // .matches(passwordRules, { message: "Please create a stronger password" }),
});
