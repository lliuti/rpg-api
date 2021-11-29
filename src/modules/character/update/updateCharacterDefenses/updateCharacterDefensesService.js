const prisma = require("../../../../database");

const updateCharacterDefensesService = async ({ character_id, data }) => {
  try {
    await prisma.sheet.updateMany({
      where: {
        character_id: character_id,
      },
      data: data,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't update character defenses");
  }
};

module.exports = updateCharacterDefensesService;
