const prisma = require("../../../database/index");

const listMyCharactersService = async (player_id) => {
  const list = await prisma.character.findMany({
    where: {
      player_id,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return list;
};

module.exports = listMyCharactersService;
