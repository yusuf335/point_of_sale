import Login from "@/app/components/forms/auth/Login";
import Signup from "@/app/components/forms/auth/Signup";
import ForgotPassword from "@/app/components/forms/auth/ForgotPassword";
import ChangePassword from "@/app/components/forms/auth/ChangePassword";

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
