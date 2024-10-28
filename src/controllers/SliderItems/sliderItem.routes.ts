import express from 'express';
import * as SliderItemController from './SliderItemController';

const router = express.Router();

router.get('/', SliderItemController.list);
router.get('/:id', SliderItemController.getById);
router.post('/', SliderItemController.create);
router.put('/:id', SliderItemController.update);
router.delete('/:id', SliderItemController.deleteById);

export default router;
