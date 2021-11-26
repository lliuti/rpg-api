const nodemailer = require("nodemailer");

const sendMail = async ({ email_to, email_subject, email_text }) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    port: 465,
    secure: true,
    secureConnection: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnAuthorized: true,
    },
  });

  const info = await transporter.sendMail({
    from: `"rpg platform 🎲" <${process.env.EMAIL_USER}>`,
    to: email_to,
    subject: email_subject,
    text: email_text,
    // html: "<b>Hello world?</b>",
  });

  console.log(`email sent: ${info.messageId}`);
};

module.exports = sendMail;
