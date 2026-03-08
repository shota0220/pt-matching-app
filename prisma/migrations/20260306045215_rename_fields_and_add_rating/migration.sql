/*
  Warnings:

  - You are about to drop the column `meesage` on the `Therapist` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Therapist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,
    "experience" INTEGER NOT NULL DEFAULT 0,
    "message" TEXT,
    "license" TEXT,
    "photo" TEXT,
    "lat" REAL NOT NULL,
    "lng" REAL NOT NULL,
    "walletBalance" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "rating" REAL NOT NULL DEFAULT 4.0,
    "price" INTEGER NOT NULL DEFAULT 5000
);
INSERT INTO "new_Therapist" ("createdAt", "email", "experience", "id", "lat", "license", "lng", "name", "photo", "price", "rating", "specialty", "updatedAt", "walletBalance") SELECT "createdAt", "email", "experience", "id", "lat", "license", "lng", "name", "photo", "price", "rating", "specialty", "updatedAt", "walletBalance" FROM "Therapist";
DROP TABLE "Therapist";
ALTER TABLE "new_Therapist" RENAME TO "Therapist";
CREATE UNIQUE INDEX "Therapist_email_key" ON "Therapist"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
