const prisma = require("../../../database/index");

const createAbilityService = async ({ name, description }) => {
  try {
    await prisma.ability.create({
      data: {
        name,
        description,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't create ability");
  }
};

module.exports = createAbilityService;
