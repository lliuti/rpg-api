const prisma = require("../../../../database");

const updateCharacterPictureService = async ({ character_id, picture_url }) => {
  await prisma.character.updateMany({
    where: {
      id: character_id,
    },
    data: {
      picture_url: picture_url,
    },
  });
};

module.exports = updateCharacterPictureService;
