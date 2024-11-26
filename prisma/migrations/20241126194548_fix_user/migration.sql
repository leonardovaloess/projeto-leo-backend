/*
  Warnings:

  - You are about to drop the column `stripe_customer_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_end_date` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_id` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_start_date` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `subscription_status` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "stripe_customer_id",
DROP COLUMN "subscription_end_date",
DROP COLUMN "subscription_id",
DROP COLUMN "subscription_start_date",
DROP COLUMN "subscription_status";
