const prisma = require("../../../database/index");

const deleteCharacterService = async (character_id) => {
  await prisma.character.deleteMany({
    where: {
      id: character_id,
    },
  });
};

module.exports = deleteCharacterService;
