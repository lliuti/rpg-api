-- CreateTable
CREATE TABLE "attacks" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "skill" TEXT NOT NULL,
    "range" TEXT NOT NULL,
    "damage" TEXT NOT NULL,
    "damageType" TEXT NOT NULL,
    "critical" TEXT NOT NULL,
    "criticalDamage" TEXT,
    "weight" TEXT,
    "description" TEXT,

    CONSTRAINT "attacks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "attacks_id_key" ON "attacks"("id");
