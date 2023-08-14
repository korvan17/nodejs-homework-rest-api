import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";

dotenv.config();
const { SENDGRID_API_KEY, BASE_URL } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

async function sendEmail(userMail, verificationToken) {
  const email = {
    to: userMail,
    subject: "Verification of email",
    html: `<a target="_blank" href="${BASE_URL}/users/verify/${verificationToken}">Please, click here to verify your email</a>`,
    from: "ivan@homeds.pro",
  };
  await sgMail.send(email);
  return true;
}

export default sendEmail;
