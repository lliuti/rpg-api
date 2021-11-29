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
  try {
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
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't create ritual");
  }
};

module.exports = createRitualService;
