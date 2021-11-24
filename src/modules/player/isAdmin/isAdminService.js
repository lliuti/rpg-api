const prisma = require("../../../database");

const isAdminService = async (player_id) => {
  const player = await prisma.player.findFirst({
    where: { id: player_id },
  });

  const isAdmin = player.admin;

  return isAdmin;
};

module.exports = isAdminService;
