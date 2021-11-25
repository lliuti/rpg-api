const prisma = require("../../../../database");

const updateCharacterSkillsService = async ({ character_id, data }) => {
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
    } updated character skills to: ${JSON.stringify(data)}`
  );
};

module.exports = updateCharacterSkillsService;
