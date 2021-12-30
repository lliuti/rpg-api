const prisma = require("../../../database/index");

const createCharacterService = async ({
  name,
  occupation,
  age,
  archetype,
  player_id,
}) => {
  try {
    const character = await prisma.character.create({
      data: {
        name,
        occupation,
        player_id,
        age,
        archetype,
        max_weight: archetype === "Combatente" ? 10 : 8,
      },
    });

    await prisma.sheet.create({
      data: {
        character_id: character.id,
      },
    });

    return character;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't create character");
  }
};

module.exports = createCharacterService;
