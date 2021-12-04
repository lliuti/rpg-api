const deleteRitualService = require("./deleteRitualService");

const deleteRitualController = async (req, res) => {
  const { ritual_id } = req.params;
  try {
    await deleteRitualService(ritual_id);
    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = deleteRitualController;
