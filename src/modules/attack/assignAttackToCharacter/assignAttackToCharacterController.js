const assignAttackToCharacterService = require("./assignAttackToCharacterService");

const assignAttackToCharacterController = async (req, res) => {
  const { character_id, attack_id } = req.params;

  try {
    await assignAttackToCharacterService({
      character_id,
      attack_id,
    });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = assignAttackToCharacterController;
