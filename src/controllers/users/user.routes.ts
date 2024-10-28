import express from 'express';
import * as UserController from './UserController';

const router = express.Router();

router.get('/', UserController.list);
router.get('/:id', UserController.getById);
router.post('/', UserController.create);
router.put('/:id', UserController.updateById);
router.delete('/:id', UserController.deleteById);

export default router;
