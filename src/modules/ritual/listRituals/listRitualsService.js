const prisma = require("../../../database");

const listRitualsService = async () => {
  const rituals = await prisma.ritual.findMany();

  return rituals;
};

module.exports = listRitualsService;
