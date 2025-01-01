import Login from "@/components/forms/auth/Login";
import Signup from "@/components/forms/auth/Signup";
import ForgotPassword from "@/components/forms/auth/forgotPassword";
import ChangePassword from "@/components/forms/auth/changePassword";

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
