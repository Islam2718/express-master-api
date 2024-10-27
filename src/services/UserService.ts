import { AppDataSource } from '../config/database';
import { User } from '../entities/User';

const userRepository = AppDataSource.getRepository(User);

export const getAllUsers = async () => await userRepository.find();
export const getUserById = async (id: number) => await userRepository.findOneBy({ id });
export const createUser = async (user: Partial<User>) => await userRepository.save(user);
export const updateUser = async (id: number, user: Partial<User>) => {
  await userRepository.update(id, user);
  return getUserById(id);
};
export const deleteUser = async (id: number) => await userRepository.delete(id);
