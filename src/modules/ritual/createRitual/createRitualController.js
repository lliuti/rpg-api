const createRitualService = require("./createRitualService");

const createRitualController = async (req, res) => {
  const {
    name,
    description,
    element,
    circle,
    cost,
    range,
    execTime,
    area,
    duration,
  } = req.body;

  try {
    const ritual = await createRitualService({
      name,
      description,
      element,
      circle,
      cost,
      range,
      execTime,
      area,
      duration,
    });
    return res.status(201).json(ritual);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = createRitualController;
