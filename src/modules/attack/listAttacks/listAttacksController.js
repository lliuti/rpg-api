const listAttacksService = require("./listAttacksService");

const listAttacksController = async (req, res) => {
  try {
    const list = await listAttacksService();
    return res.status(200).json(list);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = listAttacksController;
