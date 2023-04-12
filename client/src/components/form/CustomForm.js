import { memo } from "react";
import { ErrorMessage, Formik } from "formik";
import "./CustomForm.scss";

const CustomForm = ({
  formJSON,
  initialValues,
  validationSchema,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className="field-group">
          {Object.entries(formJSON).map(([name, { type, placeholder }]) => {
            return (
              <div key={name} className="form-control">
                <input
                  type={type}
                  name={name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder={placeholder}
                  className="item"
                />
                <i className="text-danger">
                  <ErrorMessage name={name} />
                </i>
              </div>
            );
          })}
          <button type="submit" className="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default memo(CustomForm);
