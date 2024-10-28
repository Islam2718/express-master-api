import { AppDataSource } from '../config/database';
import { Page } from '../entities/Page';

const pageRepository = AppDataSource.getRepository(Page);

export const getAll = async () => await pageRepository.find();
export const getById = async (id: number) => await pageRepository.findOneBy({ id });
export const create = async (page: Partial<Page>) => await pageRepository.save(page);
export const update = async (id: number, page: Partial<Page>) => {
  await pageRepository.update(id, page);
  return getById(id);
};
export const deleteById = async (id: number) => await pageRepository.delete(id);
