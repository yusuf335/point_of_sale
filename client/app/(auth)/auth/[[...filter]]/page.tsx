import Login from "@/components/forms/auth/Login";
import Signup from "@/components/forms/auth/Signup";
import ForgotPassword from "@/components/forms/auth/forgotPassword";
import ChangePassword from "@/components/forms/auth/changePassword";

interface AuthProps {
  params: Promise<{
    filter: string;
  }>;
}

const AuthPage = async ({ params }: AuthProps) => {
  const filter = (await params).filter;
  const page = filter?.[0];
  const token = filter?.[1];

  return page === "login" ? (
    <Login />
  ) : page === "signup" ? (
    <Signup />
  ) : page === "forgot-password" ? (
    <ForgotPassword />
  ) : page === "change-password" ? (
    <ChangePassword token={token} />
  ) : (
    <Login />
  );
};

export default AuthPage;
