import Login from "@/components/forms/auth/Login";
import Signup from "@/components/forms/auth/Signup";
import ForgotPassword from "@/components/forms/auth/forgotPassword";
import ChangePassword from "@/components/forms/auth/changePassword";

interface AuthProps {
  params: Promise<{
    slug: string;
  }>;
}

const AuthPage = async ({ params }: AuthProps) => {
  const page = (await params).slug;

  return page === "login" ? (
    <Login />
  ) : page === "signup" ? (
    <Signup />
  ) : page === "forgot-password" ? (
    <ForgotPassword />
  ) : page === "change-password" ? (
    <ChangePassword />
  ) : (
    <Login />
  );
};

export default AuthPage;
