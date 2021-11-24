const createAttackService = require("./createAttackService");

const createAttackController = async (req, res) => {
  const {
    name,
    type,
    skill,
    range,
    damage,
    damageType,
    critical,
    criticalDamage,
    weight,
    description,
  } = req.body;

  try {
    const attack = await createAttackService({
      name,
      type,
      skill,
      range,
      damage,
      damageType,
      critical,
      criticalDamage,
      weight,
      description,
    });
    return res.status(201).json(attack);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = createAttackController;
