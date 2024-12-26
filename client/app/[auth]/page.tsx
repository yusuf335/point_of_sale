import { Suspense } from "react";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import ForgotPassword from "./forgotPassword/forgotPassword";
import ChangePassword from "./changePassword/changePassword";

interface AuthProps {
  params: Promise<{
    auth: string;
  }>;
}

const Auth = async ({ params }: AuthProps) => {
  const page = (await params).auth;

  const renderPage = () => {
    switch (page) {
      case "login":
        return <Login />;
      case "signup":
        return <Signup />;
      case "forgot-password":
        return <ForgotPassword />;
      case "change-password":
        return <ChangePassword />;
      default:
        return <Login />; // Fallback in case of an invalid page
    }
  };

  return renderPage();
};

export default Auth;
