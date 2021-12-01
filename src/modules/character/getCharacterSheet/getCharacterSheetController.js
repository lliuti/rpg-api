const getCharacterSheetService = require("./getCharacterSheetService");

const getCharacterSheetController = async (req, res) => {
  const { character_id } = req.params;
  const { player_id } = req;

  try {
    const characterSheet = await getCharacterSheetService({
      character_id,
      player_id,
    });
    return res.status(200).json(characterSheet);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = getCharacterSheetController;
