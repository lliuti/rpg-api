const authenticatePlayerService = require("./authenticatePlayerService");

const authenticatePlayerController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authenticatePlayerService({ username, password });
    console.log(token);
    res.status(201).json(token);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = authenticatePlayerController;
