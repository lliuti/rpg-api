const prisma = require("../../../database");

const listAllPlayersService = async () => {
  try {
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
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't list all players");
  }
};

module.exports = listAllPlayersService;
