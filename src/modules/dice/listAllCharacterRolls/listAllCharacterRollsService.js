const prisma = require("../../../database/index");

const listAllCharacterRollsService = async (character_id) => {
  try {
    const list = await prisma.diceRolls.findMany({
      where: {
        character_id: character_id,
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
    throw new Error("Couldn't list character rolls");
  }
};

module.exports = listAllCharacterRollsService;
