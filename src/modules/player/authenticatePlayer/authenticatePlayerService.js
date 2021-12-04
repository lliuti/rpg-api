const prisma = require("../../../database/index");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const authenticatePlayerService = async ({ username, password }) => {
  try {
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
      console.log("Player not found with this username/email.");
      throw new Error("Player not found with this username/email.");
    }

    const doesPasswordMatch = await bcryptjs.compare(password, player.password);

    if (!doesPasswordMatch) {
      console.log("Incorrect password.");
      throw new Error("Incorrect password.");
    }

    const token = jwt.sign({}, process.env.JWT_SECRET, {
      expiresIn: "7d",
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
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't authenticate player");
  }
};

module.exports = authenticatePlayerService;
