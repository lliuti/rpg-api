const prisma = require("../../../database/index");

const getCharacterNotesService = async (character_id) => {
  try {
    const notes = await prisma.characterNotes.findMany({
      where: {
        character_id,
      },
    });

    return notes;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't list character notes");
  }
};

module.exports = getCharacterNotesService;
