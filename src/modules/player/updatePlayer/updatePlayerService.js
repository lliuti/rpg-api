const prisma = require("../../../database");

const updatePlayerService = async ({ player_id, data }) => {
  try {
    await prisma.player.updateMany({
      where: {
        id: player_id,
      },
      data: data,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't update player");
  }
};

module.exports = updatePlayerService;
