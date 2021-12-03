const listCharacterAbilitiesService = require("./listCharacterAbilitiesService");

const listCharacterAbilitiesController = async (req, res) => {
  const { character_id } = req.params;

  try {
    const abilities = await listCharacterAbilitiesService(character_id);
    return res.status(200).json(abilities);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = listCharacterAbilitiesController;
