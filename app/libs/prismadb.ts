import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV !== "production") {
  const client = new PrismaClient();
  globalThis.prisma = client;
}

export default globalThis.prisma;
