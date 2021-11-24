const prisma = require("../../../database");

const listCharacterAttacksService = async (character_id) => {
  const attacks = await prisma.characterAttacks.findMany({
    where: {
      character_id: character_id,
    },
    select: {
      attack: {
        select: {
          id: true,
          name: true,
          skill: true,
          range: true,
          damage: true,
          criticalDamage: true,
          damageType: true,
          description: true,
          type: true,
          weight: true,
        },
      },
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return attacks;
};

module.exports = listCharacterAttacksService;
