const { request } = require("express");
const jwt = require("jsonwebtoken");
const prisma = require("../database/index");

const ensureAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Missing token." });
  }

  const token = authorization.split(" ")[1];

  try {
    const { sub } = jwt.verify(token, process.env.JWT_SECRET);

    const player = await prisma.player.findFirst({
      where: {
        id: sub,
      },
    });

    if (!player) {
      return res.status(401).json({ error: "Couldn't find any player." });
    }

    request.player_id = sub;
    return next();
  } catch (err) {
    return res.status(401).json({ error: err.message });
  }
};

module.exports = ensureAuthenticated;
