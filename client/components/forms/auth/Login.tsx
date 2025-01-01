"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./AuthForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import Button from "@/components/ui/button/Button";

import { PiEyeSlash, PiEyeLight } from "react-icons/pi";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handelShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleForgotPassword = () => {
    router.push("/auth/forgot-password");
  };

  return (
    <>
      {/* Welcome Text */}
      <div className={styles.authContainer}>
        {/* Form */}

        <div className={styles.authForm}>
          {/* Welcome Text */}
          <div className={styles.welcomeText}>
            <h4>Welcome back!</h4>
            <p>Sign in to continue</p>
          </div>

          {/* Form starts from here */}
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter email address"
            value={email}
            error={error}
            helperText="Email is required"
            onChange={handleEmailChange}
          />

          <InputField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            helperText="Password is required"
            value={password}
            error={error}
            onChange={handlePasswordChange}
            icon={
              showPassword ? (
                <PiEyeSlash size="1.5rem" onClick={handelShowPassword} />
              ) : (
                <PiEyeLight size="1.5rem" onClick={handelShowPassword} />
              )
            }
            rightLabelLink="Forgot password?"
            onClickRightlabel={handleForgotPassword}
          />

          <div>
            <div>
              <Button
                label="Login"
                size="small"
                type="submit"
                variant="primary"
              />
            </div>
            <div className={styles.authLink}>
              <p>
                Don't have an account?{" "}
                <Link href="/auth/signup">Signup Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
