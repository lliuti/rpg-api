const listMyCharactersService = require("./listMyCharactersService");

const listMyCharactersController = async (req, res) => {
  const { player_id } = req;

  try {
    const list = await listMyCharactersService(player_id);
    return res.status(200).json(list);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = listMyCharactersController;
