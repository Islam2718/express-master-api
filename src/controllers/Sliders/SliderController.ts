import { Request, Response } from 'express';
import * as SliderService from '../../services/SliderService';

/**
 * @swagger
 * components:
 *   schemas:
 *     Slider:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         user_id:
 *           type: integer
 *           example: 2
 *         application_id:
 *           type: integer
 *           example: 3
 *         name:
 *           type: string
 *           example: My Slider
 *         location_code:
 *           type: string
 *           example: LC001
 *         status:
 *           type: boolean
 *           example: true
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2024-10-28T08:30:00Z"
 */

/**
 * @swagger
 * /api/sliders:
 *   get:
 *     tags:
 *       - Slider
 *     summary: Get all sliders
 *     responses:
 *       200:
 *         description: List of sliders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Slider'
 */
export const list = async (_req: Request, res: Response) => {
    const sliders = await SliderService.getAll();
    res.json(sliders);
};

/**
 * @swagger
 * /api/sliders/{id}:
 *   get:
 *     tags:
 *       - Slider
 *     summary: Get slider by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the slider
 *     responses:
 *       200:
 *         description: Slider data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Slider'
 *       404:
 *         description: Slider not found
 */
export const getById = async (req: Request, res: Response) => {
    const result = await SliderService.getById(Number(req.params.id));
    res.json(result);
}

/**
 * @swagger
 * /api/sliders:
 *   post:
 *     tags:
 *       - Slider
 *     summary: Create a new slider
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Slider'
 *     responses:
 *       201:
 *         description: Slider created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Slider'
 *       500:
 *         description: Server error
 */
export const create = async (req: Request, res: Response) => {
    const result = await SliderService.create(req.body);
    res.status(201).json(result);
}

/**
 * @swagger
 * /api/sliders/{id}:
 *   put:
 *     tags:
 *       - Slider
 *     summary: Update a slider
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the slider to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Slider'
 *     responses:
 *       200:
 *         description: Slider updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Slider'
 *       404:
 *         description: Slider not found
 *       500:
 *         description: Server error
 */
export const update = async (req: Request, res: Response) => {
    const result = await SliderService.update(Number(req.params.id), req.body);
    res.json(result);
}

/**
 * @swagger
 * /api/sliders/{id}:
 *   delete:
 *     tags:
 *       - Slider
 *     summary: Delete a slider
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The slider ID to delete
 *     responses:
 *       204:
 *         description: Slider deleted successfully
 *       404:
 *         description: Slider not found
 *       500:
 *         description: Server error
 */
export const deleteById = async (req: Request, res: Response) => {
    await SliderService.deleteById(Number(req.params.id));
    res.status(204).send();
};
