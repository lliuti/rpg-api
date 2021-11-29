-- DropForeignKey
ALTER TABLE "character_attacks" DROP CONSTRAINT "character_attacks_character_id_fkey";

-- DropForeignKey
ALTER TABLE "character_rituals" DROP CONSTRAINT "character_rituals_character_id_fkey";

-- DropForeignKey
ALTER TABLE "characters" DROP CONSTRAINT "characters_player_id_fkey";

-- DropForeignKey
ALTER TABLE "sheets" DROP CONSTRAINT "sheets_character_id_fkey";

-- CreateTable
CREATE TABLE "dice_rolls" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "character_id" TEXT NOT NULL,
    "dice_face" TEXT NOT NULL,
    "dice_result" TEXT NOT NULL,

    CONSTRAINT "dice_rolls_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dice_rolls_id_key" ON "dice_rolls"("id");

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sheets" ADD CONSTRAINT "sheets_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_attacks" ADD CONSTRAINT "character_attacks_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_rituals" ADD CONSTRAINT "character_rituals_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dice_rolls" ADD CONSTRAINT "dice_rolls_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
