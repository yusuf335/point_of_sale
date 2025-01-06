"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AuthForm.module.scss";
import InputField from "@/app/components/ui/Input/InputField";
import Button from "@/app/components/ui/button/Button";
import { gql, useMutation } from "@apollo/client";
import { Mutation, MutationSignupArgs } from "@/app/lib/__generated__/types";

const SIGNUP = gql`
  mutation SingUp($name: String!, $email: String!, $password: String!) {
    signup(name: $name, email: $email, password: $password) {
      jwtToken
    }
  }
`;

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [serverError, setServerError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [signUp, { loading }] = useMutation<Mutation, MutationSignupArgs>(
    SIGNUP,
    { fetchPolicy: "network-only" } // Ensure no cached data is used
  );

  const handleSubmit = async () => {
    if (!validateFields()) return;

    try {
      const response = await signUp({
        variables: { name, email, password },
      });

      const token = response.data?.signup?.jwtToken;

      if (token) {
        document.cookie = `token=${token}; path=/`; // Store the token in cookies
        router.push("/cashier/dashboard");
      } else {
        setServerError("Failed to register. Please try again.");
      }
    } catch (err: any) {
      setServerError(err.message || "An unexpected error occurred.");
    }
  };

  const validateFields = () => {
    let isValid = true;

    // Validate name
    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else {
      setNameError("");
    }

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

    // Validate password
    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles.authContainer}>
      <div>
        <div className={styles.authForm}>
          <div className={styles.welcomeText}>
            <h4>Register account</h4>
            <p>Track your sales!</p>
          </div>

          <InputField
            label="Full Name"
            name="full_name"
            placeholder="Enter your full name"
            type="text"
            value={name}
            onChange={handleNameChange}
            error={!!nameError}
            helperText={nameError}
            inputStyle={styles.input}
          />

          <InputField
            label="Email"
            name="email"
            placeholder="Enter email address"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={!!emailError}
            helperText={emailError}
            inputStyle={styles.input}
          />

          <InputField
            label="Password"
            name="password"
            placeholder="Enter password"
            type="text"
            value={password}
            onChange={handlePasswordChange}
            error={!!passwordError}
            helperText={passwordError}
            inputStyle={styles.input}
          />
          {serverError && (
            <div className={styles.errorContainer}>
              <p>{serverError}</p>
            </div>
          )}

          <Button
            label="Sign Up"
            size="medium"
            variant="primary"
            type="submit"
            disabled={loading}
            onClick={handleSubmit}
          />

          <div className={styles.authLink}>
            <p>
              Already have an account? <Link href="/auth/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
