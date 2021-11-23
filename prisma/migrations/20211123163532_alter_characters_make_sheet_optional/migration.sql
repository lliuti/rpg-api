/*
  Warnings:

  - You are about to drop the column `sheetId` on the `characters` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[character_id]` on the table `sheets` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_sheetId_fkey";

-- AlterTable
ALTER TABLE "characters" DROP COLUMN "sheetId";

-- CreateIndex
CREATE UNIQUE INDEX "sheets_character_id_key" ON "sheets"("character_id");

-- AddForeignKey
ALTER TABLE "sheets" ADD CONSTRAINT "sheets_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
