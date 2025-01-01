import { redirect } from "next/navigation";

const AuthPage = async () => {
  return redirect("/auth/login");
};

export default AuthPage;
