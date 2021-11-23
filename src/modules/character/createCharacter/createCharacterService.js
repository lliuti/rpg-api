const prisma = require("../../../database/index");

const createCharacterService = async ({
  name,
  occupation,
  age,
  archetype,
  player_id,
}) => {
  const character = await prisma.character.create({
    data: {
      name,
      occupation,
      player_id,
      age,
      archetype,
    },
  });

  return character;
};

module.exports = createCharacterService;
