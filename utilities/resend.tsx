import { Resend } from "resend";
import React from "react";
import WelcomeEmail from "../emails/welcome-email";

const resend = new Resend("resend-api-key");

console.log("Sending email...");
resend
  .sendEmail({
    from: "test@email.com",
    to: "test2@email.com",
    subject: "Welcome Email",
    react: <WelcomeEmail />,
  })
  .then(() => {
    console.log("Email sent!");
  })
  .catch((err) => {
    console.error(err);
  });
