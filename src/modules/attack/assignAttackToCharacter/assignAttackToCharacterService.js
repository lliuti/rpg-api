const prisma = require("../../../database");

const assignAttackToCharacterService = async ({ character_id, attack_id }) => {
  try {
    const alreadyAssigned = await prisma.characterAttacks.findFirst({
      where: {
        attack_id: attack_id,
        character_id: character_id,
      },
    });

    if (alreadyAssigned) {
      console.log(err);
      throw new Error("Attack already assigned!");
    }

    await prisma.characterAttacks.create({
      data: {
        attack_id: attack_id,
        character_id: character_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't assign attack to character");
  }
};

module.exports = assignAttackToCharacterService;
