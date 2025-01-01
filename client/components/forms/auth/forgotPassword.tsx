import Link from "next/link";
import styles from "./AuthForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import Button from "@/components/ui/button/Button";

const ForgotPassword = () => {
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
            name="email"
            label="Email"
            type="email"
            placeholder="Enter email address"
            value=""
            error={false}
            helperText="Email is required"
          />

          <div>
            <div>
              <Button
                label="Reset Password"
                size="small"
                type="submit"
                variant="danger"
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
