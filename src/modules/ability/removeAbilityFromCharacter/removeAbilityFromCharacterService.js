const prisma = require("../../../database");

const removeAbilityFromCharacterService = async ({
  character_id,
  ability_id,
}) => {
  try {
    await prisma.characterAbilities.deleteMany({
      where: {
        character_id,
        ability_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't remove ability from character");
  }
};

module.exports = removeAbilityFromCharacterService;
