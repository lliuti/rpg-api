const prisma = require("../../../database");

const deleteRitualService = async (ritual_id) => {
  try {
    await prisma.ritual.deleteMany({
      where: {
        id: ritual_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't delete ritual");
  }
};

module.exports = deleteRitualService;
