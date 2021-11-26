const newPasswordEmailService = require("./newPasswordEmailService");

const newPasswordEmailController = async (req, res) => {
  const { usernameOrEmail } = req.body;

  try {
    await newPasswordEmailService(usernameOrEmail);
    return res.status(200).json({ success: "Email sent" });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = newPasswordEmailController;
