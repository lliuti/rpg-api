const prisma = require("../../../database");

const listCharacterRitualsService = async (character_id) => {
  try {
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
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't list character rituals");
  }
};

module.exports = listCharacterRitualsService;
