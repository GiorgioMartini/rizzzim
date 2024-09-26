/*
  Warnings:

  - You are about to drop the `Game` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Game" DROP CONSTRAINT "Game_profileId_fkey";

-- DropTable
DROP TABLE "public"."Game";

-- CreateTable
CREATE TABLE "public"."games" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "profileId" INTEGER NOT NULL,

    CONSTRAINT "games_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."games" ADD CONSTRAINT "games_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "public"."profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
