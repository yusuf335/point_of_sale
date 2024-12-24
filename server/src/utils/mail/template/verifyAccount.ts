import { emailTransporter, mailOptions } from "../nodeMailer";

// Custom error handler
import { CustomError } from "../../customError";

export const sendAccountVerificationEmail = async (
  recipientEmail: string,
  subject: string,
  token: string
) => {
  try {
    // If plainText is not provided, use the default message
    const plainText = `Welcome to our platform! We're excited to have you. Please click the link below to verify your account: ${process.env.CLIENT_URL}/verify-account/${token}`;

    // Send email
    const options = mailOptions(recipientEmail, subject, plainText);

    const info = await emailTransporter.sendMail(options);
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    throw new CustomError("Failed to send email", "INTERNAL_SERVER_ERROR", 500);
  }
};
