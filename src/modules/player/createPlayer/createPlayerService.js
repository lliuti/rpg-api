const prisma = require("../../../database/index");
const bcryptjs = require("bcryptjs");

const createPlayerService = async ({ name, username, email, password }) => {
  const hashed_password = await bcryptjs.hash(password, 8);
  const lowerUsername = username.toLowerCase();
  const lowerEmail = email.toLowerCase();

  let player = await prisma.player.findFirst({
    where: {
      OR: [
        {
          email: lowerEmail,
        },
        {
          username: lowerUsername,
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
    console.log(
      `There is already a player with the username: ${lowerUsername} or email: ${lowerEmail}`
    );
    throw new Error("There is already a player with this email/username");
  }

  player = await prisma.player.create({
    data: {
      name,
      username: lowerUsername,
      email: lowerEmail,
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
