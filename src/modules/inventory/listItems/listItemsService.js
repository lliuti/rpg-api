const prisma = require("../../../database");

const listItemsService = async (character_id) => {
  try {
    const character = await prisma.character.findFirst({
      where: {
        id: character_id,
      },
    });

    if (!character) {
      throw new Error("Couldn't add item. Character not found");
    }

    const currentCapacity = await prisma.characterInventory.aggregate({
      _sum: {
        weight: true,
      },
    });

    const list = await prisma.characterInventory.findMany({
      where: {
        character_id,
      },
    });

    const responseObject = {
      max_weight: character.max_weight,
      current_weight: currentCapacity._sum.weight,
      list,
    };

    return responseObject;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't add item.");
  }
};

module.exports = listItemsService;
