const Router = require("express/lib/router");
const createPlayer = require("./modules/player/createPlayer/createPlayerController");
const authenticatePlayer = require("./modules/player/authenticatePlayer/authenticatePlayerController");

const routes = Router();

// PLAYERS
routes.post("/players", createPlayer);

// AUTHENTICATE PLAYER
routes.post("/login", authenticatePlayer);

module.exports = routes;
