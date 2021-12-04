const Router = require("express/lib/router");

const createPlayer = require("./modules/player/createPlayer/createPlayerController");
const updatePlayer = require("./modules/player/updatePlayer/updatePlayerController");
const listAllPlayers = require("./modules/player/listAllPlayers/listAllPlayersController");
const deletePlayer = require("./modules/player/deletePlayer/deletePlayerController");
const authenticatePlayer = require("./modules/player/authenticatePlayer/authenticatePlayerController");
const isAdmin = require("./modules/player/isAdmin/isAdminController");
const newPasswordEmail = require("./modules/player/newPasswordEmail/newPasswordEmailController");
const updatePassword = require("./modules/player/updatePassword/updatePasswordController");

const createCharacter = require("./modules/character/createCharacter/createCharacterController");
const deleteCharacter = require("./modules/character/deleteCharacter/deleteCharacterController");
const listMyCharacters = require("./modules/character/listMyCharacters/listMyCharactersController");
const listCharactersForDashboardController = require("./modules/character/listCharactersForDashboard/listCharactersForDashboardController");

const getCharacterSheet = require("./modules/character/getCharacterSheet/getCharacterSheetController");
const updateCharacterPicture = require("./modules/character/update/updateCharacterPicture/updateCharacterPictureController");
const updateCharacterLife = require("./modules/character/update/vitals/updateCharacterLife/updateCharacterLifeController");
const updateCharacterSanity = require("./modules/character/update/vitals/updateCharacterSanity/updateCharacterSanityController");
const updateCharacterEffort = require("./modules/character/update/vitals/updateCharacterEffort/updateCharacterEffortController");
const updateCharacterInfo = require("./modules/character/update/updateCharacterInfo/updateCharacterInfoController");
const updateCharacterAttributes = require("./modules/character/update/updateCharacterAttributes/updateCharacterAttributesController");
const updateCharacterSkills = require("./modules/character/update/updateCharacterSkills/updateCharacterSkillsController");
const updateCharacterDefenses = require("./modules/character/update/updateCharacterDefenses/updateCharacterDefensesController");

const listCharacterAttacks = require("./modules/attack/listCharacterAttacks/listCharacterAttacksController");
const assignAttackToCharacter = require("./modules/attack/assignAttackToCharacter/assignAttackToCharacterController");
const createAttack = require("./modules/attack/createAttack/createAttackController");
const editAttack = require("./modules/attack/editAttack/editAttackController");
const deleteAttack = require("./modules/attack/deleteAttack/deleteAttackController");
const listAttacks = require("./modules/attack/listAttacks/listAttacksController");
const searchAssignableAttacks = require("./modules/attack/searchAssignableAttacks/searchAssignableAttacksController");
const removeAttackFromCharacter = require("./modules/attack/removeAttackFromCharacter/removeAttackFromCharacterController");

const listCharacterRituals = require("./modules/ritual/listCharacterRituals/listCharacterRitualsController");
const assignRitualToCharacter = require("./modules/ritual/assignRitualToCharacter/assignRitualToCharacterController");
const createRitual = require("./modules/ritual/createRitual/createRitualController");
const deleteRitual = require("./modules/ritual/deleteRitual/deleteRitualController");
const listRituals = require("./modules/ritual/listRituals/listRitualsController");
const searchAssignableRituals = require("./modules/ritual/searchAssignableRituals/searchAssignableRitualsController");
const removeRitualFromCharacter = require("./modules/ritual/removeRitualFromCharacter/removeRitualFromCharacterController");

const createAbility = require("./modules/ability/createAbility/createAbilityController");
const listAbilities = require("./modules/ability/listAbilities/listAbilitiesController");
const assignAbility = require("./modules/ability/assignAbility/assignAbilityController");
const listCharacterAbilities = require("./modules/ability/listCharacterAbilities/listCharacterAbilitiesController");
const searchAssignableAbilities = require("./modules/ability/searchAssignableAbilities/searchAssignableAbilitiesController");
const removeAbilityFromCharacter = require("./modules/ability/removeAbilityFromCharacter/removeAbilityFromCharacterController");

const rollDice = require("./modules/dice/rollDice/rollDiceController");
const listAllCharacterRollsController = require("./modules/dice/listAllCharacterRolls/listAllCharacterRollsController");
const listCriticalsByCharacter = require("./modules/dice/listCriticalsByCharacter/listCriticalsByCharacterController");

const updateCharacterNotes = require("./modules/notes/updateCharacterNotes/updateCharacterNotesController");
const getCharacterNotes = require("./modules/notes/getCharacterNotes/getCharacterNotesController");

const ensureAuthenticated = require("./middlewares/ensureAuthenticated");
const ensureAdmin = require("./middlewares/ensureAdmin");

const routes = Router();

// PLAYERS
// CREATE PLAYER
routes.post("/players", createPlayer);

// AUTHENTICATE PLAYER
routes.post("/login", authenticatePlayer);

// GET IF PLAYER IS ADMIN
routes.get("/players/:player_id/admin", isAdmin);

// SEND PASSWORD RESET EMAIL
routes.post("/players/new-password-send-email", newPasswordEmail);

// UPDATE PASSWORD
routes.post("/players/:player_id/update-password", updatePassword);

// LIST ALL PLAYERS
routes.get("/players", ensureAuthenticated, ensureAdmin, listAllPlayers);

// DELETE PLAYER
routes.delete(
  "/players/:player_id",
  ensureAuthenticated,
  ensureAdmin,
  deletePlayer
);

