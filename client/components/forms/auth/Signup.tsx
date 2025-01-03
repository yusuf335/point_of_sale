"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./AuthForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import Button from "@/components/ui/button/Button";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPassword(e.target.value);
  };

  const handelShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {/* Welcome Text */}
      <div className={styles.authContainer}>
        <div>
          {/* Form */}
          <div className={styles.authForm}>
            {/* Welcome Text */}
            <div className={styles.welcomeText}>
              <h4>Register account</h4>
              <p>Track your sales!</p>
            </div>

            {/* Full Name */}
            <InputField
              label="Full Name"
              name="full_name"
              placeholder="Enter your full name"
              type="text"
              key="full_name"
              value={name}
              onChange={handleNameChange}
              error={error}
              // helperText="Name is required"
            />

            {/* Email */}
            <InputField
              label="Email"
              name="email"
              placeholder="Enter email address"
              type="email"
              key="email"
              value={email}
              onChange={handleEmailChange}
              error={error}
              // helperText="Email is required"
            />

            {/* Password */}
            <InputField
              label="Password"
              name="password"
              placeholder="Enter password"
              type="text"
              key="password"
              value={password}
              onChange={handlePasswordChange}
              error={error}
              // helperText="Password is required"
            />

            <div>
              <div>
                <Button
                  label="Sign Up"
                  size="small"
                  variant="primary"
                  type="submit"
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
      </div>
    </>
  );
};

export default Signup;
