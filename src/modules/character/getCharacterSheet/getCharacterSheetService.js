const prisma = require("../../../database");

const getCharacterSheetService = async (character_id) => {
  const character = await prisma.character.findFirst({
    where: {
      id: character_id,
    },
  });

  if (!character) {
    throw new Error("Couldn't find any character!");
  }

  const sheet = await prisma.sheet.findFirst({
    where: {
      character_id: character.id,
    },
  });

  if (!sheet) {
    throw new Error("Couldn't find any sheet!");
  }

  const characterSheet = {
    // details
    name: character.name,
    age: character.age,
    occupation: character.occupation,
    archetype: character.archetype,
    picture_url: character.picture_url,
    exp: character.exp,
    // vitals
    max_life: sheet.max_life,
    curr_life: sheet.curr_life,
    max_san: sheet.max_san,
    curr_san: sheet.curr_san,
    max_eff: sheet.max_eff,
    curr_eff: sheet.curr_eff,
    // attributes
    forca: sheet.for_attr,
    intelecto: sheet.int_attr,
    presenca: sheet.pre_attr,
    agilidade: sheet.agi_attr,
    vigor: sheet.vig_attr,
    // skills
    atletismo: sheet.atletismo_skill,
    atualidades: sheet.atualidades_skill,
    ciencia: sheet.ciencia_skill,
    diplomacia: sheet.diplomacia_skill,
    enganacao: sheet.enganacao_skill,
    fortitude: sheet.fortitude_skill,
    furtividade: sheet.furtividade_skill,
    intimidacao: sheet.intimidacao_skill,
    investigacao: sheet.investigacao_skill,
    luta: sheet.luta_skill,
    medicina: sheet.medicina_skill,
    ocultismo: sheet.ocultismo_skill,
    percepcao: sheet.percepcao_skill,
    pilotagem: sheet.pilotagem_skill,
    pontaria: sheet.pontaria_skill,
    prestidigitacao: sheet.prestidigitacao_skill,
    profissao: sheet.profissao_skill,
    reflexos: sheet.reflexos_skill,
    religiao: sheet.religiao_skill,
    tatica: sheet.tatica_skill,
    tecnologia: sheet.tecnologia_skill,
    vontade: sheet.vontade_skill,
    // defesas
    defesa: sheet.defesa_def,
    fisico_res: sheet.fisico_res,
    balistico_res: sheet.balistico_res,
    sangue_res: sheet.sangue_res,
    conhecimento_res: sheet.conhecimento_res,
    morte_res: sheet.morte_res,
    energia_res: sheet.energia_res,
    medo_res: sheet.medo_res,
  };

  return characterSheet;
};

module.exports = getCharacterSheetService;
