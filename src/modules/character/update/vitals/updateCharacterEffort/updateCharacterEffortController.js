const updateCharacterEffortService = require("./updateCharacterEffortService");

const updateCharacterEffortController = async (req, res) => {
  const { currEff, maxEff } = req.body;
  const { character_id } = req.params;
  try {
    const effortPoints = await updateCharacterEffortService({
      character_id,
      currEff: currEff.toString(),
      maxEff,
    });
    return res.status(201).json(effortPoints);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updateCharacterEffortController;
