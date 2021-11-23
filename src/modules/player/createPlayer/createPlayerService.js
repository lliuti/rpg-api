const prisma = require("../../../database/index");
const bcryptjs = require("bcryptjs");

const createPlayerService = async ({ name, username, email, password }) => {
  const hashed_password = await bcryptjs.hash(password, 8);

  let player = await prisma.player.findFirst({
    where: {
      OR: [
        {
          email: email,
        },
        {
          username: username,
        },
      ],
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      createdAt: true,
    },
  });

  if (player) {
    return player;
  }

  player = await prisma.player.create({
    data: {
      name,
      username,
      email,
      password: hashed_password,
    },
    select: {
      id: true,
      name: true,
      username: true,
      email: true,
      createdAt: true,
    },
  });

  return player;
};

module.exports = createPlayerService;
