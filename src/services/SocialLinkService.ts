import { AppDataSource } from '../config/database';
import { SocialLink } from '../entities/SocialLink';

const socialLinkRepository = AppDataSource.getRepository(SocialLink);

export const getAllSocialLinks = async () => await socialLinkRepository.find();
export const getSocialLinkById = async (id: number) => await socialLinkRepository.findOneBy({ id });
export const createSocialLink = async (socialLink: Partial<SocialLink>) => await socialLinkRepository.save(socialLink);
export const updateSocialLink = async (id: number, socialLink: Partial<SocialLink>) => {
  await socialLinkRepository.update(id, socialLink);
  return getSocialLinkById(id);
};
export const deleteSocialLink = async (id: number) => await socialLinkRepository.delete(id);
