const prisma = require("../../../database");

const listAttacksService = async () => {
  try {
    const attacks = await prisma.attack.findMany();
    return attacks;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't list attacks");
  }
};

module.exports = listAttacksService;
