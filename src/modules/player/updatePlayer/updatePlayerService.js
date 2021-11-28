const prisma = require("../../../database");

const updatePlayerService = async ({ player_id, data }) => {
  await prisma.player.updateMany({
    where: {
      id: player_id,
    },
    data: data,
  });
};

module.exports = updatePlayerService;
