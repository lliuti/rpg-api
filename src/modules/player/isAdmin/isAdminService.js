const prisma = require("../../../database");

const isAdminService = async (player_id) => {
  try {
    const player = await prisma.player.findFirst({
      where: { id: player_id },
    });

    if (!player) {
      throw new Error("Player not found!");
    }

    const isAdmin = player.admin;

    return isAdmin;
  } catch (err) {
    throw new Error("Couldn't verify if player is admin");
  }
};

module.exports = isAdminService;
