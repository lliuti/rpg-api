const prisma = require("../../../database/index");

const createRitualService = async ({
  name,
  description,
  element,
  circle,
  cost,
  range,
  execTime,
  area,
  duration,
}) => {
  const ritual = await prisma.ritual.create({
    data: {
      name,
      description,
      element,
      circle,
      cost,
      range,
      execTime,
      area,
      duration,
    },
  });

  return ritual;
};

module.exports = createRitualService;
