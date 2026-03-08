import { PrismaClient } from "@prisma/client"; 

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;

// 【役割】
// PrismaClient: DBを操作する魔法の杖
// global: 何度も接続して冷蔵庫が壊れないように、1つだけに制限しています。　　　　　　