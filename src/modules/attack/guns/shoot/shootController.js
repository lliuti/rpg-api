const shootService = require("./shootService");

const shootController = async (req, res) => {
  const { character_id, attack_id } = req.params;

  try {
    const curr_shots = await shootService({ character_id, attack_id });
    return res.status(200).json(curr_shots);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = shootController;
