const prisma = require("../../../database");

const removeRitualFromCharacterService = async ({
  character_id,
  ritual_id,
}) => {
  try {
    await prisma.characterRituals.deleteMany({
      where: {
        character_id,
        ritual_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't remove ritual from character");
  }
};

module.exports = removeRitualFromCharacterService;
