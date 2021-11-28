const updatePlayerService = require("./updatePlayerService");

const updatePlayerController = async (req, res) => {
  const data = req.body;
  const { player_id } = req.params;

  try {
    await updatePlayerService({ player_id, data });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updatePlayerController;
