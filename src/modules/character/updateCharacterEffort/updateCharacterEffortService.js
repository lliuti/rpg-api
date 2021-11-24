const prisma = require("../../../database");

const updateCharacterEffortService = async ({
  character_id,
  currEff,
  maxEff,
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
      curr_eff: currEff,
      max_eff: maxEff,
    },
  });

  const responseObject = {
    currEff,
    maxEff,
  };

  return responseObject;
};

module.exports = updateCharacterEffortService;
