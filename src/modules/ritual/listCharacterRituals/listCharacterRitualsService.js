const prisma = require("../../../database");

const listCharacterRitualsService = async (character_id) => {
  const rituals = await prisma.characterRituals.findMany({
    where: {
      character_id: character_id,
    },
    select: {
      ritual: true,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return rituals;
};

module.exports = listCharacterRitualsService;
