const prisma = require("../../../../database");

const updateCharacterPictureService = async ({ character_id, picture_url }) => {
  try {
    await prisma.character.updateMany({
      where: {
        id: character_id,
      },
      data: {
        picture_url: picture_url,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't update character picture");
  }
};

module.exports = updateCharacterPictureService;
