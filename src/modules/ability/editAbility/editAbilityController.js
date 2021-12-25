const editAbilityService = require("./editAbilityService");

const editAbilityController = async (req, res) => {
  const data = req.body;
  const { ability_id } = req.params;

  try {
    await editAbilityService({ ability_id, data });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = editAbilityController;
