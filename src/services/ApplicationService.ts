import { AppDataSource } from '../config/database';
import { Application } from '../entities/Application';

const applicationRepository = AppDataSource.getRepository(Application);

export const getAll = async () => await applicationRepository.find();
export const getById = async (id: number) => await applicationRepository.findOneBy({ id });
export const create = async (application: Partial<Application>) => await applicationRepository.save(application);
export const update = async (id: number, application: Partial<Application>) => {
  await applicationRepository.update(id, application);
  return getById(id);
};
export const deleteById = async (id: number) => await applicationRepository.delete(id);
