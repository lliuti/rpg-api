const prisma = require("../../../../database");

const shootService = async ({ character_id, attack_id }) => {
  try {
    const characterAttack = await prisma.characterAttacks.findFirst({
      where: {
        character_id,
        attack_id,
      },
    });

    const attack = await prisma.attack.findFirst({
      where: {
        id: attack_id,
      },
    });

    currentShots = characterAttack.curr_shots + 1;

    console.log(currentShots, attack.ammo);

    if (currentShots > attack.ammo) {
      throw new Error("Couldn't shoot. Out of ammo.");
    }

    await prisma.characterAttacks.updateMany({
      where: {
        character_id,
        attack_id,
      },
      data: {
        curr_shots: currentShots,
      },
    });

    return currentShots;
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't shoot");
  }
};

module.exports = shootService;
