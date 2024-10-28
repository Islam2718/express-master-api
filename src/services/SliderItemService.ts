import { AppDataSource } from '../config/database';
import { SliderItem } from '../entities/SliderItem';

const sliderItemRepository = AppDataSource.getRepository(SliderItem);

export const getAll = async () => await sliderItemRepository.find();
export const getById = async (id: number) => await sliderItemRepository.findOneBy({ id });
export const create = async (sliderItem: Partial<SliderItem>) => await sliderItemRepository.save(sliderItem);
export const update = async (id: number, sliderItem: Partial<SliderItem>) => {
  await sliderItemRepository.update(id, sliderItem);
  return getById(id);
};
export const deleteById = async (id: number) => await sliderItemRepository.delete(id);
