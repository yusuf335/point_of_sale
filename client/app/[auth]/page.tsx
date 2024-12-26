import Login from "@/components/forms/login/Login";
import Signup from "@/components/forms/signup/Signup";
import ForgotPassword from "@/components/forms/forgotPassword/forgotPassword";
import ChangePassword from "@/components/forms/changePassword/changePassword";

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
