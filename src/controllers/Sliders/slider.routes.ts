import express from 'express';
import * as SliderController from './SliderController';

const router = express.Router();

router.get('/', SliderController.list);
router.get('/:id', SliderController.getById);
router.post('/', SliderController.create);
router.put('/:id', SliderController.update);
router.delete('/:id', SliderController.deleteById);

export default router;
