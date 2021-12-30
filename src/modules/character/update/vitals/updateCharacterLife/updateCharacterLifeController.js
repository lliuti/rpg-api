const updateCharacterLifeService = require("./updateCharacterLifeService");

const updateCharacterLifeController = async (req, res) => {
  const { currLife, maxLife } = req.body;
  const { character_id } = req.params;
  try {
    const lifePoints = await updateCharacterLifeService({
      character_id,
      currLife: currLife.toString(),
      maxLife,
    });
    return res.status(201).json(lifePoints);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updateCharacterLifeController;
