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
};

module.exports = createAttackService;
