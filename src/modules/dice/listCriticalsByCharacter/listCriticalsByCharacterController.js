const listCriticalsByCharacterService = require("./listCriticalsByCharacterService");

const listCriticalsByCharacterController = async (req, res) => {
  const { character_id } = req.params;

  try {
    const list = await listCriticalsByCharacterService(character_id);
    return res.status(200).json(list);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = listCriticalsByCharacterController;
