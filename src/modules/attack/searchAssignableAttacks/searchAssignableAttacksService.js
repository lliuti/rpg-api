const prisma = require("../../../database");

const searchAssignableAttacksService = async (character_id) => {
  const assignableAttacks = await prisma.characterAttacks.findMany({
    where: {
      NOT: {
        character_id: character_id,
      },
    },
  });

  const assignableAttacksArray = [];

  assignableAttacks.forEach(async (atk) => {
    const attack = await prisma.attack.findMany({
      where: {
        id: atk.id,
      },
    });

    assignableAttacksArray.push(attack);
  });

  return assignableAttacksArray;
};

module.exports = searchAssignableAttacksService;
