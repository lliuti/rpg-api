const prisma = require("../../../database");

const updateRitualService = async ({ ritual_id, data }) => {
  try {
    await prisma.ritual.updateMany({
      where: {
        id: ritual_id,
      },
      data: data,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't edit ritual");
  }
};

module.exports = updateRitualService;
