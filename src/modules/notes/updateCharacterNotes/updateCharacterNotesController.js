const updateCharacterNotesService = require("./updateCharacterNotesService");

const updateCharacterNotesController = async (req, res) => {
  const { background, annotations } = req.body;
  const { character_id } = req.params;

  try {
    await updateCharacterNotesService({
      background,
      annotations,
      character_id,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updateCharacterNotesController;
