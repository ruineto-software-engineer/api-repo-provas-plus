import { Prisma } from "@prisma/client";
import { prisma } from "../database.js";

async function getTestsByDiscipline(discipline: string) {
  return prisma.term.findMany({
    where: {
      disciplines: {
        some: {
          AND: {
            name: discipline,
            teacherDisciplines: { some: { tests: { some: {} } } },
          },
        },
      },
    },
    include: {
      disciplines: {
        include: {
          teacherDisciplines: {
            include: {
              teacher: true,
              tests: {
                include: {
                  category: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getTestsByTeachers(teacher: string) {
  return prisma.teacherDiscipline.findMany({
    where: {
      AND: { teacher: { name: teacher }, tests: { some: {} } },
    },
    include: {
      teacher: true,
      discipline: true,
      tests: {
        include: {
          category: true,
        },
      },
    },
  });
}

async function insert(createTestData: Prisma.TestUncheckedCreateInput) {
  await prisma.test.create({
    data: createTestData,
  });
}

async function getById(id: number) {
  return prisma.test.findUnique({
    where: { id },
  });
}

async function view(id: number) {
  return prisma.test.update({
    where: { id },
    data: {
      view: { increment: 1 },
    },
  });
}

export default {
  getTestsByDiscipline,
  getTestsByTeachers,
  insert,
  getById,
  view,
};
