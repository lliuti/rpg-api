const prisma = require("../../../database");

const editAbilityService = async ({ ability_id, data }) => {
  try {
    await prisma.ability.updateMany({
      where: {
        id: ability_id,
      },
      data: data,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't edit ability");
  }
};

module.exports = editAbilityService;
