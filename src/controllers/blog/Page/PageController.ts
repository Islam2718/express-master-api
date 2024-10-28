import { Request, Response } from 'express';
import * as PageService from '../../../services/PageService';

/**
 * @swagger
 * components:
 *   schemas:
 *     Page:
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
 *         title:
 *           type: string
 *           example: "Page Title"
 *         sub_title:
 *           type: string
 *           example: "Page Subtitle"
 *         slug:
 *           type: string
 *           example: "page-title"
 *         content:
 *           type: string
 *           example: "Content for the page."
 *         meta_keyword:
 *           type: string
 *           example: "keyword1, keyword2"
 *         meta_description:
 *           type: string
 *           example: "Description for the page."
 *         thumb:
 *           type: string
 *           example: "https://example.com/image.jpg"
 *         status:
 *           type: boolean
 *           example: true
 *         created_at:
 *           type: string
 *           format: date-time
 *           example: "2024-10-28T08:30:00Z"
 *
 * /api/pages:
 *   get:
 *     tags:
 *       - Page
 *     summary: Get all pages
 *     responses:
 *       200:
 *         description: List of pages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Page'
 *
 *   post:
 *     tags:
 *       - Page
 *     summary: Create a new page
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Page'
 *     responses:
 *       201:
 *         description: Page created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Page created successfully
 *                 page:
 *                   $ref: '#/components/schemas/Page'
 *       500:
 *         description: Server error
 */

export const list = async (_req: Request, res: Response) => {
    const result = await PageService.getAll();
    res.json(result);
};

export const create = async (req: Request, res: Response) => {
    const result = await PageService.create(req.body);
    res.status(201).json(result);
};

/**
 * @swagger
 * /api/pages/{id}:
 *   get:
 *     tags:
 *       - Page
 *     summary: Get page by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the page
 *     responses:
 *       200:
 *         description: Page data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Page'
 *       404:
 *         description: Page not found
 */

export const getById = async (req: Request, res: Response) => {
    const result = await PageService.getById(Number(req.params.id));
    res.json(result);
}

/**
 * @swagger
 * /api/pages/{id}:
 *   put:
 *     tags:
 *       - Page
 *     summary: Update a page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the page to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Page'
 *     responses:
 *       200:
 *         description: Page updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Page'
 *       404:
 *         description: Page not found
 *       500:
 *         description: Server error
 */

export const updateById = async (req: Request, res: Response) => {
    const result = await PageService.update(Number(req.params.id), req.body);
    res.json(result);
};

/**
 * @swagger
 * /api/pages/{id}:
 *   delete:
 *     tags:
 *       - Page
 *     summary: Delete a page
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the page to delete
 *     responses:
 *       204:
 *         description: Page deleted successfully
 *       404:
 *         description: Page not found
 *       500:
 *         description: Server error
 */

export const deleteById = async (req: Request, res: Response) => {
    await PageService.deleteById(Number(req.params.id));
    res.status(204).send();
};
