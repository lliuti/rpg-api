const prisma = require("../../../database");

const assignAbilityService = async ({ character_id, ability_id }) => {
  try {
    const alreadyAssigned = await prisma.characterAbilities.findFirst({
      where: {
        ability_id: ability_id,
        character_id: character_id,
      },
    });

    if (alreadyAssigned) {
      console.log(err);
      throw new Error("Ability already assigned!");
    }

    await prisma.characterAbilities.create({
      data: {
        ability_id: ability_id,
        character_id: character_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't assign ability to character");
  }
};

module.exports = assignAbilityService;
