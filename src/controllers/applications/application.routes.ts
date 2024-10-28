import express from 'express';
import * as ApplicationController from './ApplicationController';

const router = express.Router();

router.get('/', ApplicationController.list);
router.get('/:id', ApplicationController.getById);
router.post('/', ApplicationController.create);
router.put('/:id', ApplicationController.update);
router.delete('/:id', ApplicationController.deleteById);

export default router;
