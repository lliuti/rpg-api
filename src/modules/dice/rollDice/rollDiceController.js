const rollDiceService = require("./rollDiceService");

const rollDiceController = async (req, res) => {
  const { character_id } = req.params;
  const { diceAmount, diceFaceAmount } = req.body;

  try {
    const rollResult = await rollDiceService({
      character_id,
      diceAmount,
      diceFaceAmount,
    });
    return res.status(200).json(rollResult);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }
};

module.exports = rollDiceController;
