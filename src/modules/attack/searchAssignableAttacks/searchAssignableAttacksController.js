const searchAssignableAttacksService = require("./searchAssignableAttacksService");

const searchAssignableAttacksController = async (req, res) => {
  const { character_id } = req.params;

  try {
    const attacks = await searchAssignableAttacksService(character_id);
    return res.status(200).json(attacks);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = searchAssignableAttacksController;
