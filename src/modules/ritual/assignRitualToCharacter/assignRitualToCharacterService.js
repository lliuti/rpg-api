const prisma = require("../../../database");

const assignRitualToCharacterService = async ({ character_id, ritual_id }) => {
  try {
    const alreadyAssigned = await prisma.characterRituals.findFirst({
      where: {
        ritual_id: ritual_id,
        character_id: character_id,
      },
    });

    if (alreadyAssigned) {
      console.log(err);
      throw new Error("Ritual already assigned!");
    }

    await prisma.characterRituals.create({
      data: {
        ritual_id: ritual_id,
        character_id: character_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't assign ritual to character");
  }
};

module.exports = assignRitualToCharacterService;
