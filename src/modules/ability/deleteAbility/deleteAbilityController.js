const deleteAbilityService = require("./deleteAbilityService");

const deleteAbilityController = async (req, res) => {
  const { ability_id } = req.params;

  try {
    await deleteAbilityService(ability_id);
    return res.status(204).send();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = deleteAbilityController;
