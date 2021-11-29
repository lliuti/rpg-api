const prisma = require("../../../database/index");

const listMyCharactersService = async (player_id) => {
  try {
    const list = await prisma.character.findMany({
      where: {
        player_id,
      },
      orderBy: {
        createdAt: "asc",
      },
    });

    return list;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't list my characters");
  }
};

module.exports = listMyCharactersService;
