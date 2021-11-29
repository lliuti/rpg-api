const prisma = require("../../../../database");

const updateCharacterInfoService = async ({ character_id, data }) => {
  try {
    await prisma.character.updateMany({
      where: {
        id: character_id,
      },
      data: data,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't update character info");
  }
};

module.exports = updateCharacterInfoService;
