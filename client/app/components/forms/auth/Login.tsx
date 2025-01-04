"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { gql, useLazyQuery } from "@apollo/client";
import { Query, QueryLoginArgs } from "@/app/lib/__generated__/types";

import styles from "./AuthForm.module.scss";
import InputField from "@/app/components/ui/Input/InputField";
import Button from "@/app/components/ui/button/Button";

import { PiEyeSlash, PiEyeLight } from "react-icons/pi";

const LOGIN_QUERY = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      jwtToken
    }
  }
`;

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [executeLogin, { loading }] = useLazyQuery<Query, QueryLoginArgs>(
    LOGIN_QUERY,
    { fetchPolicy: "network-only" } // Ensure no cached data is used
  );

  const handleLogin = async () => {
    try {
      const response = await executeLogin({
        variables: { email, password },
      });

      const token = response.data?.login?.jwtToken;

      if (token) {
        document.cookie = `token=${token}; path=/`; // Store the token in cookies
        router.push("/client/dashboard");
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError(true);
    }
  };

  return (
    <>
      <div className={styles.authContainer}>
        <div className={styles.authForm}>
          <div className={styles.welcomeText}>
            <h4>Welcome back!</h4>
            <p>Sign in to continue</p>
          </div>

          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter email address"
            value={email}
            error={error}
            helperText={
              error ? "Invalid email or password" : "Email is required"
            }
            onChange={(e) => setEmail(e.target.value)}
          />

          <InputField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            helperText="Password is required"
            value={password}
            error={error}
            onChange={(e) => setPassword(e.target.value)}
            icon={
              showPassword ? (
                <PiEyeLight
                  size="1.5rem"
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <PiEyeSlash
                  size="1.5rem"
                  onClick={() => setShowPassword(true)}
                />
              )
            }
            rightLabelLink="Forgot password?"
            onClickRightlabel={() => router.push("/auth/forgot-password")}
          />

          <div>
            <div>
              <Button
                label="Login"
                size="medium"
                type="submit"
                variant="primary"
                onClick={handleLogin}
                disabled={loading}
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
