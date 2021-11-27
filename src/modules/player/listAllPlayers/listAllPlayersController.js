const listAllPlayersService = require("./listAllPlayersService.js");

const listAllPlayersController = async (req, res) => {
  try {
    const list = await listAllPlayersService();
    return res.status(200).json(list);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = listAllPlayersController;
