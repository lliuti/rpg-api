const prisma = require("../../../database");

const editAttackService = async ({ attack_id, data }) => {
  try {
    await prisma.attack.updateMany({
      where: {
        id: attack_id,
      },
      data: data,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't edit attack");
  }
};

module.exports = editAttackService;
