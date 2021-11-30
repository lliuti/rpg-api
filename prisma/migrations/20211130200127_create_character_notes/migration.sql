-- CreateTable
CREATE TABLE "character_notes" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "character_id" TEXT NOT NULL,
    "note_text" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "character_notes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "character_notes_id_key" ON "character_notes"("id");

-- AddForeignKey
ALTER TABLE "character_notes" ADD CONSTRAINT "character_notes_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
