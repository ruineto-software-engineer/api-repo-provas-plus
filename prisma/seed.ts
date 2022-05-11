import { prisma } from "../src/database.js";

async function main() {
  //upsert = update/insert
  await prisma.category.createMany({
    data: [{ name: "P1" }, { name: "P2" }, { name: "P3" }],
    skipDuplicates: true,
  });

  await prisma.teacher.createMany({
    data: [{ name: "Dina" }, { name: "Bruninha" }, { name: "Pedrão" }],
    skipDuplicates: true,
  });

  await prisma.term.createMany({
    data: [{ number: 1 }, { number: 2 }, { number: 3 }],
    skipDuplicates: true,
  });

  await prisma.discipline.createMany({
    data: [
      { name: "HTML", termId: 1 },
      { name: "CSS", termId: 2 },
      { name: "JavaScript", termId: 3 },
    ],
    skipDuplicates: true,
  });

  await prisma.teacherDiscipline.createMany({
    data: [
      { disciplineId: 1, teacherId: 1 },
      { disciplineId: 2, teacherId: 2 },
      { disciplineId: 3, teacherId: 3 },
      { disciplineId: 2, teacherId: 1 },
      { disciplineId: 3, teacherId: 2 },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
