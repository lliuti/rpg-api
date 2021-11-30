const prisma = require("../../../database/index");

const updateCharacterNotesService = async ({
  background,
  annotations,
  character_id,
}) => {
  try {
    const note = await prisma.characterNotes.findFirst({
      where: {
        character_id,
      },
    });

    if (!note) {
      await prisma.characterNotes.create({
        data: {
          character_id,
          note_text: annotations,
          background_text: background,
        },
      });
    } else {
      await prisma.characterNotes.updateMany({
        where: {
          character_id: character_id,
        },
        data: {
          note_text: annotations,
          background_text: background,
        },
      });
    }
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't update character note");
  }
};

module.exports = updateCharacterNotesService;
