const prisma = require("../../../database");

const listCharacterAttacksService = async (character_id) => {
  try {
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
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't delete attack");
  }
};

module.exports = listCharacterAttacksService;
