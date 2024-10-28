import { Request, Response } from 'express';
import * as SliderItemService from '../../services/SliderItemService';

/**
 * @swagger
 * components:
 *   schemas:
 *     SliderItem:
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
 *         slider_id:
 *           type: integer
 *           example: 4
 *         title:
 *           type: string
 *           example: "Slider Title"
 *         sub_title:
 *           type: string
 *           example: "Slider Subtitle"
 *         content:
 *           type: string
 *           example: "Content for the slider item."
 *         link_url:
 *           type: string
 *           example: "https://example.com"
 *         thumb:
 *           type: string
 *           example: "https://example.com/image.jpg"
 *         target_blank:
 *           type: boolean
 *           example: true
 *         status:
 *           type: boolean
 *           example: true
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2024-10-28T08:30:00Z"
 *
 * /api/slider-items:
 *   get:
 *     tags:
 *       - SliderItem
 *     summary: Get all slider items
 *     responses:
 *       200:
 *         description: List of slider items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SliderItem'
 *
 *   post:
 *     tags:
 *       - SliderItem
 *     summary: Create a new slider item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SliderItem'
 *     responses:
 *       201:
 *         description: Slider item created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Slider item created successfully
 *                 sliderItem:
 *                   $ref: '#/components/schemas/SliderItem'
 *       500:
 *         description: Server error
 */

export const list = async (_req: Request, res: Response) => {
    const result = await SliderItemService.getAll();
    res.json(result);
};

export const create = async (req: Request, res: Response) => {
    const result = await SliderItemService.create(req.body);
    res.status(201).json(result);
};

/**
 * @swagger
 * /api/slider-items/{id}:
 *   get:
 *     tags:
 *       - SliderItem
 *     summary: Get slider item by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the slider item
 *     responses:
 *       200:
 *         description: Slider item data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SliderItem'
 *       404:
 *         description: Slider item not found
 */

export const getById = async (req: Request, res: Response) => {
    const result = await SliderItemService.getById(Number(req.params.id));
    res.json(result);
}

/**
 * @swagger
 * /api/slider-items/{id}:
 *   put:
 *     tags:
 *       - SliderItem
 *     summary: Update a slider item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the slider item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/SliderItem'
 *     responses:
 *       200:
 *         description: Slider item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/SliderItem'
 *       404:
 *         description: Slider item not found
 *       500:
 *         description: Server error
 */

export const update = async (req: Request, res: Response) => {
    const result = await SliderItemService.update(Number(req.params.id), req.body);
    res.json(result);
};

/**
 * @swagger
 * /api/slider-items/{id}:
 *   delete:
 *     tags:
 *       - SliderItem
 *     summary: Delete a slider item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The slider item ID to delete
 *     responses:
 *       204:
 *         description: Slider item deleted successfully
 *       404:
 *         description: Slider item not found
 *       500:
 *         description: Server error
 */

export const deleteById = async (req: Request, res: Response) => {
    await SliderItemService.deleteById(Number(req.params.id));
    res.status(204).send();
};
