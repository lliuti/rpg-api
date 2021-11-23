-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL,
    "player_id" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "occupation" TEXT DEFAULT E'-',
    "age" INTEGER DEFAULT 0,
    "archetype" TEXT DEFAULT E'-',
    "exp" TEXT DEFAULT E'50%',

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "characters_id_key" ON "characters"("id");

-- AddForeignKey
ALTER TABLE "characters" ADD CONSTRAINT "characters_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "players"("id") ON DELETE SET NULL ON UPDATE CASCADE;
