const prisma = require("../../../database");

const assignRitualToCharacterService = async ({ character_id, ritual_id }) => {
  try {
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
