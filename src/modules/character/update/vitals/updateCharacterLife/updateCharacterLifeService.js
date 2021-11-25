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
    currLife,
    maxLife,
  };

  getSocketInstance.getSocketInstance().emit("vitalsChanged", {
    currLife,
    maxLife,
  });

  return responseObject;
};

module.exports = updateCharacterLifeService;
