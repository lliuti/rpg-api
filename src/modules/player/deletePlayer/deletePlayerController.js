const deletePlayerService = require("./deletePlayerService");

const deletePlayerController = async (req, res) => {
  const { player_id } = req.params;
  try {
    await deletePlayerService(player_id);
    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = deletePlayerController;
