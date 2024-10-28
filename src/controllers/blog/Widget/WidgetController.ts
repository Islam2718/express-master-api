import { Request, Response } from 'express';
import * as WidgetService from '../../../services/WidgetService';

/**
 * @swagger
 * components:
 *   schemas:
 *     Widget:
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
 *         section_id:
 *           type: integer
 *           example: 4
 *         title:
 *           type: string
 *           example: "Widget Title"
 *         sub_title:
 *           type: string
 *           example: "Widget Subtitle"
 *         content:
 *           type: string
 *           example: "Content of the widget."
 *         thumb:
 *           type: string
 *           example: "https://example.com/thumb.jpg"
 *         cover_photo:
 *           type: string
 *           example: "https://example.com/cover.jpg"
 *         background_image:
 *           type: string
 *           example: "https://example.com/background.jpg"
 *         backgruound_color:
 *           type: string
 *           example: "#FFFFFF"
 *         font_color:
 *           type: string
 *           example: "#000000"
 *         status:
 *           type: boolean
 *           example: true
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2024-10-28T08:30:00Z"
 *
 * /api/widgets:
 *   get:
 *     tags:
 *       - Widget
 *     summary: Get all widgets
 *     responses:
 *       200:
 *         description: List of widgets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Widget'
 *
 *   post:
 *     tags:
 *       - Widget
 *     summary: Create a new widget
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Widget'
 *     responses:
 *       201:
 *         description: Widget created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Widget created successfully
 *                 widget:
 *                   $ref: '#/components/schemas/Widget'
 *       500:
 *         description: Server error
 */

export const list = async (_req: Request, res: Response) => {
    const result = await WidgetService.getAll();
    res.json(result);
};

export const create = async (req: Request, res: Response) => {
    const result = await WidgetService.create(req.body);
    res.status(201).json(result);
};

/**
 * @swagger
 * /api/widgets/{id}:
 *   get:
 *     tags:
 *       - Widget
 *     summary: Get widget by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the widget
 *     responses:
 *       200:
 *         description: Widget data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Widget'
 *       404:
 *         description: Widget not found
 */

export const getById = async (req: Request, res: Response) => {
    const result = await WidgetService.getById(Number(req.params.id));
    res.json(result);
}

/**
 * @swagger
 * /api/widgets/{id}:
 *   put:
 *     tags:
 *       - Widget
 *     summary: Update a widget
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the widget to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Widget'
 *     responses:
 *       200:
 *         description: Widget updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Widget'
 *       404:
 *         description: Widget not found
 *       500:
 *         description: Server error
 */

export const updateById = async (req: Request, res: Response) => {
    const result = await WidgetService.updateById(Number(req.params.id), req.body);
    res.json(result);
};

/**
 * @swagger
 * /api/widgets/{id}:
 *   delete:
 *     tags:
 *       - Widget
 *     summary: Delete a widget
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the widget to delete
 *     responses:
 *       204:
 *         description: Widget deleted successfully
 *       404:
 *         description: Widget not found
 *       500:
 *         description: Server error
 */

export const deleteById = async (req: Request, res: Response) => {
    await WidgetService.deleteById(Number(req.params.id));
    res.status(204).send();
};
