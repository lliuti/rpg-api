const prisma = require("../../../../database");

const updateCharacterInfoService = async ({ character_id, data }) => {
  const character = await prisma.character.findFirst({
    where: {
      id: character_id,
    },
  });

  if (!character) {
    throw new Error("Couldn't find any character");
  }

  await prisma.character.updateMany({
    where: {
      id: character_id,
    },
    data: data,
  });

  console.log(
    `${character.name} updated character info to: ${JSON.stringify(data)}`
  );
};

module.exports = updateCharacterInfoService;
