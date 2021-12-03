const listAbilitiesService = require("./listAbilitiesService");

const listAbilitiesController = async (req, res) => {
  try {
    const abilities = await listAbilitiesService();
    return res.status(200).json(abilities);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = listAbilitiesController;
