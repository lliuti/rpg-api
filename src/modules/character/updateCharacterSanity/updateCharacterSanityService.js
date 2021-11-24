const prisma = require("../../../database");

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
    currSan,
    maxSan,
  };

  return responseObject;
};

module.exports = updateCharacterSanityService;
