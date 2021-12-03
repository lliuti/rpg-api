const prisma = require("../../../database");

const searchAssignableAbilitiesService = async (character_id) => {
  try {
    const assignableAbilities = await prisma.ability.findMany({
      where: {
        characters: {
          none: {
            character_id,
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    return assignableAbilities;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't search assignable abilities");
  }
};

module.exports = searchAssignableAbilitiesService;
