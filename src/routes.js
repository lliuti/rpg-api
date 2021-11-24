const Router = require("express/lib/router");
const createPlayer = require("./modules/player/createPlayer/createPlayerController");
const authenticatePlayer = require("./modules/player/authenticatePlayer/authenticatePlayerController");
const createCharacter = require("./modules/character/createCharacter/createCharacterController");
const listMyCharacters = require("./modules/character/listMyCharacters/listMyCharactersController");
const listCharactersForDashboardController = require("./modules/character/listCharactersForDashboard/listCharactersForDashboardController");
const getCharacterSheet = require("./modules/character/getCharacterSheet/getCharacterSheetController");
const updateCharacterPicture = require("./modules/character/updateCharacterPicture/updateCharacterPictureController");
const updateCharacterLife = require("./modules/character/updateCharacterLife/updateCharacterLifeController");
const updateCharacterSanity = require("./modules/character/updateCharacterSanity/updateCharacterSanityController");
const updateCharacterEffort = require("./modules/character/updateCharacterEffort/updateCharacterEffortController");
const isAdmin = require("./modules/player/isAdmin/isAdminController");
const rollDice = require("./modules/dice/rollDice/rollDiceController");
const ensureAuthenticated = require("./middlewares/ensureAuthenticated");

const routes = Router();

// PLAYERS
// CREATE PLAYER
routes.post("/players", createPlayer);

// AUTHENTICATE PLAYER
routes.post("/login", authenticatePlayer);

routes.get("/players/:player_id/admin", isAdmin);

// -----------------

// CHARACTERS
// CREATE CHARACTER
routes.post("/characters", ensureAuthenticated, createCharacter);

// LIST MY CHARACTERS
routes.get("/characters", ensureAuthenticated, listMyCharacters);

// GET CHARACTER SHEET
routes.get("/characters/:character_id", ensureAuthenticated, getCharacterSheet);

// LIST CHARACTERS FOR DASHBOARD
routes.get(
  "/dashboard/characters",
  ensureAuthenticated,
  listCharactersForDashboardController
);

// UPDATE CHARACTER PICTURE URL
routes.patch(
  "/characters/:character_id/picture",
  ensureAuthenticated,
  updateCharacterPicture
);

// UPDATE CHARACTER LIFE
routes.put(
  "/characters/:character_id/life",
  ensureAuthenticated,
  updateCharacterLife
);

// UPDATE CHARACTER SANITY
routes.put(
  "/characters/:character_id/sanity",
  ensureAuthenticated,
  updateCharacterSanity
);

// UPDATE CHARACTER EFFORT
routes.put(
  "/characters/:character_id/effort",
  ensureAuthenticated,
  updateCharacterEffort
);

// -----------------

// DICES
// ROLL DICE
routes.post("/characters/:character_id/dice", ensureAuthenticated, rollDice);

module.exports = routes;
