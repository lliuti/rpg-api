const prisma = require("../../../database");

const removeAttackFromCharacterService = async ({
  character_id,
  attack_id,
}) => {
  try {
    await prisma.characterAttacks.deleteMany({
      where: {
        character_id,
        attack_id,
      },
    });
  } catch (err) {
    throw new Error("Couldn't remove attack from character");
  }
};

module.exports = removeAttackFromCharacterService;
