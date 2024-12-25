import nodemailer from "nodemailer";

const smtpConfig = {
  host: process.env.MAIL_HOST,
  port: parseInt(process.env.MAIL_PORT, 10),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

const poolConfig = {
  pool: true,
  maxConnections: 5, // Limit the number of connections
  rateLimit: parseInt(process.env.MAIL_RATE_LIMIT, 10) || 10, // Max emails per second
};

// Create a transporter object using the default SMTP transport
export const emailTransporter = nodemailer.createTransport({
  ...smtpConfig,
  ...poolConfig,
});

// Mail options
export const mailOptions = (
  recipientEmail: string,
  subject: string,
  text?: string,
  html?: string
) => {
  return {
    from: `[POS] - Point of Sales <${process.env.MAIL_USER}>`,
    to: recipientEmail,
    subject: subject,
    text: text || "", // Include the text parameter
    html: html || "", // Include the html parameter
  };
};
