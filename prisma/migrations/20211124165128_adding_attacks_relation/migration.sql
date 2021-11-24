/*
  Warnings:

  - Added the required column `attack_id` to the `character_attacks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "character_attacks" ADD COLUMN     "attack_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "character_attacks" ADD CONSTRAINT "character_attacks_attack_id_fkey" FOREIGN KEY ("attack_id") REFERENCES "attacks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
