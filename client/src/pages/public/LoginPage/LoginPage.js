import { useNavigate } from "react-router-dom";
import CustomForm from "../../../components/form/CustomForm";
import { SignInForm } from "../../../utils/formControl/formControl";
import { useCallback } from "react";
import "./LoginPage.scss";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleSubmit = useCallback((values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  }, []);

  const { formBodyJson, initialValues, validationSchema } = SignInForm;

  return (
    <div className="container">
      <div className="Wrapper">
        <div className="center">
          <h1>Login Now</h1>
        </div>
        <CustomForm
          formJSON={formBodyJson}
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        />
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
