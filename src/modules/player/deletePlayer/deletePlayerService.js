const prisma = require("../../../database/index");

const deletePlayerService = async (player_id) => {
  await prisma.player.deleteMany({
    where: {
      id: player_id,
    },
  });
};

module.exports = deletePlayerService;
