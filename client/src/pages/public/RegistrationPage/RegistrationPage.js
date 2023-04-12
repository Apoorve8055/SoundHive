import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import "./RegistrationPage.scss";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../../utils/formControl/formControl";
import CustomForm from "../../../components/form/CustomForm";
import { useCallback } from "react";

const RegistrationPage = () => {
  const navigate = useNavigate();
  const handleSubmit = useCallback((values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  }, []);

  const { formBodyJson, initialValues, validationSchema } = RegisterForm;

  return (
    <div className="register-page-container">
      <div className="Wrapper center">
        <h1>Register Now</h1>
        <CustomForm
          formJSON={formBodyJson}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
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
