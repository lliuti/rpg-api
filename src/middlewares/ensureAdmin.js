const { request } = require("express");
const prisma = require("../database/index");

const ensureAuthenticated = async (req, res, next) => {
  const { player_id } = req;
  try {
    const player = await prisma.player.findFirst({
      where: {
        id: player_id,
      },
    });

    if (!player) {
      return res.status(401).json({ error: "Couldn't find any player." });
    }

    if (player.admin !== true) {
      return res.status(401).json({ error: "Not enough permissions" });
    }

    return next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

module.exports = ensureAuthenticated;
