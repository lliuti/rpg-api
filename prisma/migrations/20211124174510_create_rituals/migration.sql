-- CreateTable
CREATE TABLE "rituals" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "element" TEXT NOT NULL,
    "circle" TEXT DEFAULT E'1o',
    "cost" TEXT NOT NULL,
    "range" TEXT,
    "execTime" TEXT DEFAULT E'Padrao',
    "area" TEXT,
    "duration" TEXT,

    CONSTRAINT "rituals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_rituals" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "character_id" TEXT NOT NULL,
    "ritual_id" TEXT NOT NULL,

    CONSTRAINT "character_rituals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rituals_id_key" ON "rituals"("id");

-- CreateIndex
CREATE UNIQUE INDEX "character_rituals_id_key" ON "character_rituals"("id");

-- AddForeignKey
ALTER TABLE "character_rituals" ADD CONSTRAINT "character_rituals_character_id_fkey" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "character_rituals" ADD CONSTRAINT "character_rituals_ritual_id_fkey" FOREIGN KEY ("ritual_id") REFERENCES "rituals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
