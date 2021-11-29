const prisma = require("../../../database");

const listRitualsService = async () => {
  try {
    const rituals = await prisma.ritual.findMany();

    return rituals;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't list all rituals");
  }
};

module.exports = listRitualsService;
