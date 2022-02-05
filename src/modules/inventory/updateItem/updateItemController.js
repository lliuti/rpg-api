const updateItemService = require("./updateItemService");

const updateItemController = async (req, res) => {
  const data = req.body;
  const { item_id } = req.params;
  try {
    await updateItemService({ item_id, data });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updateItemController;
