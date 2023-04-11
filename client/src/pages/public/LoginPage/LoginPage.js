import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="container">
      <div className="Wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="field-group">
              <div className="center">
                <h1>Login</h1>
              </div>

              <Field
                className="item"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage className="label" name="email" />

              <Field
                className="item"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              <ErrorMessage className="label" name="password" />

              <button type="submit" className="submit" disabled={isSubmitting}>
                Submit
              </button>
            </Form>
          )}
        </Formik>
        <div className="other-group">
          <div className="center urlLink">
            New Here?&nbsp;
            <div onClick={() => navigate("/register")}>Create an account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
