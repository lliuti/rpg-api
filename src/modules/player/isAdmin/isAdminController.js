const isAdminService = require("./isAdminService");

const isAdminController = async (req, res) => {
  const { player_id } = req.params;
  try {
    const isAdmin = await isAdminService(player_id);
    return res.status(200).json(isAdmin);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = isAdminController;
