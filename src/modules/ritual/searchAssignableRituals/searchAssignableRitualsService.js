const prisma = require("../../../database");

const searchAssignableRitualsService = async (character_id) => {
  try {
    const assignableRituals = await prisma.ritual.findMany({
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

    return assignableRituals;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't search assignable rituals");
  }
};

module.exports = searchAssignableRitualsService;
