const prisma = require("../../../database/index");

const deletePlayerService = async (player_id) => {
  try {
    await prisma.player.deleteMany({
      where: {
        id: player_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't delete player");
  }
};

module.exports = deletePlayerService;