// UPDATE PLAYER
routes.put(
  "/players/:player_id",
  ensureAuthenticated,
  ensureAdmin,
  updatePlayer
);

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
  ensureAdmin,
  listCharactersForDashboardController
);

// DELETE CHARACTERS
routes.delete(
  "/characters/:character_id",
  ensureAuthenticated,
  ensureAdmin,
  deleteCharacter
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

// LIST CHARACTER ATTACKS
routes.get(
  "/characters/:character_id/attacks",
  ensureAuthenticated,
  listCharacterAttacks
);

// LIST CHARACTER RITUALS
routes.get(
  "/characters/:character_id/rituals",
  ensureAuthenticated,
  listCharacterRituals
);

// ASSIGN ATTACK TO CHARACTER
routes.post(
  "/characters/:character_id/attacks/:attack_id",
  ensureAuthenticated,
  ensureAdmin,
  assignAttackToCharacter
);

// REMOVE ATTACK FROM CHARACTER
routes.delete(
  "/characters/:character_id/attacks/:attack_id",
  ensureAuthenticated,
  ensureAdmin,
  removeAttackFromCharacter
);

// ASSIGN RITUAL TO CHARACTER
routes.post(
  "/characters/:character_id/rituals/:ritual_id",
  ensureAuthenticated,
  ensureAdmin,
  assignRitualToCharacter
);

// REMOVE RITUAL FROM CHARACTER
routes.delete(
  "/characters/:character_id/rituals/:ritual_id",
  ensureAuthenticated,
  ensureAdmin,
  removeRitualFromCharacter
);

// SEARCH ASSIGNABLE RITUALS
routes.get(
  "/characters/:character_id/rituals/assignable",
  ensureAuthenticated,
  ensureAdmin,
  searchAssignableRituals
);

// SEARCH ASSIGNABLE ATTACKS
routes.get(
  "/characters/:character_id/attacks/assignable",
  ensureAuthenticated,
  ensureAdmin,
  searchAssignableAttacks
);

// SEARCH ASSIGNABLE ABILITIES
routes.get(
  "/characters/:character_id/abilities/assignable",
  ensureAuthenticated,
  ensureAdmin,
  searchAssignableAbilities
);

// UPDATE CHARACTER INFO
routes.put(
  "/characters/:character_id/info",
  ensureAuthenticated,
  updateCharacterInfo
);

// UPDATE CHARACTER ATTRIBUTES
routes.put(
  "/characters/:character_id/attributes",
  ensureAuthenticated,
  updateCharacterAttributes
);

// UPDATE CHARACTER SKILLS
routes.put(
  "/characters/:character_id/skills",
  ensureAuthenticated,
  updateCharacterSkills
);

// UPDATE CHARACTER DEFENSES
routes.put(
  "/characters/:character_id/defenses",
  ensureAuthenticated,
  updateCharacterDefenses
);

// -----------------

// DICES
// ROLL DICE
routes.post("/characters/:character_id/dice", ensureAuthenticated, rollDice);

routes.get(
  "/characters/:character_id/rolls/critical",
  ensureAuthenticated,
  listCriticalsByCharacter
);

routes.get(
  "/characters/:character_id/rolls",
  ensureAuthenticated,
  listAllCharacterRollsController
);

// -----------------

// ATTACKS
// CREATE A NEW ATTACK
routes.post("/attacks", ensureAuthenticated, ensureAdmin, createAttack);

// LIST ALL ATTACKS
routes.get("/attacks", ensureAuthenticated, listAttacks);

// UPDATE ATTACK
routes.put("/attacks/:attack_id", ensureAuthenticated, ensureAdmin, editAttack);

// DELETE ATTACK
routes.delete(
  "/attacks/:attack_id",
  ensureAuthenticated,
  ensureAdmin,
  deleteAttack
);

// -----------------

// RITUALS
// CREATE A NEW RITUAL
routes.post("/rituals", ensureAuthenticated, ensureAdmin, createRitual);

// LIST ALL RITUALS
routes.get("/rituals", ensureAuthenticated, listRituals);

// DELETE RITUAL
routes.delete(
  "/rituals/:ritual_id",
  ensureAuthenticated,
  ensureAdmin,
  deleteRitual
);

// -----------------

// NOTES

// CREATE / UPDATE NOTE
routes.put(
  "/characters/:character_id/notes",
  ensureAuthenticated,
  updateCharacterNotes
);

routes.get(
  "/characters/:character_id/notes",
  ensureAuthenticated,
  getCharacterNotes
);

// -----------------

// ABILITIES

// CREATE ABILITY
routes.post("/abilities", ensureAuthenticated, ensureAdmin, createAbility);

// LIST ABILITIES
routes.get("/abilities", ensureAuthenticated, ensureAdmin, listAbilities);

// LIST CHARACTER ABILITIES
routes.get(
  "/characters/:character_id/abilities",
  ensureAuthenticated,
  ensureAdmin,
  listCharacterAbilities
);

// ASSIGN ABILITY TO CHARACTER
routes.post(
  "/characters/:character_id/abilities/:ability_id",
  ensureAuthenticated,
  ensureAdmin,
  assignAbility
);

// REMOVE ABILITY FROM CHARACTER
routes.delete(
  "/characters/:character_id/abilities/:ability_id",
  ensureAuthenticated,
  ensureAdmin,
  removeAbilityFromCharacter
);

module.exports = routes;
