-- CreateTable
CREATE TABLE "GolfClub" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "material" TEXT NOT NULL,
    "price" MONEY NOT NULL,
    "inStock" INTEGER NOT NULL,

    CONSTRAINT "GolfClub_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GolfBall" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "price" MONEY NOT NULL,
    "inStock" INTEGER NOT NULL,

    CONSTRAINT "GolfBall_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apparel" (
    "id" SERIAL NOT NULL,
    "brand" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" MONEY NOT NULL,
    "inStock" INTEGER NOT NULL,

    CONSTRAINT "Apparel_pkey" PRIMARY KEY ("id")
);
