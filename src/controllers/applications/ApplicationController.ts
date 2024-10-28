import { Request, Response } from 'express';
import * as ApplicationService from '../../services/ApplicationService';

/**
 * @swagger
 * components:
 *   schemas:
 *     Application:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         user_id:
 *           type: integer
 *           example: 2
 *         name:
 *           type: string
 *           example: My Application
 *         email:
 *           type: string
 *           example: app@example.com
 *         phone:
 *           type: string
 *           example: 123-456-7890
 *         description:
 *           type: string
 *           example: A description of the application
 *         logo:
 *           type: string
 *           example: https://example.com/logo.png
 *         website:
 *           type: string
 *           example: https://example.com
 *         type:
 *           type: string
 *           example: SaaS
 *         marchant_id:
 *           type: integer
 *           example: 101
 *         status:
 *           type: boolean
 *           example: true
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2024-10-28T08:30:00Z"
 *
 * /api/applications:
 *   get:
 *     tags:
 *       - Application
 *     summary: Get all applications
 *     responses:
 *       200:
 *         description: List of applications
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Application'
 * 
 *   post:
 *     tags:
 *       - Application
 *     summary: Create a new application
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Application'
 *     responses:
 *       201:
 *         description: Application created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Application created successfully
 *                 application:
 *                   $ref: '#/components/schemas/Application'
 *       500:
 *         description: Server error
 */

export const list = async (_req: Request, res: Response) => {
  const result = await ApplicationService.getAll();
  res.json(result);
};

export const create = async (req: Request, res: Response) => {
  const result = await ApplicationService.create(req.body);
  res.status(201).json(result);
};

/**
 * @swagger
 * /api/applications/{id}:
 *   get:
 *     tags:
 *       - Application
 *     summary: Get application by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the application
 *     responses:
 *       200:
 *         description: Application data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Application'
 *       404:
 *         description: Application not found
 */

export const getById = async (req: Request, res: Response) => {
  const result = await ApplicationService.getById(Number(req.params.id));
  res.json(result);
};

/**
 * @swagger
 * /api/applications/{id}:
 *   put:
 *     tags:
 *       - Application
 *     summary: Update an application
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the application to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Application'
 *     responses:
 *       200:
 *         description: Application updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Application updated successfully
 *                 application:
 *                   $ref: '#/components/schemas/Application'
 *       404:
 *         description: Application not found
 *       500:
 *         description: Server error
 */

export const update = async (req: Request, res: Response) => {
  const result = await ApplicationService.update(Number(req.params.id), req.body);
  res.json(result);
};

/**
 * @swagger
 * /api/applications/{id}:
 *   delete:
 *     tags:
 *       - Application
 *     summary: Delete an application
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The application ID to delete
 *     responses:
 *       204:
 *         description: Application deleted successfully
 *       404:
 *         description: Application not found
 *       500:
 *         description: Server error
 */

export const deleteById = async (req: Request, res: Response) => {
  await ApplicationService.deleteById(Number(req.params.id));
  res.status(204).send();
};
