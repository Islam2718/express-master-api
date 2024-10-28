import express from 'express';
import * as WidgetController from './WidgetController';

const router = express.Router();

router.get('/', WidgetController.list);
router.get('/:id', WidgetController.getById);
router.post('/', WidgetController.create);
router.put('/:id', WidgetController.updateById);
router.delete('/:id', WidgetController.deleteById);

export default router;