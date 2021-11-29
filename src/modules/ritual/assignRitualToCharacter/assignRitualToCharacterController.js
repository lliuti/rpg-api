const assignRitualToCharacterService = require("./assignRitualToCharacterService");

const assignRitualToCharacterController = async (req, res) => {
  const { character_id, ritual_id } = req.params;

  try {
    await assignRitualToCharacterService({
      character_id,
      ritual_id,
    });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = assignRitualToCharacterController;
