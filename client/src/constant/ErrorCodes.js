const ErrorCode = {
  400: {
    name: "Bad Request",
    code: "400",
    msg: "The server did not understand the request. Please check your input and try again.",
  },
  401: {
    name: "Unauthorized",
    code: "401",
    msg: "Your authorization failed, Please try refreshing the page and fill in the correct login details.",
  },
  403: {
    name: "Forbidden",
    code: "403",
    msg: "You are not authorized to access this resource. Please contact the administrator if you think this is an error.",
  },
  404: {
    name: "Not Found",
    code: "404",
    msg: "The requested resource was not found. Please check the URL and try again.",
  },
  500: {
    name: "Internal Server Error",
    code: "500",
    msg: "An unexpected error occurred on the server. Please try again later.",
  },
  503: {
    name: "Service Unavailable",
    code: "503",
    msg: "The server is temporarily unavailable. Please try again later.",
  },
};
export default ErrorCode;
