const prisma = require("../../../database");

const listCharacterAttacksService = async (character_id) => {
  const attacks = await prisma.characterAttacks.findMany({
    where: {
      character_id: character_id,
    },
    select: {
      attack: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return attacks;
};

module.exports = listCharacterAttacksService;
