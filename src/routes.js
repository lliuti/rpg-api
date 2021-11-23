const Router = require("express/lib/router");
const createPlayer = require("./modules/player/createPlayer/createPlayerController");
const authenticatePlayer = require("./modules/player/authenticatePlayer/authenticatePlayerController");
const createCharacter = require("./modules/character/createCharacter/createCharacterController");
const listMyCharacters = require("./modules/character/listMyCharacters/listMyCharactersController");
const getCharacterSheet = require("./modules/character/getCharacterSheet/getCharacterSheetController");
const ensureAuthenticated = require("./middlewares/ensureAuthenticated");

const routes = Router();

// PLAYERS
// CREATE PLAYER
routes.post("/players", createPlayer);

// AUTHENTICATE PLAYER
routes.post("/login", authenticatePlayer);

// -----------------

// CHARACTERS
// CREATE CHARACTER
routes.post("/characters", ensureAuthenticated, createCharacter);

// LIST MY CHARACTERS
routes.get("/characters", ensureAuthenticated, listMyCharacters);

// GET CHARACTER SHEET
routes.get("/characters/:character_id", ensureAuthenticated, getCharacterSheet);

module.exports = routes;
