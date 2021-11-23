const createCharacterService = require("./createCharacterService");

const createCharacterController = async (req, res) => {
  const { name, occupation, age, archetype } = req.body;
  const { player_id } = req;

  try {
    const character = await createCharacterService({
      name,
      occupation,
      age,
      archetype,
      player_id,
    });
    return res.status(201).json(character);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = createCharacterController;
