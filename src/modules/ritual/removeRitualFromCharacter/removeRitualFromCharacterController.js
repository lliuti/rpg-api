const removeRitualFromCharacterService = require("./removeRitualFromCharacterService");

const removeRitualFromCharacterController = async (req, res) => {
  const { character_id, ritual_id } = req.params;

  try {
    await removeRitualFromCharacterService({ character_id, ritual_id });
    return res.status(204).send();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = removeRitualFromCharacterController;
