import { useNavigate, useParams } from "react-router-dom";
import ErrorCode from "../../constant/ErrorCodes";
import robotPng from "../../assets/png/robot.png";

import "./ErrorPage.scss";
import { IoArrowBack } from "react-icons/io5";
const ErrorPage = () => {
  const codeParams = useParams();
  const navigate = useNavigate();
  let code = 404;
  if (codeParams.code) code = codeParams.code;

  return (
    <div className="error-container">
      <div className="error-card">
        <img src={robotPng} className="error-robot-img" />
        <div className="error-details">
          <div className="back" onClick={() => navigate(-1)}>
            <IoArrowBack />
            Back
          </div>
          <h1>
            {ErrorCode[code].code} &nbsp; {ErrorCode[code].name}
          </h1>
          <h5>{ErrorCode[code].msg}</h5>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
