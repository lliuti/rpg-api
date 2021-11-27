const prisma = require("../../../database");

const listAllPlayersService = async () => {
  const list = await prisma.player.findMany({
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      password: false,
      admin: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return list;
};

module.exports = listAllPlayersService;
