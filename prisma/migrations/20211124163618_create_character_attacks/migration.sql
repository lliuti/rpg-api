-- CreateTable
CREATE TABLE "character_attacks" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "character_id" TEXT NOT NULL,

    CONSTRAINT "character_attacks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "character_attacks_id_key" ON "character_attacks"("id");

-- AddForeignKey
ALTER TABLE "character_attacks" ADD CONSTRAINT "character_attacks_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
