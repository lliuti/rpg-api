const assignAbilityService = require("./assignAbilityService");

const assignAbilityController = async (req, res) => {
  const { character_id, ability_id } = req.params;

  try {
    await assignAbilityService({ character_id, ability_id });
    return res.status(201).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = assignAbilityController;
