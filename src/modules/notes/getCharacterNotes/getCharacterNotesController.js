const getCharacterNotesService = require("./getCharacterNotesService");

const getCharacterNotesController = async (req, res) => {
  const { character_id } = req.params;
  try {
    const notes = await getCharacterNotesService(character_id);
    return res.status(200).json(notes);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = getCharacterNotesController;
