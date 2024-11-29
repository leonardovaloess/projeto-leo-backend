-- CreateTable
CREATE TABLE "pixKey" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "type_id" INTEGER NOT NULL,
    "type_description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pixKey_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pixKey" ADD CONSTRAINT "pixKey_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
