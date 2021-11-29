const prisma = require("../../../database");
const getSocketInstance = require("../../../app");

const rollDiceService = async ({
  character_id,
  diceAmount,
  diceFaceAmount,
}) => {
  try {
    const character = await prisma.character.findFirst({
      where: {
        id: character_id,
      },
    });

    const diceFaces = diceFaceAmount.replace("D", "");
    const diceRolls = [];
    let diceTotalResult = 0;
    let diceGreater = 0;

    for (i = 0; i < diceAmount; i++) {
      const diceResult = Math.floor(Math.random() * diceFaces) + 1;
      if (diceGreater < diceResult) {
        diceGreater = diceResult;
      }
      diceTotalResult += diceResult;
      diceRolls.push(diceResult);

      await prisma.diceRolls.create({
        data: {
          character_id: character_id,
          dice_face: diceFaces,
          dice_result: diceResult.toString(),
        },
      });
    }

    console.log(`\n${character.name} rolled ${diceAmount} d${diceFaces}`);
    console.log(`[DICES] ${diceRolls} \n[SUM] ${diceTotalResult}\n`);

    const responseObject = {
      diceRolls: diceRolls,
      diceResult: diceTotalResult,
      diceGreater: diceGreater,
    };

    getSocketInstance.getSocketInstance().emit("diceRoll", {
      character: character.name,
      dices: diceAmount,
      faces: diceFaces,
      rolls: diceRolls,
      totalResult: diceTotalResult,
      greater: diceGreater,
    });

    return responseObject;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't roll dice");
  }
};

module.exports = rollDiceService;
