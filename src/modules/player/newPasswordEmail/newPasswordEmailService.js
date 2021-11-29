const prisma = require("../../../database/index");
const sendMail = require("../../../utils/sendMail");

const newPasswordEmailService = async (usernameOrEmail) => {
  try {
    console.log(`Attempt of sending reset email to ${usernameOrEmail}`);
    const lowerUsernameOrEmail = usernameOrEmail.toLowerCase();

    const player = await prisma.player.findFirst({
      where: {
        OR: [
          {
            username: lowerUsernameOrEmail,
          },
          {
            email: lowerUsernameOrEmail,
          },
        ],
      },
    });

    if (!player) {
      throw new Error(
        `Couldn't find any player with this username/email: ${usernameOrEmail}`
      );
    }

    const email_to = player.email;
    const email_subject = "Cadastrar uma nova senha - RPG";
    const email_text = `Se voce, ${player.name}, clicou no botão "Esqueci minha senha", voce pode alterá-la para uma nova senha através dessa página: ${process.env.CLIENT_URL}/#/players/${player.id}/new-password`;

    console.log(
      `${process.env.CLIENT_URL}/#/players/${player.id}/new-password`
    );

    await sendMail({ email_to, email_subject, email_text });
  } catch (err) {
    console.log(err);
    throw new Error("Couldn't send new password email");
  }
};

module.exports = newPasswordEmailService;
