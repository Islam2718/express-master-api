import express from 'express';
import * as PageController from './PageController';

const router = express.Router();

router.get('/', PageController.list);
router.get('/:id', PageController.getById);
router.post('/', PageController.create);
router.put('/:id', PageController.updateById);
router.delete('/:id', PageController.deleteById);

export default router;