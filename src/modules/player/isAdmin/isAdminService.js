const prisma = require("../../../database");

const isAdminService = async (player_id) => {
  try {
    const player = await prisma.player.findFirst({
      where: { id: player_id },
    });

    const isAdmin = player.admin;

    return isAdmin;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't verify if player is admin");
  }
};

module.exports = isAdminService;
