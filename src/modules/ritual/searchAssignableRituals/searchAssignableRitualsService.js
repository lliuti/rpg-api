const prisma = require("../../../database");

const searchAssignableRitualsService = async (character_id) => {
  const assignableRituals = await prisma.ritual.findMany({
    where: {
      characters: {
        none: {
          character_id,
        },
      },
    },
  });

  return assignableRituals;
};

module.exports = searchAssignableRitualsService;
