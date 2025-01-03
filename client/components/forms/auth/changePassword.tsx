"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./AuthForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import Button from "@/components/ui/button/Button";

interface ChangePasswordProps {
  token: string;
}

const ChangePassword = ({ token }: ChangePasswordProps) => {
  console.log(token);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
            error={false}
            helperText="Email is required"
            onChange={handlePasswordChange}
          />

          <InputField
            name="Confirm Password"
            label="Confirm Password"
            type="password"
            placeholder="Enter confirm password"
            value={confirmPassword}
            error={false}
            helperText="Email is required"
            onChange={handleConfirmPasswordChange}
          />

          <div>
            <div>
              <Button
                label="Update Password"
                size="small"
                type="submit"
                variant="primary"
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
