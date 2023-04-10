import { useParams } from "react-router-dom";
import ErrorCode from "../../constant/ErrorCodes";

const ErrorPage = () => {
  const codeParams = useParams();
  let code = 404;
  if (codeParams.code) code = codeParams.code;

  return (
    <div>
      <h1>Hi</h1>
      <h1>{ErrorCode[code].name}</h1>
      <h2>{ErrorCode[code].code}</h2>
      <h5>{ErrorCode[code].msg}</h5>
    </div>
  );
};

export default ErrorPage;
