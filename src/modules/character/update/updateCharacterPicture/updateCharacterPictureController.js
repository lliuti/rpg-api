const updateCharacterPictureService = require("./updateCharacterPictureService");

const updateCharacterPictureController = async (req, res) => {
  const { character_id } = req.params;
  const { picture_url } = req.body;

  try {
    await updateCharacterPictureService({ character_id, picture_url });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updateCharacterPictureController;
