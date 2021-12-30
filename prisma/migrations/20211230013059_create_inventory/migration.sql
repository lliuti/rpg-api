-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "max_weight" INTEGER DEFAULT 8;

-- CreateTable
CREATE TABLE "character_inventory" (
    "id" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "character_id" TEXT NOT NULL,
    "item" TEXT NOT NULL,
    "weight" INTEGER NOT NULL,

    CONSTRAINT "character_inventory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "character_inventory_id_key" ON "character_inventory"("id");

-- AddForeignKey
ALTER TABLE "character_inventory" ADD CONSTRAINT "character_inventory_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;
