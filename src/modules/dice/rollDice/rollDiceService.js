const prisma = require("../../../database");
const getSocketInstance = require("../../../app");

const rollDiceService = async ({
  character_id,
  diceAmount,
  diceFaceAmount,
}) => {
  const character = await prisma.character.findFirst({
    where: {
      id: character_id,
    },
  });

  const diceFaces = diceFaceAmount.replace("D", "");
  let diceTotalResult = 0;
  const diceRolls = [];

  for (i = 0; i < diceAmount; i++) {
    const diceResult = Math.floor(Math.random() * diceFaces) + 1;
    diceTotalResult += diceResult;
    diceRolls.push(diceResult);
  }

  console.log(`\n${character.name} rolled ${diceAmount} d${diceFaces}`);
  console.log(`[DICES] ${diceRolls} \n[SUM] ${diceTotalResult}\n`);

  const responseObject = {
    diceRolls: diceRolls,
    diceResult: diceTotalResult,
  };

  getSocketInstance.getSocketInstance().emit("diceRoll", {
    character: character.name,
    dices: diceAmount,
    faces: diceFaces,
    rolls: diceRolls,
    totalResult: diceTotalResult,
  });

  return responseObject;
};

module.exports = rollDiceService;
