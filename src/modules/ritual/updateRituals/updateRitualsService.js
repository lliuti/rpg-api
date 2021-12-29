const prisma = require("../../../database");

const updateRitualsService = async ({ data }) => {
  try {
    await prisma.ritual.updateMany({
      data: data,
    });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't edit ritual");
  }
};

module.exports = updateRitualsService;
