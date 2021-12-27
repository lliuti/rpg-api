const prisma = require("../../../database");

const deleteAbilityService = async (ability_id) => {
  try {
    await prisma.ability.deleteMany({
      where: {
        id: ability_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't delete ability");
  }
};

module.exports = deleteAbilityService;
