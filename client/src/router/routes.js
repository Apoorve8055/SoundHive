import { useState } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { LandingPage, LoginPage, RegistrationPage } from "../pages/public";
import { DashboardPage } from "../pages/private";
import ErrorPage from "../pages/errors/ErrorPage";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(false);
  return auth ? children : <Navigate to="/error" />;
};

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegistrationPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/error/:code?",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: <Navigate to="/error" />,
  },
]);
