const prisma = require("../../../database");

const listAbilitiesService = async () => {
  try {
    const abilities = await prisma.ability.findMany();
    return abilities;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't list abilities");
  }
};

module.exports = listAbilitiesService;
