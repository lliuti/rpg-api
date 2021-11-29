const prisma = require("../../../database/index");

const deleteCharacterService = async (character_id) => {
  try {
    await prisma.character.deleteMany({
      where: {
        id: character_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't delete character");
  }
};

module.exports = deleteCharacterService;
