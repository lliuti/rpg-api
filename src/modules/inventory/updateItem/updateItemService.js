const prisma = require("../../../database");

const updateItemService = async ({ item_id, data }) => {
  try {
    await prisma.characterInventory.updateMany({
      where: {
        id: item_id,
      },
      data: data,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't update item");
  }
};

module.exports = updateItemService;
