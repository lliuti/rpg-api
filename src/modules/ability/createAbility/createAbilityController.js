const createAbilityService = require("./createAbilityService");

const createAbilityController = async (req, res) => {
  const { name, description } = req.body;

  try {
    await createAbilityService({ name, description });
    return res.status(201).send();
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = createAbilityController;
