const deleteAttackService = require("./deleteAttackService");

const deleteAttackController = async (req, res) => {
  const { attack_id } = req.params;

  try {
    await deleteAttackService(attack_id);
    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = deleteAttackController;
