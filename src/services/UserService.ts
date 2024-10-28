import { AppDataSource } from '../config/database';
import { User } from '../entities/User';

const userRepository = AppDataSource.getRepository(User);

export const getAll = async () => await userRepository.find();
export const getById = async (id: number) => await userRepository.findOneBy({ id });
export const create = async (user: Partial<User>) => await userRepository.save(user);
export const updateById = async (id: number, user: Partial<User>) => {
  await userRepository.update(id, user);
  return getById(id);
};
export const deleteById = async (id: number) => await userRepository.delete(id);
