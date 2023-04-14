import { useState } from "react";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { LandingPage, LoginPage, RegistrationPage } from "../pages/public";
import { DashboardPage } from "../pages/private";
import ErrorPage from "../pages/errors/ErrorPage";
import MasterLayout from "../components/masterLayout/MasterLayout";

const ProtectedRoute = ({ children }) => {
  const [auth, setAuth] = useState(true);
  return auth ? children : <Navigate to="/error/401" />;
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
        <MasterLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardPage />,
      },
      {
        path: "profile",
        element: <h1>Profile</h1>,
      },
    ],
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
