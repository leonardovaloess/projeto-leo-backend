/*
  Warnings:

  - You are about to drop the column `price` on the `Service` table. All the data in the column will be lost.
  - You are about to drop the `Subscription` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `price_cents` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Subscription" DROP CONSTRAINT "Subscription_user_id_fkey";

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "price",
ADD COLUMN     "price_cents" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Subscription";
