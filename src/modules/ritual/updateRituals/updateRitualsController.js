const updateRitualsService = require("./updateRitualsService");

const updateRitualsController = async (req, res) => {
  const data = req.body;

  try {
    await updateRitualsService({ data });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = updateRitualsController;
