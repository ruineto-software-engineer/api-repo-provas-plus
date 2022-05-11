import categoryRepository from "../repositories/categoryRepository.js";

async function findMany() {
  return categoryRepository.findMany();
}

async function getById(id: number) {
  return categoryRepository.getById(id);
}

export default {
  findMany,
  getById,
};
