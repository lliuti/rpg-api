const removeItemService = require("./removeItemService");

const removeItemController = async (req, res) => {
  const { character_id, item_id } = req.params;

  try {
    await removeItemService({ character_id, item_id });
    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = removeItemController;
