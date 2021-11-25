const updateCharacterAttributesService = require("./updateCharacterAttributesService");

const updateCharacterAttributesController = async (req, res) => {
  const data = req.body;
  const { character_id } = req.params;
  try {
    await updateCharacterAttributesService({ character_id, data });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updateCharacterAttributesController;
