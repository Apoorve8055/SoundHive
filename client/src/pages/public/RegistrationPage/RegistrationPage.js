import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "./RegistrationPage.scss";
import { useNavigate } from "react-router-dom";
const RegistrationPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object({
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
  });

  return (
    <div className="register-page-container">
      <div className="Wrapper center">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="field-group">
              <div className="center">
                <h1>Register Now </h1>
              </div>

              <input
                type="text"
                className="item"
                name="firstName"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                placeholder={`Enter your firstName`}
              />
              <ErrorMessage className="label" name="firstName" />
              <input
                type="text"
                name="lastName"
                className="item"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                placeholder="Enter your lastName"
              />
              <ErrorMessage className="label" name="lastName" />
              <input
                className="item"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                placeholder="Enter your email"
              />
              <ErrorMessage className="label" name="email" />
              <input
                className="item"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                placeholder="Enter your password"
              />
              <ErrorMessage className="label" name="password" />
              <input
                className="item"
                type="password"
                name="passwordConfirmation"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirmation}
                placeholder="Re-enter your password"
              />
              <ErrorMessage className="label" name="passwordConfirmation" />

              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          )}
        </Formik>
        <div className="other-group ">
          <div className="center urlLink">
            Already Registered User?&nbsp;
            <div onClick={() => navigate("/login")}>Click here to login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
