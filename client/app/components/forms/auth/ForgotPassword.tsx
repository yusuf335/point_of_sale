"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./AuthForm.module.scss";
import InputField from "@/app/components/ui/Input/InputField";
import Button from "@/app/components/ui/button/Button";

import { gql, useMutation } from "@apollo/client";
import {
  Mutation,
  MutationForgotPasswordArgs,
} from "@/app/lib/__generated__/types";

const FORGOT_PASSWORD = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");

  const [forgotPassword, { loading }] = useMutation<
    Mutation,
    MutationForgotPasswordArgs
  >(
    FORGOT_PASSWORD,
    { fetchPolicy: "network-only" } // Ensure no cached data is used
  );

  const forgotPasswordHandler = async () => {
    if (!validateFields()) return;

    try {
      const response = await forgotPassword({
        variables: { email },
      });
      console.log(response.data?.forgotPassword);
      if (response.data?.forgotPassword) {
        setServerSuccess("Password reset link has been sent to your email");
      } else {
        setServerError("Failed to send password reset link. Please try again.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setServerError(err.message || "An unexpected error occurred.");
      } else {
        setServerError("An unexpected error occurred.");
      }
    }
  };

  const validateFields = () => {
    let isValid = true;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <>
      {/* Welcome Text */}
      <div className={styles.authContainer}>
        {/* Form */}

        <div className={styles.authForm}>
          {/* Welcome Text */}
          <div className={styles.welcomeText}>
            <h4>Forgot Password!</h4>
            <p>Gain Access Again</p>
          </div>

          {/* Form starts from here */}
          <InputField
            label="Email"
            name="email"
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
          />

          {serverError && (
            <div className={styles.errorContainer}>
              <p>{serverError}</p>
            </div>
          )}

          {serverSuccess && (
            <div className={styles.successContainer}>
              <p>{serverSuccess}</p>
            </div>
          )}

          <div>
            <div>
              <Button
                label="Reset Password"
                size="medium"
                type="submit"
                variant="danger"
                onClick={forgotPasswordHandler}
              />
            </div>
            <div className={styles.authLink}>
              <p>
                Already have an account? <Link href="/auth/login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
