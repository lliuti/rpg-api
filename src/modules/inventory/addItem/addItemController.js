const addItemService = require("./addItemService");

const addItemController = async (req, res) => {
  const { item, weight } = req.body;
  const { character_id } = req.params;

  try {
    await addItemService({ character_id, item, weight });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = addItemController;
