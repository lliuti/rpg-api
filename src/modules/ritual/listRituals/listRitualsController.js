const listRitualsService = require("./listRitualsService");

const listRitualsController = async (req, res) => {
  try {
    const list = await listRitualsService();
    return res.status(200).json(list);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = listRitualsController;
