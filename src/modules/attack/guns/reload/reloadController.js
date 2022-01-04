const reloadService = require("./reloadService");

const reloadController = async (req, res) => {
  const { character_id, attack_id } = req.params;

  try {
    const curr_shots = await reloadService({ character_id, attack_id });
    return res.status(200).json(curr_shots);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = reloadController;
