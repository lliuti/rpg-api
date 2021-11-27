const deleteCharacterService = require("./deleteCharacterService");

const deleteCharacterController = async (req, res) => {
  const { character_id } = req.params;
  try {
    await deleteCharacterService(character_id);
    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = deleteCharacterController;
