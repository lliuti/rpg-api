const prisma = require("../../../../../database");
const getSocketInstance = require("../../../../../app");

const updateCharacterEffortService = async ({
  character_id,
  currEff,
  maxEff,
}) => {
  try {
    const sheet = await prisma.sheet.findFirst({
      where: {
        character_id,
      },
    });

    if (!sheet) {
      throw new Error("Couldn't find any character sheet.");
    }

    const character = await prisma.character.findFirst({
      where: {
        id: sheet.character_id,
      },
    });

    const previousCurrVital = sheet.curr_eff;
    const previousMaxVital = sheet.max_eff;
    const currVital = currEff;
    const maxVital = maxEff;

    await prisma.sheet.updateMany({
      where: {
        character_id: sheet.character_id,
      },
      data: {
        curr_eff: currEff,
        max_eff: maxEff,
      },
    });

    const responseObject = {
      currVital,
      maxVital,
      previousCurrVital,
      previousMaxVital,
    };

    getSocketInstance.getSocketInstance().emit("vitalsChanged", {
      character: character.name,
      vital: "effort",
      currVital,
      maxVital,
      previousCurrVital,
      previousMaxVital,
    });

    return responseObject;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't update character effort");
  }
};

module.exports = updateCharacterEffortService;
