const prisma = require("../../../database");

const assignRitualToCharacterService = async ({ character_id, ritual_id }) => {
  const ritual = await prisma.ritual.findFirst({
    where: {
      id: ritual_id,
    },
  });

  if (!ritual) {
    throw new Error("Couldn't find any ritual");
  }

  const character = await prisma.character.findFirst({
    where: {
      id: character_id,
    },
  });

  if (!character) {
    throw new Error("Couldn't find any character");
  }

  await prisma.characterRituals.create({
    data: {
      ritual_id: ritual.id,
      character_id: character.id,
    },
  });

  return { ritual: ritual.name, character: character.name };
};

module.exports = assignRitualToCharacterService;
