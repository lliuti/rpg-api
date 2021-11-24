const prisma = require("../../../database");

const assignAttackToCharacterService = async ({ character_id, attack_id }) => {
  const attack = await prisma.attack.findFirst({
    where: {
      id: attack_id,
    },
  });

  if (!attack) {
    throw new Error("Couldn't find any attack");
  }

  const character = await prisma.character.findFirst({
    where: {
      id: character_id,
    },
  });

  if (!character) {
    throw new Error("Couldn't find any character");
  }

  await prisma.characterAttacks.create({
    data: {
      attack_id: attack.id,
      character_id: character.id,
    },
  });

  return { attack: attack.name, character: character.name };
};

module.exports = assignAttackToCharacterService;
