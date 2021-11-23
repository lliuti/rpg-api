const authenticatePlayerService = require("./authenticatePlayerService");

const authenticatePlayerController = async (req, res) => {
  const { username, password } = req.body;

  try {
    const token = await authenticatePlayerService({ username, password });
    return res.status(201).json(token);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = authenticatePlayerController;
