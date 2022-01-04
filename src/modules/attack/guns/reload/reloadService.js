const prisma = require("../../../../database");

const reloadService = async ({ character_id, attack_id }) => {
  try {
    await prisma.characterAttacks.updateMany({
      where: {
        character_id,
        attack_id,
      },
      data: {
        curr_shots: 0,
      },
    });

    return 0;
  } catch (err) {
    throw new Error("Couldn't reload gun");
  }
};

module.exports = reloadService;
