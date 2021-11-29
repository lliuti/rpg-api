const prisma = require("../../../database");

const searchAssignableAttacksService = async (character_id) => {
  try {
    const assignableAttacks = await prisma.attack.findMany({
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

    return assignableAttacks;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't search assignable attacks");
  }
};

module.exports = searchAssignableAttacksService;
