const prisma = require("../../../database");

const listAttacksService = async () => {
  const attacks = await prisma.attack.findMany();

  return attacks;
};

module.exports = listAttacksService;
