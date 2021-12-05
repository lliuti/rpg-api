const updateRitualService = require("./updateRitualService");

const updateRitualController = async (req, res) => {
  const data = req.body;
  const { attack_id } = req.params;

  try {
    await updateRitualService({ ritual_id, data });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updateRitualController;
