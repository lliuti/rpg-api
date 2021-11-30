const removeAttackFromCharacterService = require("./removeAttackFromCharacterService");

const removeAttackFromCharacterController = async (req, res) => {
  const { character_id, attack_id } = req.params;

  try {
    await removeAttackFromCharacterService({ character_id, attack_id });
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = removeAttackFromCharacterController;
