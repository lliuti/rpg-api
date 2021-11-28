const prisma = require("../../../database/index");

const listCharactersForDashboardService = async () => {
  const list = await prisma.character.findMany({
    orderBy: {
      createdAt: "asc",
    },
    select: {
      id: true,
      name: true,
      archetype: true,
      picture_url: true,
      exp: true,
      sheet: {
        select: {
          curr_life: true,
          max_life: true,
          curr_san: true,
          max_san: true,
          curr_eff: true,
          max_eff: true,
          defesa_def: true,
        },
      },
    },
  });

  return list;
};

module.exports = listCharactersForDashboardService;
