const prisma = require("../../../database");

const deleteAttackService = async (attack_id) => {
  try {
    await prisma.attack.deleteMany({
      where: {
        id: attack_id,
      },
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't delete attack");
  }
};

module.exports = deleteAttackService;
