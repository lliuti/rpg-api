const prisma = require("../../../../database");

const updateCharacterAttributesService = async ({ character_id, data }) => {
  const characterSheet = await prisma.sheet.findFirst({
    where: {
      character_id,
    },
  });

  if (!characterSheet) {
    throw new Error("Couldn't find any character sheet");
  }

  await prisma.sheet.updateMany({
    where: {
      character_id: character_id,
    },
    data: data,
  });
  console.log(
    `${
      characterSheet.character_id
    } updated character attributes to: ${JSON.stringify(data)}`
  );
};

module.exports = updateCharacterAttributesService;
