const removeAbilityFromCharacterService = require("./removeAbilityFromCharacterService");

const removeAbilityFromCharacterController = async (req, res) => {
  const { character_id, ability_id } = req.params;
  try {
    await removeAbilityFromCharacterService({ character_id, ability_id });
    return res.status(204).send({ character_id, ability_id });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = removeAbilityFromCharacterController;
