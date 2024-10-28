import { AppDataSource } from '../config/database';
import { Widget } from '../entities/Widget';

const widgetRepository = AppDataSource.getRepository(Widget);

export const getAll = async () => await widgetRepository.find();
export const getById = async (id: number) => await widgetRepository.findOneBy({ id });
export const create = async (widget: Partial<Widget>) => await widgetRepository.save(widget);
export const updateById = async (id: number, widget: Partial<Widget>) => {
  await widgetRepository.update(id, widget);
  return getById(id);
};
export const deleteById = async (id: number) => await widgetRepository.delete(id);
