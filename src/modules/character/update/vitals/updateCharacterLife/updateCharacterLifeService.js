const prisma = require("../../../../../database");
const getSocketInstance = require("../../../../../app");

const updateCharacterLifeService = async ({
  character_id,
  currLife,
  maxLife,
}) => {
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

  const previousCurrVital = sheet.curr_life;
  const previousMaxVital = sheet.max_life;
  const currVital = currLife;
  const maxVital = maxLife;

  await prisma.sheet.updateMany({
    where: {
      character_id: sheet.character_id,
    },
    data: {
      curr_life: currLife,
      max_life: maxLife,
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
    vital: "life",
    currVital,
    maxVital,
    previousCurrVital,
    previousMaxVital,
  });

  return responseObject;
};

module.exports = updateCharacterLifeService;
