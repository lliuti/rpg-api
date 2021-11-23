const createPlayerService = require("./createPlayerService");

const createPlayerController = async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    const player = await createPlayerService({
      name,
      username,
      email,
      password,
    });
    return res.status(201).json(player);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

module.exports = createPlayerController;
