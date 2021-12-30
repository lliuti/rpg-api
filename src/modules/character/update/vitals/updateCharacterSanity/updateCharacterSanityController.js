const updateCharacterSanityService = require("./updateCharacterSanityService");

const updateCharacterSanityController = async (req, res) => {
  const { currSan, maxSan } = req.body;
  const { character_id } = req.params;
  try {
    const sanityPoints = await updateCharacterSanityService({
      character_id,
      currSan: currSan.toString(),
      maxSan,
    });
    return res.status(201).json(sanityPoints);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updateCharacterSanityController;
