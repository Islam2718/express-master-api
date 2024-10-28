import express from 'express';
import * as SocialLinkController from './SocialLinksController';

const router = express.Router();

router.get('/', SocialLinkController.list);
router.get('/:id', SocialLinkController.get);
router.post('/', SocialLinkController.create);
router.put('/:id', SocialLinkController.update);
router.delete('/:id', SocialLinkController.deleteSocialLink);

export default router;
