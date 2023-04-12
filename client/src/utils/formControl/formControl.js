import * as Yup from "yup";

const SignInForm = {
  formBodyJson: {
    email: { type: "email", placeholder: "Enter your email" },
    password: { type: "password", placeholder: "Enter your password" },
  },
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema: Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),
};

const RegisterForm = {
  formBodyJson: {
    firstName: { type: "text", placeholder: "Enter your first name" },
    lastName: { type: "text", placeholder: "Enter your last name" },
    email: { type: "email", placeholder: "Enter your email" },
    password: { type: "password", placeholder: "Enter your password" },
    passwordConfirmation: {
      type: "password",
      placeholder: "Re-Enter your password",
    },
  },
  initialValues: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  },
  validationSchema: Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    passwordConfirmation: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
  }),
};

export { SignInForm, RegisterForm };
