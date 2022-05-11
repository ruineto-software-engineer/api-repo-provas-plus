import teachersDisciplinesRepository from "../repositories/teacherDisciplineRepository.js";

export async function getByTeacherAndDiscipline(
  teacherId: number,
  disciplineId: number
) {
  return teachersDisciplinesRepository.getByTeacherAndDiscipline(
    teacherId,
    disciplineId
  );
}

export default {
  getByTeacherAndDiscipline,
};
