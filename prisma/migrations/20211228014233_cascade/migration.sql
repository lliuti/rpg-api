-- DropForeignKey
ALTER TABLE "character_abilities" DROP CONSTRAINT "character_abilities_ability_id_fkey";

-- DropForeignKey
ALTER TABLE "character_attacks" DROP CONSTRAINT "character_attacks_attack_id_fkey";

-- DropForeignKey
ALTER TABLE "character_notes" DROP CONSTRAINT "character_notes_character_id_fkey";

-- DropForeignKey
ALTER TABLE "character_rituals" DROP CONSTRAINT "character_rituals_ritual_id_fkey";

-- DropForeignKey
ALTER TABLE "dice_rolls" DROP CONSTRAINT "dice_rolls_character_id_fkey";

-- AddForeignKey
ALTER TABLE "character_attacks" ADD CONSTRAINT "character_attacks_attack_id_fkey" FOREIGN KEY ("attack_id") REFERENCES "attacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_rituals" ADD CONSTRAINT "character_rituals_ritual_id_fkey" FOREIGN KEY ("ritual_id") REFERENCES "rituals"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dice_rolls" ADD CONSTRAINT "dice_rolls_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_notes" ADD CONSTRAINT "character_notes_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_abilities" ADD CONSTRAINT "character_abilities_ability_id_fkey" FOREIGN KEY ("ability_id") REFERENCES "abilities"("id") ON DELETE CASCADE ON UPDATE CASCADE;
