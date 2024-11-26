/*
  Warnings:

  - Added the required column `subscription_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `subscription_status` on the `User` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "subscription_id" INTEGER NOT NULL,
DROP COLUMN "subscription_status",
ADD COLUMN     "subscription_status" BOOLEAN NOT NULL;
