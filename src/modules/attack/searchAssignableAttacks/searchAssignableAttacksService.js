const prisma = require("../../../database");

const searchAssignableAttacksService = async (character_id) => {
  const assignableAttacks = await prisma.attack.findMany({
    where: {
      characters: {
        none: {
          character_id,
        },
      },
    },
    orderBy: {
      name: "asc",
    },
  });

  return assignableAttacks;
};

module.exports = searchAssignableAttacksService;
