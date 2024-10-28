import express from 'express';
import * as SectionController from './SectionController';

const router = express.Router();

router.get('/', SectionController.list);
router.get('/:id', SectionController.getById);
router.post('/', SectionController.create);
router.put('/:id', SectionController.updateById);
router.delete('/:id', SectionController.deleteById);

export default router;