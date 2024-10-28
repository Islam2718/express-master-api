import { Request, Response } from 'express';
import * as UserService from '../../services/UserService';

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: John Doe
 *         email:
 *           type: string
 *           example: johndoe@example.com
 *         phone:
 *           type: string
 *           example: 123-456-7890
 *         role:
 *           type: string
 *           example: user
 *         status:
 *           type: boolean
 *           example: true
 * 
 * /api/users:
 *   get:
 *     tags:
 *       - User
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 * 
 *   post:
 *     tags:
 *       - User
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: User created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User created successfully
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       500:
 *         description: Server error
 */

export const list = async (_req: Request, res: Response) => {
  const result = await UserService.getAll();
  res.json(result);
};

export const create = async (req: Request, res: Response) => {
  const result = await UserService.create(req.body);
  res.status(201).json(result);
};

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags:
 *       - User
 *     summary: Get user by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user
 *     responses:
 *       200:
 *         description: User data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */

export const getById = async (req: Request, res: Response) => {
  const result = await UserService.getById(Number(req.params.id));
  res.json(result);
};

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags:
 *       - User
 *     summary: Update a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: User updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User updated successfully
 *                 user:
 *                   $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

export const updateById = async (req: Request, res: Response) => {
  const result = await UserService.updateById(Number(req.params.id), req.body);
  res.json(result);
};

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags:
 *       - User
 *     summary: Delete a user
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID to delete
 *     responses:
 *       204:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */

export const deleteById = async (req: Request, res: Response) => {
  await UserService.deleteById(Number(req.params.id));
  res.status(204).send();
};
