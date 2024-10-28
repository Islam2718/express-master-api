import { AppDataSource } from '../config/database';
import { Slider } from '../entities/Slider';

const sliderRepository = AppDataSource.getRepository(Slider);

export const getAll = async () => await sliderRepository.find();
export const getById = async (id: number) => await sliderRepository.findOneBy({ id });
export const create = async (slider: Partial<Slider>) => await sliderRepository.save(slider);
export const update = async (id: number, slider: Partial<Slider>) => {
  await sliderRepository.update(id, slider);
  return getById(id);
};
export const deleteById = async (id: number) => await sliderRepository.delete(id);
