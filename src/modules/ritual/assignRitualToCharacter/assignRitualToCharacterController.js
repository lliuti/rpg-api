const assignRitualToCharacterService = require("./assignRitualToCharacterService");

const assignRitualToCharacterController = async (req, res) => {
  const { character_id, ritual_id } = req.params;

  try {
    const ritual = await assignRitualToCharacterService({
      character_id,
      ritual_id,
    });
    return res.status(201).json({
      success: `Ritual: ${ritual.ritual} assigned to: ${ritual.character}`,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = assignRitualToCharacterController;
