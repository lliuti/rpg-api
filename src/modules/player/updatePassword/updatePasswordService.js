const bcryptjs = require("bcryptjs");
const prisma = require("../../../database/index");

const updatePasswordService = async ({ newPassword, player_id }) => {
  const newHashedPassword = await bcryptjs.hash(newPassword, 8);

  const player = await prisma.player.findFirst({
    where: {
      id: player_id,
    },
  });

  if (!player) {
    throw new Error("Couldn't find any player");
  }

  await prisma.player.updateMany({
    where: {
      id: player.id,
    },
    data: {
      password: newHashedPassword,
    },
  });
};

module.exports = updatePasswordService;
