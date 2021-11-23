/*
  Warnings:

  - Added the required column `sheetId` to the `characters` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "sheetId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "sheets" (
    "id" TEXT NOT NULL,
    "character_id" TEXT,
    "max_life" TEXT DEFAULT E'0',
    "curr_life" TEXT DEFAULT E'0',
    "max_san" TEXT DEFAULT E'0',
    "curr_san" TEXT DEFAULT E'0',
    "max_eff" TEXT DEFAULT E'0',
    "curr_eff" TEXT DEFAULT E'0',
    "for_attr" TEXT DEFAULT E'0',
    "int_attr" TEXT DEFAULT E'0',
    "pre_attr" TEXT DEFAULT E'0',
    "agi_attr" TEXT DEFAULT E'0',
    "vig_attr" TEXT DEFAULT E'0',
    "atletismo_skill" TEXT DEFAULT E'0',
    "atualidades_skill" TEXT DEFAULT E'0',
    "ciencia_skill" TEXT DEFAULT E'0',
    "diplomacia_skill" TEXT DEFAULT E'0',
    "enganacao_skill" TEXT DEFAULT E'0',
    "fortitude_skill" TEXT DEFAULT E'0',
    "furtividade_skill" TEXT DEFAULT E'0',
    "intimidacao_skill" TEXT DEFAULT E'0',
    "investigacao_skill" TEXT DEFAULT E'0',
    "luta_skill" TEXT DEFAULT E'0',
    "medicina_skill" TEXT DEFAULT E'0',
    "ocultismo_skill" TEXT DEFAULT E'0',
    "percepcao_skill" TEXT DEFAULT E'0',
    "pilotagem_skill" TEXT DEFAULT E'0',
    "pontaria_skill" TEXT DEFAULT E'0',
    "prestidigitacao_skill" TEXT DEFAULT E'0',
    "profissao_skill" TEXT DEFAULT E'0',
    "reflexos_skill" TEXT DEFAULT E'0',
    "religiao_skill" TEXT DEFAULT E'0',
    "tatica_skill" TEXT DEFAULT E'0',
    "tecnologia_skill" TEXT DEFAULT E'0',
    "vontade_skill" TEXT DEFAULT E'0',
    "defesa_def" TEXT DEFAULT E'0',
    "fisico_res" TEXT DEFAULT E'0',
    "balistico_res" TEXT DEFAULT E'0',
    "sangue_res" TEXT DEFAULT E'0',
    "conhecimento_res" TEXT DEFAULT E'0',
    "morte_res" TEXT DEFAULT E'0',
    "energia_res" TEXT DEFAULT E'0',
    "medo_res" TEXT DEFAULT E'0',

    CONSTRAINT "sheets_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sheets_id_key" ON "sheets"("id");

-- AddForeignKey
ALTER TABLE "characters" ADD FOREIGN KEY ("sheetId") REFERENCES "sheets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
