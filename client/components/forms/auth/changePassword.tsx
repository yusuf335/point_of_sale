import Link from "next/link";
import styles from "./AuthForm.module.scss";
import InputField from "@/components/ui/Input/InputField";
import Button from "@/components/ui/button/Button";

interface ChangePasswordProps {
  token: string;
}

const ChangePassword = ({ token }: ChangePasswordProps) => {
  console.log(token);
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
            value=""
            error={false}
            helperText="Email is required"
          />

          <InputField
            name="Confirm Password"
            label="Confirm Password"
            type="password"
            placeholder="Enter confirm password"
            value=""
            error={false}
            helperText="Email is required"
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
