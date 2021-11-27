const prisma = require("../../../database/index");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticatePlayerService = async ({ username, password }) => {
  const usernameLowerCase = username.toLowerCase();
  console.log(`Attempt of login with username or email: ${username}`);

  const player = await prisma.player.findFirst({
    where: {
      OR: [
        {
          username: usernameLowerCase,
        },
        {
          email: usernameLowerCase,
        },
      ],
    },
  });

  if (!player) {
    throw new Error("Player not found with this username/email.");
  }

  const doesPasswordMatch = await bcryptjs.compare(password, player.password);

  if (!doesPasswordMatch) {
    throw new Error("Incorrect password.");
  }

  const token = jwt.sign({}, process.env.JWT_SECRET, {
    expiresIn: "1d",
    subject: player.id,
  });

  return {
    token,
    player: {
      id: player.id,
      username: player.username,
      email: player.email,
    },
  };
};

module.exports = authenticatePlayerService;
