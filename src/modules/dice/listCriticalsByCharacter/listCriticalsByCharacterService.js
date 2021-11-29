const prisma = require("../../../database/index");

const listCriticalsByCharacterService = async (character_id) => {
  try {
    const list = await prisma.diceRolls.findMany({
      where: {
        character_id: character_id,
        dice_result: "20",
        dice_face: "20",
      },
      select: {
        id: true,
        dice_face: true,
        dice_result: true,
        createdAt: true,
        character: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return list;
  } catch (err) {
    throw new Error("Couldn't list character critical rolls");
  }
};

module.exports = listCriticalsByCharacterService;
