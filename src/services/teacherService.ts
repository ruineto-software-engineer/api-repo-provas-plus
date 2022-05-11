import teacherRepository from "../repositories/teacherRepository.js";

async function getById(id: number) {
  return teacherRepository.getById(id);
}

async function getByDiscipline(discipline: number) {
  return teacherRepository.getByDiscipline(discipline);
}

export default {
  getById,
  getByDiscipline,
};
