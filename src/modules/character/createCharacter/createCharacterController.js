const createCharacterService = require("./createCharacterService");

const createCharacterController = async (req, res) => {
  const { name, occupation, age, archetype } = req.body;

  try {
    const character = await createCharacterService({
      name,
      occupation,
      age,
      archetype,
    });
    return res.status(201).json(character);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = createCharacterController;
