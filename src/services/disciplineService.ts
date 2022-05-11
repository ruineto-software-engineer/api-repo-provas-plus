import disciplineRepository from "./../repositories/disciplineRepository.js";

async function getById(id: number) {
  return disciplineRepository.getById(id);
}

async function getByTerm(term: number) {
  return disciplineRepository.getByTerm(term);
}

export default {
  getById,
  getByTerm,
};
