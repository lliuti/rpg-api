const nodemailer = require("nodemailer");

const sendMail = async ({ email_to, email_subject, email_text }) => {
  const transporter = nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: `"rpg platform 🎲" <${process.env.EMAIL_USER}>`,
    to: email_to,
    subject: email_subject,
    text: email_text,
    // html: "<b>Hello world?</b>",
  });

  console.log(
    `password recover email sent to ${email_to}. MessageId: ${info.messageId}`
  );
};

module.exports = sendMail;
