const prisma = require("../../../../../database");
const getSocketInstance = require("../../../../../app");

const updateCharacterSanityService = async ({
  character_id,
  currSan,
  maxSan,
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

  const previousCurrVital = sheet.curr_san;
  const previousMaxVital = sheet.max_san;
  const currVital = currSan;
  const maxVital = maxSan;

  await prisma.sheet.updateMany({
    where: {
      character_id: sheet.character_id,
    },
    data: {
      curr_san: currSan,
      max_san: maxSan,
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
    vital: "sanity",
    currVital,
    maxVital,
    previousCurrVital,
    previousMaxVital,
  });

  return responseObject;
};

module.exports = updateCharacterSanityService;
