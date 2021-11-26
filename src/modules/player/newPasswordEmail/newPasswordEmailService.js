const prisma = require("../../../database/index");
const sendMail = require("../../../utils/sendMail");

const newPasswordEmailService = async (usernameOrEmail) => {
  console.log(`Attempt of sending reset email to ${usernameOrEmail}`);

  const player = await prisma.player.findFirst({
    where: {
      OR: [
        {
          username: usernameOrEmail,
        },
        {
          email: usernameOrEmail,
        },
      ],
    },
  });

  if (!player) {
    throw new Error("Couldn't find any player with this username/email");
  }

  const email_to = player.email;
  const email_subject = "Cadastrar uma nova senha - RPG";
  const email_text = `Se voce, ${player.name}, clicou no botão "Esqueci minha senha", voce pode alterá-la para uma nova senha através dessa página: ${process.env.CLIENT_URL}/#/players/${player.id}/new-password`;

  console.log(`${process.env.CLIENT_URL}/#/players/${player.id}/new-password`);

  await sendMail({ email_to, email_subject, email_text });
};

module.exports = newPasswordEmailService;
