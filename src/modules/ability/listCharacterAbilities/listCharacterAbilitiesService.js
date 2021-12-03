const prisma = require("../../../database/index");

const listCharacterAbilitiesService = async (character_id) => {
  try {
    const abilities = await prisma.characterAbilities.findMany({
      where: {
        character_id: character_id,
      },
      select: {
        ability: true,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return abilities;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't list character abilities");
  }
};

module.exports = listCharacterAbilitiesService;
