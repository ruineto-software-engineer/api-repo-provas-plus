import { prisma } from "../database.js";

async function getById(id: number) {
  return prisma.discipline.findUnique({
    where: { id },
  });
}

async function getByTerm(term: number) {
  return prisma.discipline.findMany({
    where: { termId: term },
  });
}

export default {
  getById,
  getByTerm,
};
