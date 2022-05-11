import { prisma } from "../database.js";

async function findMany() {
  return prisma.category.findMany();
}

async function getById(id: number) {
  return prisma.category.findUnique({
    where: { id },
  });
}

export default {
  findMany,
  getById,
};
