const updatePasswordService = require("./updatePasswordService");

const updatePasswordController = async (req, res) => {
  const { newPassword } = req.body;
  const { player_id } = req.params;

  try {
    await updatePasswordService({ newPassword, player_id });
    return res.status(200).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updatePasswordController;
