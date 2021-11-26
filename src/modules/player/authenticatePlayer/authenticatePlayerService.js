const prisma = require("../../../database/index");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticatePlayerService = async ({ username, password }) => {
  const usernameLowerCase = username.toLowerCase();
  console.log(`Attempt of login with username: ${username}`);

  const player = await prisma.player.findFirst({
    where: {
      username: usernameLowerCase,
    },
  });

  if (!player) {
    throw new Error("Incorrect email or password.");
  }

  const doesPasswordMatch = await bcryptjs.compare(password, player.password);

  if (!doesPasswordMatch) {
    throw new Error("Incorrect email or password.");
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
