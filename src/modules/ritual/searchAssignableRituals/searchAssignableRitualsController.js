const searchAssignableRitualsService = require("./searchAssignableRitualsService");

const searchAssignableRitualsController = async (req, res) => {
  const { character_id } = req.params;

  try {
    const rituals = await searchAssignableRitualsService(character_id);
    return res.status(200).json(rituals);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = searchAssignableRitualsController;
