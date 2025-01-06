"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./AuthForm.module.scss";
import InputField from "@/app/components/ui/Input/InputField";
import Button from "@/app/components/ui/button/Button";

import { gql, useMutation } from "@apollo/client";
import {
  Mutation,
  MutationChangePasswordArgs,
} from "@/app/lib/__generated__/types";

const CHANGE_PASSWORD = gql`
  mutation ChangePassword($token: String!, $password: String!) {
    changePassword(token: $token, password: $password)
  }
`;

interface ChangePasswordProps {
  token: string;
}

const ChangePassword = ({ token }: ChangePasswordProps) => {
  console.log(token);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");

  const [changePassword, { loading }] = useMutation<
    Mutation,
    MutationChangePasswordArgs
  >(CHANGE_PASSWORD, { fetchPolicy: "network-only" });

  const changePasswordHandler = async () => {
    if (!validateFields()) return;

    try {
      const response = await changePassword({
        variables: { token, password },
      });

      if (response.data?.changePassword) {
        setServerSuccess("Password changed successfully");
      } else {
        setServerError("Failed to change password. Please try again.");
      }
    } catch (err) {
      setServerError("An unexpected error occurred: " + (err as Error).message);
    }
  };

  const validateFields = () => {
    let isValid = true;

    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    // Validate confirm password
    if (!confirmPassword.trim()) {
      setConfirmPasswordError("Confirm password is required");
      isValid = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      {/* Welcome Text */}
      <div className={styles.authContainer}>
        {/* Form */}

        <div className={styles.authForm}>
          {/* Welcome Text */}
          <div className={styles.welcomeText}>
            <h4>Update Password!</h4>
            <p>Gain Access Again</p>
          </div>

          {/* Form starts from here */}
          <InputField
            name="New Password"
            label="New Password"
            type="password"
            placeholder="Enter new password"
            value={password}
            error={!!passwordError}
            helperText={passwordError}
            onChange={handlePasswordChange}
            inputStyle={styles.input}
          />

          <InputField
            name="Confirm Password"
            label="Confirm Password"
            type="password"
            placeholder="Enter confirm password"
            value={confirmPassword}
            error={!!confirmPasswordError}
            helperText={confirmPasswordError}
            onChange={handleConfirmPasswordChange}
            inputStyle={styles.input}
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
                label="Update Password"
                size="medium"
                type="submit"
                variant="primary"
                disabled={loading}
                onClick={changePasswordHandler}
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

export default ChangePassword;
