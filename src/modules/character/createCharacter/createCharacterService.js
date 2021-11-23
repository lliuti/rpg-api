const prisma = require("../../../database/index");

const createCharacterService = async ({ name, occupation, age, archetype }) => {
  const character = await prisma.character.create({
    data: {
      name,
      occupation,
      age,
      archetype,
    },
  });

  return character;
};

module.exports = createCharacterService;
