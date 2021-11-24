const listCharactersForDashboardService = require("./listCharactersForDashboardService");

const listCharactersForDashboardController = async (req, res) => {
  try {
    const list = await listCharactersForDashboardService();
    return res.status(200).json(list);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = listCharactersForDashboardController;
