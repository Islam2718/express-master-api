import { AppDataSource } from '../config/database';
import { Section } from '../entities/Section';

const sectionRepository = AppDataSource.getRepository(Section);

export const getAll = async () => await sectionRepository.find();
export const getById = async (id: number) => await sectionRepository.findOneBy({ id });
export const create = async (section: Partial<Section>) => await sectionRepository.save(section);
export const updateById = async (id: number, section: Partial<Section>) => {
  await sectionRepository.update(id, section);
  return getById(id);
};
export const deleteById = async (id: number) => await sectionRepository.delete(id);
