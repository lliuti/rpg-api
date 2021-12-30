const prisma = require("../../../database");

const addItemService = async ({ character_id, item, weight }) => {
  try {
    if (weight < 0) {
      throw new Error("Couldn't add item. Invalid weight");
    }

    const character = await prisma.character.findFirst({
      where: {
        id: character_id,
      },
    });

    if (!character) {
      throw new Error("Couldn't add item. Character not found");
    }

    const currentCapacityStr = await prisma.characterInventory.aggregate({
      _sum: {
        weight: true,
      },
    });

    const currentCapacity = parseFloat(currentCapacityStr._sum.weight);

    if (currentCapacity + weight > character.max_weight) {
      throw new Error("Couldn't add item. Maximum capacity reached");
    }

    await prisma.characterInventory.create({
      data: {
        item,
        weight,
        character_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't add item.");
  }
};

module.exports = addItemService;
