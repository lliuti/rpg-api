const prisma = require("../../../database");

const removeItemService = async ({ character_id, item_id }) => {
  try {
    await prisma.characterInventory.deleteMany({
      where: {
        id: item_id,
        character_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't add item.");
  }
};

module.exports = removeItemService;
