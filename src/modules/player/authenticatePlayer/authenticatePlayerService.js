const prisma = require("../../../database/index");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticatePlayerService = async ({ username, password }) => {
  const player = await prisma.player.findFirst({
    where: {
      username: username,
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

  return token;
};

module.exports = authenticatePlayerService;
