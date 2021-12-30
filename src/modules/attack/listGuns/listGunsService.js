const prisma = require("../../../database");

const listGunsService = async (character_id) => {
  try {
    const list = await prisma.characterAttacks.findMany({
      where: {
        attack: {
          type: "Arma de Fogo",
        },
        character_id,
      },
      select: {
        attack: {
          select: {
            name: true,
            ammo: true,
          },
        },
      },
    });

    return list;
  } catch (err) {
    throw new Error("Couldn't find character guns");
  }
};

module.exports = listGunsService;
