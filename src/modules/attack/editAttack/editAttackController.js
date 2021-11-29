const editAttackService = require("./editAttackService");

const editAttackController = async (req, res) => {
  const data = req.body;
  const { attack_id } = req.params;

  try {
    await editAttackService({ attack_id, data });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = editAttackController;
