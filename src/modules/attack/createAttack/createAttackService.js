const prisma = require("../../../database/index");

const createAttackService = async ({
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
}) => {
  try {
    const attack = await prisma.attack.create({
      data: {
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
      },
    });

    return attack;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't create attack");
  }
};

module.exports = createAttackService;
